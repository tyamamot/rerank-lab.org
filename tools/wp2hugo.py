#!/usr/bin/env python3
"""WordPress (qTranslate-X) の DB ダンプから Hugo 用の日英 Markdown を生成する。
usage: python3 wp2hugo.py DUMP.sql SITE_DIR
"""
import sys, os, re, subprocess
sys.path.insert(0, os.path.dirname(__file__))
from wpparse import rows

DUMP, SITE = sys.argv[1], sys.argv[2]
LANGS = ['ja', 'en']
OLD = r'https?://(?:www\.)?rerank-lab\.org'

def qsplit(s):
    """qTranslate の [:ja]..[:en]..[:] を言語ごとに分解"""
    out = {l: '' for l in LANGS}
    cur = None
    for tok in re.split(r'(\[:[a-z]{0,2}\])', s):
        m = re.fullmatch(r'\[:([a-z]{0,2})\]', tok)
        if m:
            cur = m.group(1) or None
            continue
        for l in LANGS:
            if cur is None or cur == l:
                out[l] += tok
    return {l: v.strip() for l, v in out.items()}

BLOCK = r'(?:div|ul|ol|li|h[1-6]|table|thead|tbody|tr|td|th|blockquote|pre|p|dl|dt|dd|hr|!--)'
def autop(t):
    """WordPress の wpautop の簡易版（改行→段落/改行タグ）"""
    t = t.replace('\r\n', '\n')
    t = re.sub(r'(<' + BLOCK + r'[^>]*>)', r'\n\n\1', t)
    t = re.sub(r'(</(?:div|ul|ol|li|h[1-6]|table|tr|blockquote|pre|p|dl)>|-->)', r'\1\n\n', t)
    out = []
    for para in re.split(r'\n\s*\n', t):
        para = para.strip()
        if not para: continue
        if re.match(r'<' + BLOCK, para) or re.match(r'</', para):
            out.append(para)
        else:
            out.append('<p>' + para.replace('\n', '<br />\n') + '</p>')
    return '\n'.join(out)

def to_md(html):
    html = re.sub(r'<!--.*?-->', '', html, flags=re.S)
    html = re.sub(OLD + r'/', '/', html)
    html = re.sub(r'</?div[^>]*>', '\n', html)          # レイアウト用 div は外す
    # リスト項目内の改行は WordPress では <br> として表示されていた
    html = re.sub(r'<li>(.*?)</li>', lambda m: '<li>' + re.sub(r'\s*\n\s*', '<br />', m.group(1).strip()) + '</li>', html, flags=re.S)
    md = subprocess.run(['pandoc', '-f', 'html', '-t', 'gfm', '--wrap=none'],
                        input=autop(html), capture_output=True, text=True, check=True).stdout
    md = md.replace('\\\n', '  \n')          # pandoc の改行(\)→Markdownの行末スペース2つ
    md = re.sub(r'\n{3,}', '\n\n', md)
    return md.strip() + '\n'

def yq(s): return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'

def write(path, fm, body):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    lines = ['---']
    for k, v in fm.items():
        if k == 'menu_weight': lines.append(f'menus:\n  main:\n    weight: {v}'); continue
        if isinstance(v, list): lines.append(f'{k}: [{", ".join(yq(x) for x in v)}]')
        elif isinstance(v, (int, float)): lines.append(f'{k}: {v}')
        else: lines.append(f'{k}: {yq(v)}')
    lines.append('---')
    open(path, 'w', encoding='utf-8').write('\n'.join(lines) + '\n\n' + body)

sql = open(DUMP, encoding='utf-8', errors='replace').read()
posts = [r for r in rows(sql, 'wp_posts') if r[7] == 'publish' and r[20] in ('post', 'page')]

# 固定ページのメニュー順（WordPress のメニュー順に準拠）
PAGE_WEIGHT = {'biography': 20, 'research': 30, 'publication': 40, 'education': 50,
               'lecture': 60, 'services': 70, 'message': 80}
FRONT = '16'
report = []
for r in posts:
    pid, date, body, title, slug, typ = r[0], r[2], r[4], r[5], r[11], r[20]
    T, B = qsplit(title), qsplit(body)
    for lang in LANGS:
        if not T[lang] and not B[lang]:
            continue
        if lang == 'en' and '[:en]' not in title + body:
            continue                      # 英語版がない記事は英語サイトに出さない
        if pid == FRONT:
            continue                      # トップページは手で整形
        md = to_md(B[lang])
        if typ == 'page':
            fm = {'title': T[lang] or T['ja'], 'slug': slug,
                  'menu_weight': PAGE_WEIGHT.get(slug, 90)}
            if lang == 'ja': fm['aliases'] = [f'/ja/{slug}/']
            path = f'{SITE}/content/{slug}.{lang}.md'
        else:
            fm = {'title': T[lang] or T['ja'], 'date': date.replace(' ', 'T') + '+09:00',
                  'slug': slug, 'wp_id': int(pid)}
            if lang == 'ja': fm['aliases'] = [f'/ja/{slug}/']
            path = f'{SITE}/content/news/{slug}.{lang}.md'
        write(path, fm, md)
        report.append((typ, lang, slug, len(md)))

for x in sorted(report): print(*x)
