
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'リモコンの反応も良い': '休憩小屋で見るために 探してました ハッキリ映るし 安くて お値打ちです リモコンの反応も良い   何年持つかなぁ  3年も持てば いいけど マイナスは 少し来るのが遅かった', 'リモコンの電源ボタンがほとんど反応せず': '中古ですが、問題なく視聴できます。 ただし、リモコンの電源ボタンがほとんど反応せず、交換をお願いしましたが、まだ連絡がありません。', '使用については問題ありません。': '梱包が良かったです。 伝票が入っていなかったので、入っていればなお良かったと思いました。 使用については問題ありません。', 'これはたまたまかもしれませんがリモコンの電池も封入されていてとてもお得でした。': '必要な場所ちょっと見るだけならでこの価格でこの質なら大満足です。土台部分が不安定な記載がありましたが私のはぜんぜん問題ありませんでした。これはたまたまかもしれませんがリモコンの電池も封入されていてとてもお得でした。', 'リモコンも使えます。': '借家で短期滞在時に子供番組等の鑑賞目的で購入。画像もきれいで音も全く問題なし、リモコンも使えます。非常に良い買い物をしました！', 'リモコンも問題なく動作しています。': '小型テレビが壊れたところでこちらの商品を目にし、購入させていただきました。 とてもお安く、写りもリモコンも問題なく動作しています。', 'リモコンは一部反応がないボタンありでしたが': 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。', 'リモコンも綺麗でした。': 'とても良い商品でした。綺麗に清掃されていて、リモコンも綺麗でした。'}, '音質の良さ': {}, '運びやすさ': {'大きさも丁度よく': '注文から4日で到着しました、早めの対応ありがとうございます。 商品ですが、多少の傷等はありますが、全然問題ありません、動作確認もしましたが 問題なく見ることが出来ます。 今度の出張で3畳の部屋用に購入しました、大きさも丁度よく、大変満足の一品です。', 'ハッキリ映るし 安くて お値打ちです': '休憩小屋で見るために 探してました ハッキリ映るし 安くて お値打ちです リモコンの反応も良い   何年持つかなぁ  3年も持てば いいけど マイナスは 少し来るのが遅かった', '本体は全く問題ありません。画面もきれいです。': 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。', 'キレイに映ります': 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', '寝室に手頃で小さいテレビがほしかったので': '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', '今度の出張で3畳の部屋用に購入しました': '注文から4日で到着しました、早めの対応ありがとうございます。 商品ですが、多少の傷等はありますが、全然問題ありません、動作確認もしましたが 問題なく見ることが出来ます。 今度の出張で3畳の部屋用に購入しました、大きさも丁度よく、大変満足の一品です。', 'テレビを見るには十分ですね。': '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', '仕事場で見れる小さめのテレビを探していました。': '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。', '小型液晶テレビ': 'コストパフォーマンスが抜群に高い、良い商品でした。 中古とはいえ、小型液晶テレビがこんなに安く買えるなんて良い時代になったものです。', '狭い私の部屋にちょうどいいサイズでした。': '安い金額よりとても良いです。狭い私の部屋にちょうどいいサイズでした。一人暮らしの人にオススメです。'}, '脚の安定性': {}, '画質の良さ': {'画像もきれいで': '借家で短期滞在時に子供番組等の鑑賞目的で購入。画像もきれいで音も全く問題なし、リモコンも使えます。非常に良い買い物をしました！', '画面もきれいです。': 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。', 'キレイに映ります': 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', 'テレビも問題なく良かったです！': '商品の発送も早く、丁寧な対応でした！ テレビも問題なく良かったです！', '写りもリモコンも問題なく動作しています。': '小型テレビが壊れたところでこちらの商品を目にし、購入させていただきました。 とてもお安く、写りもリモコンも問題なく動作しています。', 'この値段で購入できて凄く嬉しいです。また利用したいと思いました。追記     画像すごく綺麗です。': '注文した翌日に着きました。梱包も丁寧で、品物は気にならない程度のキズはありますが綺麗です。アンテナのコードが付いてたので助かりますね！  この値段で購入できて凄く嬉しいです。また利用したいと思いました。 追記     画像すごく綺麗です。', '寝室に手頃で小さいテレビがほしかったので': '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', 'テレビを見るには十分ですね。': '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', '小型液晶テレビ': 'コストパフォーマンスが抜群に高い、良い商品でした。 中古とはいえ、小型液晶テレビがこんなに安く買えるなんて良い時代になったものです。', '仕事場で見れる小さめのテレビを探していました。': '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。'}, 'コンサートを観るのに向いているか': {'台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありません。': '子供部屋用に購入。購入前の案内に書いてありましたが、台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありませんでした。安いので仕方なし。', 'テレビを見るには十分ですね。': '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', 'キレイに映ります': 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', '仕事場で見れる小さめのテレビを探していました。': '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。', '画像もきれいで': '借家で短期滞在時に子供番組等の鑑賞目的で購入。画像もきれいで音も全く問題なし、リモコンも使えます。非常に良い買い物をしました！', '写りもリモコンも問題なく動作しています。': '小型テレビが壊れたところでこちらの商品を目にし、購入させていただきました。 とてもお安く、写りもリモコンも問題なく動作しています。', '画面もきれいです。': 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。', '寝室に手頃で小さいテレビがほしかったので': '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', 'この値段で購入できて凄く嬉しいです。また利用したいと思いました。追記     画像すごく綺麗です。': '注文した翌日に着きました。梱包も丁寧で、品物は気にならない程度のキズはありますが綺麗です。アンテナのコードが付いてたので助かりますね！  この値段で購入できて凄く嬉しいです。また利用したいと思いました。 追記     画像すごく綺麗です。', 'テレビも問題なく良かったです！': '商品の発送も早く、丁寧な対応でした！ テレビも問題なく良かったです！'}, 'スポーツ観戦に向いているか': {'テレビを見るには十分ですね。': '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', '台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありません。': '子供部屋用に購入。購入前の案内に書いてありましたが、台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありませんでした。安いので仕方なし。', '仕事場で見れる小さめのテレビを探していました。': '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。', 'キレイに映ります': 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', '寝室に手頃で小さいテレビがほしかったので': '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', '使用については問題ありません。': '梱包が良かったです。 伝票が入っていなかったので、入っていればなお良かったと思いました。 使用については問題ありません。', 'この値段で購入できて凄く嬉しいです。また利用したいと思いました。追記     画像すごく綺麗です。': '注文した翌日に着きました。梱包も丁寧で、品物は気にならない程度のキズはありますが綺麗です。アンテナのコードが付いてたので助かりますね！  この値段で購入できて凄く嬉しいです。また利用したいと思いました。 追記     画像すごく綺麗です。', '写りもリモコンも問題なく動作しています。': '小型テレビが壊れたところでこちらの商品を目にし、購入させていただきました。 とてもお安く、写りもリモコンも問題なく動作しています。', 'テレビも問題なく良かったです！': '商品の発送も早く、丁寧な対応でした！ テレビも問題なく良かったです！', '画像もきれいで': '借家で短期滞在時に子供番組等の鑑賞目的で購入。画像もきれいで音も全く問題なし、リモコンも使えます。非常に良い買い物をしました！'}, '受信精度の良さ': {'テレビも問題なく良かったです！': '商品の発送も早く、丁寧な対応でした！ テレビも問題なく良かったです！'}, '映画鑑賞に向いているか': {'テレビを見るには十分ですね。': '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', '台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありません。': '子供部屋用に購入。購入前の案内に書いてありましたが、台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありませんでした。安いので仕方なし。', '使用については問題ありません。': '梱包が良かったです。 伝票が入っていなかったので、入っていればなお良かったと思いました。 使用については問題ありません。', 'キレイに映ります': 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', 'リモコンの反応も良い': '休憩小屋で見るために 探してました ハッキリ映るし 安くて お値打ちです リモコンの反応も良い   何年持つかなぁ  3年も持てば いいけど マイナスは 少し来るのが遅かった', '仕事場で見れる小さめのテレビを探していました。': '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。', '寝室に手頃で小さいテレビがほしかったので': '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', '画像もきれいで': '借家で短期滞在時に子供番組等の鑑賞目的で購入。画像もきれいで音も全く問題なし、リモコンも使えます。非常に良い買い物をしました！', '写りもリモコンも問題なく動作しています。': '小型テレビが壊れたところでこちらの商品を目にし、購入させていただきました。 とてもお安く、写りもリモコンも問題なく動作しています。', '画面もきれいです。': 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。'}, 'どれぐらい場所を取るか': {'大きさも丁度よく': '注文から4日で到着しました、早めの対応ありがとうございます。 商品ですが、多少の傷等はありますが、全然問題ありません、動作確認もしましたが 問題なく見ることが出来ます。 今度の出張で3畳の部屋用に購入しました、大きさも丁度よく、大変満足の一品です。', '今度の出張で3畳の部屋用に購入しました': '注文から4日で到着しました、早めの対応ありがとうございます。 商品ですが、多少の傷等はありますが、全然問題ありません、動作確認もしましたが 問題なく見ることが出来ます。 今度の出張で3畳の部屋用に購入しました、大きさも丁度よく、大変満足の一品です。', 'テレビを見るには十分ですね。': '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', '仕事場で見れる小さめのテレビを探していました。': '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。', 'ハッキリ映るし 安くて お値打ちです': '休憩小屋で見るために 探してました ハッキリ映るし 安くて お値打ちです リモコンの反応も良い   何年持つかなぁ  3年も持てば いいけど マイナスは 少し来るのが遅かった', '狭い私の部屋にちょうどいいサイズでした。': '安い金額よりとても良いです。狭い私の部屋にちょうどいいサイズでした。一人暮らしの人にオススメです。', 'キレイに映ります': 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', '寝室に手頃で小さいテレビがほしかったので': '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', '本体は全く問題ありません。画面もきれいです。': 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。', '小型液晶テレビ': 'コストパフォーマンスが抜群に高い、良い商品でした。 中古とはいえ、小型液晶テレビがこんなに安く買えるなんて良い時代になったものです。'}};
           const allReviews = ['この値段でテレビが買えるとは思っていませんでした。 土台のネジが無いとの事でしたが、全然問題無いです。 とってもいいお買い物できて大満足です。', '休憩小屋で見るために 探してました ハッキリ映るし 安くて お値打ちです リモコンの反応も良い   何年持つかなぁ  3年も持てば いいけど マイナスは 少し来るのが遅かった', '梱包が良かったです。 伝票が入っていなかったので、入っていればなお良かったと思いました。 使用については問題ありません。', '子供部屋用に購入。購入前の案内に書いてありましたが、台座のねじどまりが悪く動かすとカタカタしていますが、見る分には問題ありませんでした。安いので仕方なし。', 'コストパフォーマンスが抜群に高い、良い商品でした。 中古とはいえ、小型液晶テレビがこんなに安く買えるなんて良い時代になったものです。', '小型テレビが壊れたところでこちらの商品を目にし、購入させていただきました。 とてもお安く、写りもリモコンも問題なく動作しています。', '配送もはやく、商品も全く問題ありません。 よい買い物でした', '安い金額よりとても良いです。狭い私の部屋にちょうどいいサイズでした。一人暮らしの人にオススメです。', '対応も迅速で商品も価格も大満足です。 とてもいい買い物をさせて頂きました。', '安かったので買いました。 傷や穴があると買いてありましたので、正直期待していませんでしたが、思ったより綺麗でしたしちゃんと映ったので満足しています。', 'とても良い商品でした。綺麗に清掃されていて、リモコンも綺麗でした。', '迅速な対応で、映りも良く、グラグラは、少しだけ。音も良し。何ら問題ないです。いやー、良い買い物をしました。ありがとうございました。', 'とても満足です。 ビデオやDVDを見るのに購入しました。 安いので、映るかとても心配でしたが、キレイに映ります。 凄く安い買い物をしました。', '手頃な値段でした。テレビが見れたら良い。', '借家で短期滞在時に子供番組等の鑑賞目的で購入。画像もきれいで音も全く問題なし、リモコンも使えます。非常に良い買い物をしました！', '注文した翌日に着きました。梱包も丁寧で、品物は気にならない程度のキズはありますが綺麗です。アンテナのコードが付いてたので助かりますね！  この値段で購入できて凄く嬉しいです。また利用したいと思いました。 追記     画像すごく綺麗です。', '中古の商品ですが、全然綺麗ですし、映りもバッチリですこのクオリティーでこの値段はおすすめです、また機会があれば、必ず購入します。', '注文から4日で到着しました、早めの対応ありがとうございます。 商品ですが、多少の傷等はありますが、全然問題ありません、動作確認もしましたが 問題なく見ることが出来ます。 今度の出張で3畳の部屋用に購入しました、大きさも丁度よく、大変満足の一品です。', '商品の発送も早く、丁寧な対応でした！ テレビも問題なく良かったです！', '台風の影響で、少し遅れました。 値段が安い割りにはキレイな商品で、早速使いましたが、テレビを見るには十分ですね。 娘の部屋で大活躍しております(^^)', 'リモコンの電源ボタンの効きがイマイチなの以外、このお値段ですので大変満足です。', 'ただTVを観るという目的なら、充分です！安く提供して頂けて、本当に助かりました。', '丁寧な梱包で安心です。毎日楽しく使用しています。', 'この値段で保証付きは嬉しいです。 満足してます。', 'リモコンは一部反応がないボタンありでしたが、本体は全く問題ありません。画面もきれいです。', '寝室に手頃で小さいテレビがほしかったので、今回購入しました。 迅速な対応の上、早々に商品が到着したので、昨日から活用しています。 良い買い物できたので大変満足です。', '洋室を和室に娘が里帰り手頃なテレビ探してました金額も最高ですね、映るかためしてませんが先に書き込みました！', '価格のわりに綺麗な商品が届き満足しております。', '中古ですが、問題なく視聴できます。 ただし、リモコンの電源ボタンがほとんど反応せず、交換をお願いしましたが、まだ連絡がありません。', '何も問題なく、すべて正常に動きました。 これで1年ぐらい動けば丸儲け（笑） 今思えば、親戚が入院した時、これを買ってあげとけば、 病院のテレビカードよりはるかに安かったなと感じております。 今回の使い道はキッチンで食事や調理、片付けの時に見る（聞く） なので、だれか入院したら貸してあげます(笑) マジで大満足です。', 'この値段でこの画面は上等 対応も丁寧でした', '仕事場で見れる小さめのテレビを探していました。 見た目も綺麗ですし、普通に快適にテレビが見れます。本当に安くてコスパ最高です。', '必要な場所ちょっと見るだけならでこの価格でこの質なら大満足です。土台部分が不安定な記載がありましたが私のはぜんぜん問題ありませんでした。これはたまたまかもしれませんがリモコンの電池も封入されていてとてもお得でした。'];
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
           const currentSpecs = {'画面サイズ': '16 V型(インチ)', '画素数': '1366x768', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': 'None', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': 'None', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': 'None', 'リモコン(音声操作)': 'None', 'スピーカー数': 'None', '幅x高さx奥行': '402x305x174 mm', '重量': '2.5 kg'};



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
           function updateSpecDisplay(specs, title = "DS16-11B 商品スペック") {
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
    