"""publication.{ja,en}.md（Markdownの番号付きリスト）を構造化する（移行用の一回限りのツール）"""
import re
TYPES_JA = {'著書等': 'book', '学術論文誌': 'journal', '査読付き国際会議論文': 'conference',
            'ワークショップ/国内学会': 'workshop', '報道': 'media', '解説記事': 'article', 'トーク': 'talk'}
TYPES_EN = {'Book Chapter': 'book', 'Papers / Journals': 'paper', 'Workshops/Others': 'workshop'}
CJK = re.compile(r'[぀-ヿ一-鿿]')
MON = {m: i + 1 for i, m in enumerate(['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'])}
def norm(t): return re.sub(r'[^a-z0-9぀-ヿ一-鿿]', '', (t or '').lower())

def guess_date(s):
    m = list(re.finditer(r'((?:19|20)\d\d)年\s*(\d{1,2})月', s))
    if m: return f'{m[-1].group(1)}-{int(m[-1].group(2)):02d}'
    m = list(re.finditer(r'\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?,?\s*((?:19|20)\d\d)', s))
    if m: return f'{m[-1].group(2)}-{MON[m[-1].group(1).lower()]:02d}'
    m = list(re.finditer(r'(?<![\d.])((?:19|20)\d\d)(?![\d])', s))
    return m[-1].group(1) if m else ''

def parse(path, types):
    s = open(path, encoding='utf-8').read()
    out = []
    for m in re.finditer(r'^### (.+?)\n(.*?)(?=^### |\Z)', s, re.S | re.M):
        typ = types[m.group(1).strip()]
        for it in re.split(r'\n(?=\d+\.\s)', m.group(2).strip()):
            if not re.match(r'\d+\.\s', it): continue
            lines = [l.strip() for l in re.sub(r'^\d+\.\s+', '', it).split('\n') if l.strip()]
            awards = [a.strip() for l in lines if re.fullmatch(r'==.+==', l) for a in re.split(r'==\s*[,，、]?\s*==', l[2:-2])]
            body = '\n'.join(l for l in lines if not re.fullmatch(r'==.+==', l))
            e = {'type': typ}
            t = re.search(r'(?<![*\\])\*(?!\*)([^*\n]+?)(?<!\\)\*(?!\*)', body)
            if t:
                e['authors'] = re.sub(r'\s+', ' ', body[:t.start()].replace('**', '')).strip().rstrip(':：,，').strip()
                e['title'] = t.group(1).strip()
                rest = body[t.end():].lstrip(',，').strip()
                e['venue'] = '\n'.join(l.strip() for l in rest.split('\n') if l.strip())
            else:
                e['text'] = re.sub(r'\s*\n\s*', ' ', body)
            if awards: e['award'] = awards[0] if len(awards) == 1 else awards
            e['date'] = guess_date(body)
            out.append(e)
    return out
