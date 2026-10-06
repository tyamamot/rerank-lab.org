"""一回限り: content/publication.{ja,en}.md → data/publications/*.yaml"""
import sys, re, os, yaml
sys.path.insert(0, os.path.dirname(__file__))
from pubparse import parse, norm, TYPES_JA, TYPES_EN, CJK

ja = parse('../migration_backup/publication.ja.md', TYPES_JA)
en = parse('../migration_backup/publication.en.md', TYPES_EN)

# --- 構造化できなかった2件を手で分解 ---
for e in ja:
    t = e.get('text', '')
    if t.startswith('片岡大祐'):
        e.update(authors='片岡大祐, 加藤誠, 山本岳洋, 大島裕明, 田中克己', title='SNSグラフデータにおける文脈を考慮した適合フィードバック検索',
                 venue='日本データベース学会和文論文誌, Vol.16-J, No.11, 2017年.'); del e['text']
    elif t.startswith('于津松'):
        e.update(authors='于津松, 瀧平士夫, 澤浦司, 莊司慶行, 山本岳洋, 山本祐輔, 神門典子, 大島裕明',
                 title='主体的なミュージアム観賞を促すための個人に合わせた「宝探し」ゲームの自動生成',
                 venue='第15回データ工学と情報マネジメントに関するフォーラム（DEIM2023）, 4b-9-3, 2023年3月.'); del e['text']
    elif e.get('authors') == '（共訳）':
        pass
    elif 'netplus.nikkei' in t: e['date'] = '2009-07'
    elif 'japan.cnet.com' in t: e['date'] = '2009-06'

# --- 英語の論文の表記を統一 ---
for e in ja:
    if e.get('title') and not CJK.search(e['title']):
        v = re.sub(r'^In (Proc\.|Proceedings?)( of)?\s*', 'Proceedings of ', e['venue'])
        v = (v.replace('(Ecol2015)', '(Ecol 2015)').replace('NTCIR , pp. 45-56', 'NTCIR, pp.45-56')
               .replace('pp. 202-207, Dec, 2011.', 'pp. 202-207, December 2011.'))
        if 'SWOD2007' in v:
            v = 'Proceedings of the 3rd International Special Workshop on Databases for Next-Generation Researchers (SWOD 2007), April 2007.'
        e['venue'] = v
        e['authors'] = e['authors'].rstrip('.')
    if e.get('authors') == '（共訳）':
        lines = e['venue'].split('\n')
        e.update(authors=lines[0].rstrip(), venue='\n'.join(lines[1:]), prefix='（共訳）')
    if e.get('title') == 'Search Support Tools':
        e['authors'] = e['authors'].replace('(チャプターを分担執筆） ', '')
        e['ja'] = {'prefix': '（チャプターを分担執筆）'}
    if isinstance(e.get('award'), str) and e['award'].startswith('WebDB Forum 2018 論文賞 runners-up'):
        e['en'] = {'award': 'WebDB Forum 2018 Best Paper Award runners-up'}

# --- 英語ページにだけあったもの ---
ja.append({'type': 'conference', 'date': '2023-07',
           'authors': 'Ryota Mibayashi, Masaki Ueta, Takafumi Kawahara, Naoaki Matsumoto, Takuma Yoshimura, Kenro Aihara, Noriko Kando, Yoshiyuki Shoji, Yuta Nakajima, Takehiro Yamamoto, Yusuke Yamamoto, Hiroaki Ohshima',
           'title': 'MinpakuBERT: A Language Model for Understanding Cultural Properties in Museum',
           'venue': '2022 12th International Congress on Advanced Applied Informatics (IIAI-AAI), pp. 13-18, July 2023.'})

# --- 書き出し（種類ごと、新しい順） ---
class Lit(str): pass
class Q(str): pass
yaml.add_representer(Lit, lambda d, s: d.represent_scalar('tag:yaml.org,2002:str', s, style='|'))
yaml.add_representer(Q, lambda d, s: d.represent_scalar('tag:yaml.org,2002:str', s, style='"'))
ORDER = ['date', 'prefix', 'authors', 'title', 'venue', 'award', 'text', 'lang', 'ja', 'en']
HEAD = {'book': '著書等 / Book Chapter', 'journal': '学術論文誌（英語のものは英語ページの Papers / Journals にも出る）',
        'conference': '査読付き国際会議論文（英語ページの Papers / Journals にも出る）',
        'workshop': 'ワークショップ/国内学会（英語のものは英語ページの Workshops/Others にも出る）',
        'media': '報道（日本語ページのみ）', 'article': '解説記事（日本語ページのみ）', 'talk': 'トーク（日本語ページのみ）'}
os.makedirs('data/publications', exist_ok=True)
for typ in HEAD:
    items = [e for e in ja if e['type'] == typ]
    items.sort(key=lambda e: e['date'], reverse=True)
    rows = []
    for e in items:
        r = {}
        for k in ORDER:
            if k in e and e[k] not in ('', None):
                v = e[k]
                r[k] = Q(v) if k == 'date' else (Lit(v) if isinstance(v, str) and '\n' in v else v)
        rows.append(r)
    with open(f'data/publications/{typ}.yaml', 'w', encoding='utf-8') as f:
        f.write(f'# {HEAD[typ]}\n# 新しいものを上に追加。date は並べ替えに使う（YYYY-MM）。書き方は README.md を参照。\n\n')
        yaml.dump(rows, f, allow_unicode=True, sort_keys=False, width=1000, default_flow_style=False)
    print(typ, len(rows))
