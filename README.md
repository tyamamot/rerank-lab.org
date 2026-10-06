# rerank-lab.org（Hugo 版）

旧 WordPress（qTranslate-X）から移行した個人サイト。日本語は `/`、英語は `/en/`。

## 手元で見る
    brew install hugo        # 初回のみ
    cd rerank-lab-hugo
    hugo server              # → http://localhost:1313/

## ファイルの置き場所
| 何を | どこに |
|---|---|
| トップページ（プロフィール・自己紹介・受賞） | `content/_index.ja.md` / `_index.en.md` |
| 固定ページ（略歴・業績など） | `content/<slug>.ja.md` / `<slug>.en.md` |
| 記事 | `content/posts/YYYY-MM-DD-<slug>.ja.md` / `.en.md`（URLは /posts/年/<slug>/、一覧は /posts/ に5件ずつ全文表示） |
| 画像・PDF | `static/`（`static/papers/x.pdf` → `/papers/x.pdf`） |
| デザイン | `layouts/`（HTML）, `assets/css/main.css` |
| サイト設定・メニュー | `hugo.toml` |
| 日英の定型文言 | `i18n/ja.toml`, `i18n/en.toml` |

## 日英のルール
- 同じファイル名で `.ja.md` と `.en.md` を置くと、互いの翻訳として自動リンクされる。
- `.ja.md` しかない記事・ページは **日本語サイトにだけ** 表示される（英語の一覧やメニューに出ない）。

## 記事の追加例
ファイル名を「`日付-名前.ja.md`」にするだけで、日付とURLが決まる（front matter に date や slug は書かなくてよい）。

`content/posts/2027-04-01-sigir-2027.ja.md`:

    ---
    title: "SIGIR 2027に論文が採録されました"
    ---
    本文（Markdown）

→ 日付 2027-04-01、URL `/posts/2027/sigir-2027/`。
英語でも出すなら同じファイル名の `.en.md` を作る（URL `/en/posts/2027/sigir-2027/`）。

名前の付け方: 半角英小文字・数字・ハイフンだけ、短く（例: `cikm-2027`, `best-paper-award`, `new-lab-members`）。
同じ年の中で重ならなければよい。
※ 今日より先の日付の記事は、その日が来るまで表示されない。

## 旧URLからの転送
旧WordPressのURL（`/post-202/`, `/biography/` の `/ja/` 版など）は、各ページの `aliases:` に書いてあり、新URLへ自動で転送するページが作られる（public/ の post-xxx/ フォルダはこの転送用）。
GitHub Pages ではサーバ側の 301 が使えないため、この方式（meta refresh＋canonical）で代用している。
十分な期間が過ぎたら hugo.toml に `disableAliases = true` を1行足せば、転送ページはすべて作られなくなる。

## 移行ツール
`tools/wp2hugo.py` — WordPress の DB ダンプから content/ を生成した移行ツール（もう使わない）。
`tools/pubparse.py`, `tools/migrate_publications.py` — 旧業績ページ（Markdown）から data/publications/ を作った移行ツール（もう使わない。元のファイルは ../migration_backup/）。

## 業績の追加・更新（日英共通）
業績は `data/publications/` の YAML に **1回だけ** 書く。日本語ページ・英語ページの両方が自動で更新される。

| ファイル | 日本語ページの見出し | 英語ページ |
|---|---|---|
| `book.yaml` | 著書等 | Book Chapter |
| `journal.yaml` | 学術論文誌 | Papers / Journals |
| `conference.yaml` | 査読付き国際会議論文 | Papers / Journals |
| `workshop.yaml` | ワークショップ/国内学会 | Workshops/Others |
| `media.yaml` / `article.yaml` / `talk.yaml` | 報道 / 解説記事 / トーク | 出さない |

- 英語ページには「タイトルと掲載先に日本語を含まないもの」だけが自動で出る（例外は `lang: en` / `lang: ja` で指定）
- 各見出しの中は `date` の新しい順に自動で並び、番号も自動。自分の名前（hugo.toml の `selfNames`）は自動で下線
- 追加例（ファイルの先頭に足す）:

```yaml
- date: "2027-04"
  authors: Taro Hyogo, Takehiro Yamamoto and Hiroaki Ohshima
  title: A Great Paper Title
  venue: Proceedings of the 50th International ACM SIGIR Conference (SIGIR 2027), to appear, July 2027.
  award: Best Paper Award          # 受賞があれば（複数なら [A賞, B賞]）
  en:                              # 英語ページでだけ変えたい項目があれば
    award: Best Paper Award (EN表記)
```

- 掲載先が2行以上なら `venue: |` の次の行から字下げして書く。リンクは Markdown（`[\[preprint\]](/papers/x.pdf)`）
- タイトルのない項目（報道など）は `text:` に1行で書く
- 見出しの名前や並びは `layouts/_shortcodes/publications.html` の `$sections`

## 書き方のルール（Markdownのページ）
- 太字にしたい語: `*語*`、自分の名前: `**山本岳洋**`
- 受賞: `==Best Paper Award==`（青の太字で表示）
- 情報量の多いページは front matter に `compact: true` を書くと、文字を小さく詰めて表示（業績ページで使用）
- DBLP / Google Scholar / researchmap のボタン: 本文中に `{{< profile-links >}}` と書くと表示（リンク先は hugo.toml の params.profileLinks）
