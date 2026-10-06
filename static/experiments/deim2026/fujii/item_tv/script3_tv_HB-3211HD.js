
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです': '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '安さだけで選ぶと損しますよ': '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ', 'リモコンの反応が若干遅い': '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い'}, '音質の良さ': {}, '運びやすさ': {'やや脚部が華奢な作りかな': '寝室用。まったく問題はないが、やや脚部が華奢な作りかな', '部屋のサイズにもあって気に入りました?': '部屋のサイズにもあって気に入りました?(^o^)／機会があったらまたたのみたいです。', 'あえて言えば、足（台）の部分がもう少し、 しっかりしていればと思います。': '映りはバッチリです。 値段から考えて，良い買い物をいたしました。 あえて言えば、足（台）の部分がもう少し、 しっかりしていればと思います。', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', 'デレビ大サイズで良かったですね': 'デレビ大サイズで良かったですね   また買いたいですね', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。': '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。 起動までに少し時間がかかりますが、気にならない程度です。', '画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', '大画面': '値段も安く、大画面でゲーム出来て大満足です', '32型': '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。 起動までに少し時間がかかりますが、気にならない程度です。'}, '脚の安定性': {'あえて言えば、足（台）の部分がもう少し、 しっかりしていればと思います。': '映りはバッチリです。 値段から考えて，良い買い物をいたしました。 あえて言えば、足（台）の部分がもう少し、 しっかりしていればと思います。', 'やや脚部が華奢な作りかな': '寝室用。まったく問題はないが、やや脚部が華奢な作りかな', 'デレビ大サイズで良かったですね': 'デレビ大サイズで良かったですね   また買いたいですね'}, '画質の良さ': {'画質も問題ないと思います。': '購入から発送までが速く、とても助かりました。画質も問題ないと思います。とても満足です。', 'テレビの方も綺麗に映る': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '映像は非常にきれいで満足': '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い', '画面も綺麗です': 'ﾚﾋﾞｭｰ遅くなりすいません。購入からかなりたちますが、やっとテレビを付け替えました。取り付けがとっても簡単で、すぐに観ることができました。画面も綺麗ですし、動作も気になることもありません。値段も安く大満足です。', '画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', '画質最低すぎました。画質の色最悪。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', 'テレビの方も綺麗に映るので満足しています。': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '画像は綺麗でとても満足しています。': '本日届き早速接続、簡単でした。 画像は綺麗でとても満足しています。 会社の対応も良く、発注後すぐに届き、この値段でこの商品はかなり良いと思います。 また、つぎの機会には是非利用させてもらいます。', '画面もとても綺麗で大満足です。': '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。 起動までに少し時間がかかりますが、気にならない程度です。', 'この値段でこのクオリティーなら最高です！': 'この値段でこのクオリティーなら最高です！'}, 'コンサートを観るのに向いているか': {'安さだけで選ぶと損しますよ': '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ', 'テレビの方も綺麗に映る': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '内は&#127908;モニター用なので': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '映像は非常にきれいで満足': '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い', '画面も綺麗です': 'ﾚﾋﾞｭｰ遅くなりすいません。購入からかなりたちますが、やっとテレビを付け替えました。取り付けがとっても簡単で、すぐに観ることができました。画面も綺麗ですし、動作も気になることもありません。値段も安く大満足です。', '画質も問題ないと思います。': '購入から発送までが速く、とても助かりました。画質も問題ないと思います。とても満足です。', 'テレビの方も綺麗に映るので満足しています。': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '色はきれいだが、正面以外からみると青っぽく見える。': '電源を入れて映し出されるまで、時間がかかる。 色はきれいだが、正面以外からみると青っぽく見える。 安いからなのか？', '画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。'}, 'スポーツ観戦に向いているか': {'対応も早く普通に観るなら全然いいと思います！': '対応も早く普通に観るなら全然いいと思います！', 'テレビの方も綺麗に映る': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '安さだけで選ぶと損しますよ': '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ', '内は&#127908;モニター用なので': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', 'テレビの方も綺麗に映るので満足しています。': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', 'テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い': '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い', '画質も問題ないと思います。': '購入から発送までが速く、とても助かりました。画質も問題ないと思います。とても満足です。'}, '受信精度の良さ': {'地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い': '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い', 'テレビの方も綺麗に映るので満足しています。': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '安さだけで選ぶと損しますよ': '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ'}, '映画鑑賞に向いているか': {'テレビの方も綺麗に映る': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '画質も問題ないと思います。': '購入から発送までが速く、とても助かりました。画質も問題ないと思います。とても満足です。', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '安さだけで選ぶと損しますよ': '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ', '内は&#127908;モニター用なので': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', 'テレビの方も綺麗に映るので満足しています。': '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '映像は非常にきれいで満足': '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い', '画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', '画面も綺麗です': 'ﾚﾋﾞｭｰ遅くなりすいません。購入からかなりたちますが、やっとテレビを付け替えました。取り付けがとっても簡単で、すぐに観ることができました。画面も綺麗ですし、動作も気になることもありません。値段も安く大満足です。', '画質最低すぎました。画質の色最悪。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。'}, 'どれぐらい場所を取るか': {'部屋のサイズにもあって気に入りました?': '部屋のサイズにもあって気に入りました?(^o^)／機会があったらまたたのみたいです。', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。': '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性', '画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。': 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', 'やや脚部が華奢な作りかな': '寝室用。まったく問題はないが、やや脚部が華奢な作りかな', 'デレビ大サイズで良かったですね': 'デレビ大サイズで良かったですね   また買いたいですね', '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。': '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。 起動までに少し時間がかかりますが、気にならない程度です。', '大画面': '値段も安く、大画面でゲーム出来て大満足です', '32型': '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。 起動までに少し時間がかかりますが、気にならない程度です。'}};
           const allReviews = ['寝室用。まったく問題はないが、やや脚部が華奢な作りかな', '思ってたより早く届きました。ありがとうございました。 テレビも満足です。安くて良いものが買えました。', '迅速な対応ありがとうございます。 電話でも確認があり、とても親切でした。', 'この価格にして品質のクオリティの高さには正直言って驚きました。 もともと子供達のゲーム用のモニターとして購入しましたが、テレビとしても大変満足できます。ここ数年の間で液晶テレビの技術も激変しましたね。あとはどの位長く使えるか楽しみ。', '迅速な対応で到着が早かったです。 テレビの方も綺麗に映るので満足しています。', '下宿中の子どもへ送りました。 ハードの外付けもできるし見るだけなので おそらく充分です。 ダブルチューナーだと尚、嬉しいですね', 'とても安く映りも良く気に入っています。動作が遅いのが少し気になるところですが、お値段以上だと思います。', '年末でお忙しい中で問い合わせと発送に迅速に対応していただけました。 購入したテレビも価格に対して十分な性能を有してると思います。 ありがとうございました。', 'コスパ高い。 良い商品だと思います。 ちょっと遅いのが玉にキズ。', '購入から発送までが速く、とても助かりました。画質も問題ないと思います。とても満足です。', '対応も早く普通に観るなら全然いいと思います！', '録画は単発でしかできません、毎週録画とかは、無理 裏録画もできないので、録画中はその番組だけです 安さだけで選ぶと損しますよ', '映りはバッチリです。 値段から考えて，良い買い物をいたしました。 あえて言えば、足（台）の部分がもう少し、 しっかりしていればと思います。', 'ﾚﾋﾞｭｰ遅くなりすいません。購入からかなりたちますが、やっとテレビを付け替えました。取り付けがとっても簡単で、すぐに観ることができました。画面も綺麗ですし、動作も気になることもありません。値段も安く大満足です。', '購入から１年たたずに故障 安いからと安易に注文して凄く不便な思いをしました 本当に最悪です', '32型でこの金額だったのでとびつきましたが、画面もとても綺麗で大満足です。 起動までに少し時間がかかりますが、気にならない程度です。', 'いい感じです。今日から使ってみようと思います。', 'デレビ大サイズで良かったですね   また買いたいですね', 'メーカーに問い合わせ商品を送り修理してもらいしましたがまったく治らず再度連絡しましたが工場に相談してみますであと全然応答なしです。', 'コストパフォーマンスを考えると 十分すぎると思います。', '安いので心配しましたが今のとこ問題ないです', '値段も安く、大画面でゲーム出来て大満足です', 'とても対応が良かったです。また、機会があったら利用したいと思います。', '安いと思ったから買いましたが、 とてもいい感じです。', '子供がテレビを壊した為こちらで購入。まずまず満足です。', '本日届き早速接続、簡単でした。 画像は綺麗でとても満足しています。 会社の対応も良く、発注後すぐに届き、この値段でこの商品はかなり良いと思います。 また、つぎの機会には是非利用させてもらいます。', 'なんせ画質最低すぎました。画質の色最悪。テレビつけて数十分は白い縦線いっぱい入る時が時々あります。メーカーは考えて買うべきですね。勉強になりました。', '電源を入れて映し出されるまで、時間がかかる。 色はきれいだが、正面以外からみると青っぽく見える。 安いからなのか？', '部屋のサイズにもあって気に入りました?(^o^)／機会があったらまたたのみたいです。', 'テレビとしてモニターとしても活躍してます！ またコスパもよく機能も充実してよしでした。 また購入予定です。', '地デジ・ＢＳを買うつもりでいたが本品はＢＳがついていなかった、自身の認識でＢＳは当たり前、他社同等品と思い勘違いしてしまい大失敗、ただＢＳ放送を見る機会が少ないのでまあいいか、映像は非常にきれいで満足、リモコンの反応が若干遅い', 'この値段でこのクオリティーなら最高です！', '内は&#127908;モニター用なので地デジだけで間に合うのでこれを選びました。画面もきれいでモニターとして十分です。聖徳寺70代男性'];
           // 属性リスト: キーワード => [関連属性]
           const tvQuerySim = {
               "運びやすさ": ["画面サイズ", "幅x高さx奥行", "重量"],
               "ゲームで遅延しないか": ["パネル種類"],
               "映画鑑賞に向いているか": [
                   "画面サイズ", "画素数", "パネル種類", "HDR方式", "映像処理エンジン", 
                   "バックライト", "量子ドット", "BS 8K", "BS 4K/110度CS 4K", "録画機能", 
                   "ドライブ内蔵", "回転式スタンド", "HDMI端子", "リモコン(音声操作)", "スピーカー数"
               ],
               "音質の良さ": ["スピーカー数"],
               "スポーツ観戦に向いているか": [
                   "画面サイズ", "画素数", "パネル種類", "HDR方式", "映像処理エンジン", 
                   "バックライト", "量子ドット", "BS 8K", "BS 4K/110度CS 4K", "自動録画機能", 
                   "早見再生", "回転式スタンド", "スピーカー数"
               ],
               "回転式スタンドの滑らかさ": ["回転式スタンド", "重量"],
               "リモコンの反応速度": ["リモコン(音声操作)"],
               "画質の良さ": ["画面サイズ", "画素数", "パネル種類", "HDR方式", "映像処理エンジン", 
                               "バックライト", "量子ドット", "BS 8K", "BS 4K/110度CS 4K", "HDMI端子"],
               "脚の安定性": ["重量"],
               "サイドからの見やすさ": ["パネル種類", "回転式スタンド"],
               "沢山録画できるか": ["録画機能", "ドライブ内蔵"],
               "2番組同時録画中でも、操作に影響はないか": ["録画機能"],
               "録画番組の再生のスムーズさ": ["映像処理エンジン", "録画機能", "ドライブ内蔵", "早見再生", "リモコン(音声操作)"],
               "どれぐらい場所を取るか": ["画面サイズ", "幅x高さx奥行"],
               "音声認識の精度": ["リモコン(音声操作)"],
               "長時間の視聴でも目が疲れにくいか": ["画面サイズ", "画素数", "パネル種類", "映像処理エンジン", "バックライト"],
               "音量調整のしやすさ": ["スマートスピーカー連携", "リモコン(音声操作)"],
               "外付けHDDとの接続はスムーズか": ["録画機能"],
               "倍速機能が無いことのデメリット": ["倍速機能", "早見再生"],
               "HDMI端子の使いやすさ": ["HDMI端子"],
               "録画設定はしやすいか": ["録画機能", "ドライブ内蔵", "自動録画機能", "スマートスピーカー連携", "リモコン(音声操作)"],
               "映像の滑らかさ": ["映像処理エンジン", "倍速機能"],
               "パソコンのモニターに向いているか": [
                   "画面サイズ", "画素数", "パネル種類", "バックライト", "倍速機能", 
                   "BS 8K", "BS 4K/110度CS 4K", "回転式スタンド", "HDMI端子", 
                   "幅x高さx奥行", "重量"
               ],
               "受信精度の良さ": ["BS 8K", "BS 4K/110度CS 4K"],
               "コンサートを観るのに向いているか": [
                   "画面サイズ", "画素数", "パネル種類", "HDR方式", "映像処理エンジン", 
                   "バックライト", "量子ドット", "BS 8K", "BS 4K/110度CS 4K", 
                   "録画機能", "回転式スタンド", "HDMI端子", "スピーカー数"
               ]
           };

           // 40FB10Pのフルスペック
           const currentSpecs = {'画面サイズ': '31.5 V型(インチ)', '画素数': '1366x768', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': '直下型LEDバックライト', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': '外付けHDD', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '2端子', 'リモコン(音声操作)': 'None', 'スピーカー数': '2個', '幅x高さx奥行': '731x475x196 mm', '重量': '4.7 kg'};



           // ====================================================================
           // 2. DOM要素の取得 (グローバル変数の定義を削除)
           // ====================================================================

           const subkeywordDisplay = document.getElementById('subkeyword-display');
           const reviewContentDisplay = document.getElementById('review-content');
           const searchForm = document.getElementById('review-search-form'); 
           const searchInput = document.getElementById('review-query-input'); 
           const specListContainer = document.querySelector('.spec-list'); 
           const productSpecsSection = document.querySelector('.product-specs');
           const keywordButtonsContainer = document.getElementById('keyword-buttons-container');

           // 🚨 ポップアップ関連の要素取得は、関数の内部に移動します。
           // const modal = document.getElementById("specModal"); などは削除します。


           // ====================================================================
           // 3. 関数定義
           // ====================================================================

           /**
            * スペック表示を更新する関数（現在の製品または初期状態に戻す）
            */
           function updateSpecDisplay(specs, title = "HB-3211HD 商品スペック") {
               // 🚨 関数内部で要素を再取得
               const productSpecsSection = document.querySelector('.product-specs');
               const specListContainer = document.querySelector('.spec-list');

               if (!productSpecsSection || !specListContainer) return;

               productSpecsSection.querySelector('h2').textContent = title;
               specListContainer.innerHTML = '';

               for (const key in currentSpecs) {
                   const li = document.createElement('li');
                   const value = specs[key] !== undefined ? specs[key] : "—";
                   li.innerHTML = `<strong>${key}</strong>: ${value}`;
                   specListContainer.appendChild(li);
               }
           }


           /**
            * 競合製品のスペックをフィルタリングして吹き出しに表示する関数
            * (表示命令と位置設定を確実にするため、再修正)
            */
           function showFilteredSpecsInModal(productName, topic, clickedButton) {
               // 🚨 関数内部で要素を再取得
               const modal = document.getElementById("specModal");
               const modalTitle = document.getElementById("modalTitle");
               const modalSpecList = document.getElementById("modalSpecList");

               // 必須要素の存在チェックを強化
               if (!modal || !modalTitle || !modalSpecList) {
                   console.error("FATAL ERROR: モーダル関連の必須DOM要素が関数内部で見つかりません。");
                   return; 
               }

               // データ挿入
               const specs = competitorProducts[productName];
               const attributes = tvQuerySim[topic]; 

               modalTitle.textContent = `${productName}の類似属性スペック`;
               modalSpecList.innerHTML = '';

               attributes.forEach(attr => {
                   const value = specs[attr] !== undefined ? specs[attr] : "—";
                   const li = document.createElement('li');
                   li.innerHTML = `<strong>${attr}</strong>: ${value}`;
                   modalSpecList.appendChild(li);
               });

           // **吹き出しの位置計算と表示**
               if (modal && clickedButton) {
                   const modalContent = modal.querySelector('.modal-content');

                   // 画面内に収めるために表示してサイズを測定 -> 見た目を一時的に隠す
                   modal.style.display = 'block';
                   modalContent.style.position = 'fixed';
                   modalContent.style.visibility = 'hidden';

                   const buttonRect = clickedButton.getBoundingClientRect();
                   const modalRect = modalContent.getBoundingClientRect();

                   // 吹き出しをボタンの上に表示するデフォルト位置
                   let top = buttonRect.top - modalRect.height - 10;
                   // 上に入らない場合はボタンの下に表示
                   if (top < 10) top = buttonRect.bottom + 10;

                   // ボタン中央に合わせて左位置を計算
                   let left = buttonRect.left + (buttonRect.width / 2) - (modalRect.width / 2);

                   // 画面端からはみ出さないようにクランプ（余白10px）
                   const margin = 10;
                   if (left < margin) left = margin;
                   if (left + modalRect.width > window.innerWidth - margin) {
                       left = Math.max(margin, window.innerWidth - modalRect.width - margin);
                   }

                   // 最終的に位置を適用して可視化
                   modalContent.style.top = `${Math.round(top)}px`;
                   modalContent.style.left = `${Math.round(left)}px`;
                   modalContent.style.visibility = 'visible';
               }
           }

           /**
            * サブキーワードがクリックされたときの処理
            */
           function handleSubKeywordClick(event) {
               const topic = event.target.dataset.topic; 
               const subKeyword = event.target.dataset.subKeyword; 
               const content = reviewData[topic][subKeyword];

               document.querySelectorAll('.sub-topic-keyword').forEach(btn => {
                   btn.classList.remove('highlighted');
               });

               event.target.classList.add('highlighted');


               reviewContentDisplay.innerHTML = `
                   <h4>「${subKeyword}」の元レビュー</h4>
                   <p>"${content}"</p>
               `;

               // 4. 生成されたボタンにイベントリスナーを直接登録（確実な方法）
               document.querySelectorAll('#competitor-buttons-container .competitor-link').forEach(link => {
                   link.addEventListener('click', (e) => {
                       const productName = e.target.dataset.product;
                       const topic = e.target.dataset.topic;
                       showFilteredSpecsInModal(productName, topic, e.target); 
                   });
               });

               // 5. スペック表示を現在の製品に戻す
               updateSpecDisplay(currentSpecs); 
           }

           /**
            * 検索フォームが送信されたときの処理
            */
           function handleSearchSubmit(event) {
               event.preventDefault(); 

               const query = searchInput.value.trim(); 
               const availableTopics = Object.keys(reviewData); 

               const foundTopic = availableTopics.find(topic => topic === query); 

               if (foundTopic) {
                   showSubKeywords(foundTopic);
               } else {
                   subkeywordDisplay.innerHTML = '';
                   reviewContentDisplay.innerHTML = `
                       <p style="color: red;">"${query}" に一致する特別なキーワードは見つかりませんでした。</p>
                       <p>検索窓にご希望のキーワード（例: 画質の良さ、運びやすさなど）を入力し、検索してください。</p>
                   `;
               }
               searchInput.value = '';
           }

           /**
            * サブキーワード一覧と属性見出しを表示する関数
            */
           function showSubKeywords(topic) {
               subkeywordDisplay.innerHTML = '';
               reviewContentDisplay.innerHTML = ''; 

               const subKeywords = reviewData[topic];
               const similarAttributes = tvQuerySim[topic]; 

               const attributesText = similarAttributes ? similarAttributes.join('、') : '（該当属性なし）';

               const h4 = document.createElement('h4');
               h4.textContent = `「${topic}」というキーワードについて、この商品では以下のように述べられています。`;
               subkeywordDisplay.appendChild(h4);

               const ul = document.createElement('ul');
               subkeywordDisplay.appendChild(ul);


               for (const subKeyword in subKeywords) {
                   const li = document.createElement('li');

                   const button = document.createElement('button');
                   button.textContent = subKeyword;
                   button.type = 'button';
                   button.className = 'sub-topic-keyword'; 
                   button.dataset.topic = topic;
                   button.dataset.subKeyword = subKeyword; 

                   li.textContent = '・'; 
                   li.appendChild(button);
                   li.insertAdjacentText('beforeend', 'と言われています。'); 
                   ul.appendChild(li);
               }

               // 意見ボタンのイベントリスナーをまとめて追加
               document.querySelectorAll('.sub-topic-keyword').forEach(btn => {
                   btn.removeEventListener('click', handleSubKeywordClick); 
                   btn.addEventListener('click', handleSubKeywordClick);
               });

               updateSpecDisplay(currentSpecs); 
           }

           /**
            * キーワードクリック時の処理 (新しい検索イベントハンドラー)
            */
           function handleKeywordClick(event) {
                   const button = event.currentTarget || event.target;
                   // クリックされたボタンのデータ属性からキーワード（reviewDataのキー）を取得
                   const topic = button.dataset.keyword;

                   // 既に選択中のキーワードを再クリックしたら検索結果を非表示にして初期表示に戻す（トグル動作）
                   const isActive = button.classList.contains('highlighted');
                   if (isActive) {
                       document.querySelectorAll('.topic-keyword').forEach(btn => btn.classList.remove('highlighted'));
                       // サブキーワード表示を消してレビュー領域を初期表示に戻す
                       if (subkeywordDisplay) subkeywordDisplay.innerHTML = '';
                       showAllReviews();
                       // スペック表示も現在製品に戻す
                       updateSpecDisplay(currentSpecs);
                       return;
                   }

                   // reviewData のキーに対応するサブキーワードを表示
                   if (topic && reviewData[topic]) {
                       showSubKeywords(topic);

                       // ハイライトの切り替え
                       document.querySelectorAll('.topic-keyword').forEach(btn => btn.classList.remove('highlighted'));
                       button.classList.add('highlighted');
                   } else {
                       console.warn(`キーワード '${topic}' は reviewData に見つかりませんでした。`);
                   }
           }

               /**
                * 全レビュー一覧を表示する（初期表示およびトグル復帰用）
                */
               function showAllReviews() {
                   if (!reviewContentDisplay) return;
                   reviewContentDisplay.innerHTML = '';
                   const h4 = document.createElement('h4');
                   h4.textContent = '全レビュー一覧';
                   reviewContentDisplay.appendChild(h4);

                   const ul = document.createElement('ul');
                   allReviews.forEach(txt => {
                       const li = document.createElement('li');
                       li.textContent = txt;
                       ul.appendChild(li);
                   });
                   reviewContentDisplay.appendChild(ul);
               }

               /**
                * ハイライト用のスタイルを注入する（存在しなければ）
                */
               function ensureHighlightStyle() {
                   if (document.getElementById('highlight-style')) return;
                   const css = `
                       .topic-keyword.highlighted, .sub-topic-keyword.highlighted {
                           background: #1e3a8a !important; /* 濃い青（寒色系） */
                           color: #ffffff !important;
                           border: 2px solid #122858 !important; /* 濃いネイビー縁取り */
                           box-shadow: 0 6px 14px rgba(17,40,84,0.28) !important;
                           transform: translateY(-2px);
                       }
                       .topic-keyword {
                           transition: box-shadow 120ms ease, transform 120ms ease, background 120ms ease;
                       }
                   `;
                   const style = document.createElement('style');
                   style.id = 'highlight-style';
                   style.appendChild(document.createTextNode(css));
                   document.head.appendChild(style);
               }

           /**
            * キーワードボタンを生成し、DOMに挿入する関数
            */
           function generateKeywordButtons() {
               if (!keywordButtonsContainer) return;
               // reviewData のキーをキーワードとして使用
               const keys = Object.keys(reviewData);            const stopIndex = keys.indexOf('スポーツ観戦に向いているか');            const topics = stopIndex >= 0 ? keys.slice(0, stopIndex + 1) : keys;

               keywordButtonsContainer.innerHTML = '<p>キーワードを選択してください：</p>';

               topics.forEach(topic => {
                   const button = document.createElement('button');
                   button.textContent = topic;
                   button.className = 'topic-keyword';
                   button.dataset.keyword = topic;
                   button.type = 'button'; // フォーム送信を防ぐため

                   // クリックイベントリスナーを設定
                   button.addEventListener('click', handleKeywordClick);
                   keywordButtonsContainer.appendChild(button);
               });
               // ハイライト用のスタイルを注入
               ensureHighlightStyle();
           }

           // ====================================================================
           // 4. イベントリスナーと初期化
           // ====================================================================

           setTimeout(() => {
               // 依存要素のチェック
               if (!keywordButtonsContainer) {
                   console.error("FATAL ERROR: 必須のDOM要素が見つかりません。HTMLのID/クラスを確認してください。");
                   return;
               }
               // ★追加: キーワードボタンを生成
               generateKeywordButtons();
               // 検索フォームのイベントリスナー
               // if (searchForm) {
               //     searchForm.addEventListener('submit', handleSearchSubmit);
               // } else {
               //     console.error("検索フォーム要素が見つかりません。HTMLのIDを確認してください。");
               // }

               // ポップアップのクローズ処理
               const modal = document.getElementById("specModal");
               const closeModalBtn = document.querySelector(".close-btn");

               // 閉じるボタンのイベントリスナー
               if (closeModalBtn) {
                   closeModalBtn.addEventListener('click', function(e) {
                       // ログ1: クリックがクローズボタンで発生したことを確認
                       console.log("DEBUG-CLOSE: '×'ボタンがクリックされました。");

                       e.stopPropagation(); 

                       if (modal) {
                           // ログ2: 閉じる命令を実行したことを確認
                           console.log("DEBUG-CLOSE: 閉じる命令を実行します。");

                           modal.style.display = "none";
                           updateSpecDisplay(currentSpecs); 
                       }
                   });
               }

               // ウィンドウの外側をクリックしたときの処理
               window.onclick = function(event) {
                   if (event.target == modal) {
                       // console.log("DEBUG-CLOSE: 背景(modalラッパー)がクリックされました。");
                       modal.style.display = "none";
                       updateSpecDisplay(currentSpecs);
                   }
               }

           }, 100); // 100ミリ秒遅延

        // 初期レビュー表示: 全レビューを表示
        showAllReviews();
            // 初期にスペック表示も行う
        if (typeof updateSpecDisplay === 'function' && typeof currentSpecs !== 'undefined') {
            try { updateSpecDisplay(currentSpecs); } catch (e) { console.error('初期スペック表示エラー', e); }
        }
    