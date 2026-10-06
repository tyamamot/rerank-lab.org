
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'リモコンの設定も最初からしてありました': '商品が到着しました、リモコンの設定も最初からしてありましたのでテレビを電源とアンテナをつないで簡単な設定のみで見れました。よかったです', 'マルチリモコンがつけられていた': '価格の割には良い商品でした。 ただ残念なのは、マルチリモコンがつけられていたがその設定表にメーカーが記載されておらず、問い合わせしたら即回答をいただけたのはよかったが、最初から書いておけ！っといったところ', 'リモコンが外部チューナのコントロールができなかった': '廉価でテレビの機能は何の問題もありませんでしたが、リモコンが外部チューナのコントロールができなかったのは事前情報不足でした。', 'リモコン非常にキレイでした。': '本体、画像の映り、リモコン非常にキレイでした。スタッフ様も丁寧な方でした。ありがとうございました。また 買います！'}, '音質の良さ': {}, '運びやすさ': {'サイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', 'じゅうぶんです！': '寝室用に。じゅうぶんです！ きれいに映ります。', '本品とは別の台がついているらしいが気にならないほどです。': '３台買いました。全部良く映りました。中古で安いので、少々のキズは我慢しようと思いましたが、ほとんどキズもなく、本品とは別の台がついているらしいが気にならないほどです。しかしTVとして使う場合は大丈夫ですか、一部端子が隠れます。また画面を正面から観るにはよいが少し下から見上げると暗く見えるのが難点かと思います。', '大きさもいい感じです。': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', 'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。', '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。': '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', '今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', 'じゅうぶんです！ きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。', 'エラー発生': 'スタンドが心配でしたが問題なく設置できました。 とてもきれいな商品で良かったです。'}, '脚の安定性': {'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。'}, '画質の良さ': {'映像の写りも悪くありません。': '中古って言ってもかなり綺麗だったのでビックリしてます。 映像の写りも悪くありません。 買って良かったです。', 'きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。', '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。': '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', '大きさもいい感じです。': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', "BS 4K/110度CS 4Kに関連する記述がないため、'なし'": '商品が到着しました、リモコンの設定も最初からしてありましたのでテレビを電源とアンテナをつないで簡単な設定のみで見れました。よかったです', '上からみたら画面が白くなって見えない': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', 'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。', '液晶': '説明の様に外装に傷がありますがきれいです。画像は液晶が古いためかあまりくっきりはしていませんが、ゲームに使う分には全然問題ありません。助かりました。', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', 'マルチリモコンがつけられていた': '価格の割には良い商品でした。 ただ残念なのは、マルチリモコンがつけられていたがその設定表にメーカーが記載されておらず、問い合わせしたら即回答をいただけたのはよかったが、最初から書いておけ！っといったところ'}, 'コンサートを観るのに向いているか': {'普通にテレビやDVDを見る分には十分やし、所詮は安物やから。': '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', '映像の写りも悪くありません。': '中古って言ってもかなり綺麗だったのでビックリしてます。 映像の写りも悪くありません。 買って良かったです。', 'きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', '上からみたら画面が白くなって見えない': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', '今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', 'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。', 'スタンドが心配でしたが問題なく設置できました。': 'スタンドが心配でしたが問題なく設置できました。 とてもきれいな商品で良かったです。', 'AmazonfireTVのみで使用 HDMIで使用可能': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '大きさもいい感じです。': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;'}, 'スポーツ観戦に向いているか': {'普通にテレビやDVDを見る分には十分やし、所詮は安物やから。': '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', '長時間の視聴ならアクオスをオススメ': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '映像の写りも悪くありません。': '中古って言ってもかなり綺麗だったのでビックリしてます。 映像の写りも悪くありません。 買って良かったです。', 'きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', '上からみたら画面が白くなって見えない': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', '今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', 'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。', 'スタンドが心配でしたが問題なく設置できました。': 'スタンドが心配でしたが問題なく設置できました。 とてもきれいな商品で良かったです。', "BS 4K/110度CS 4Kに関連する記述がないため、'なし'": '商品が到着しました、リモコンの設定も最初からしてありましたのでテレビを電源とアンテナをつないで簡単な設定のみで見れました。よかったです'}, '受信精度の良さ': {'きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', "BS 4K/110度CS 4Kに関連する記述がないため、'なし'": '商品が到着しました、リモコンの設定も最初からしてありましたのでテレビを電源とアンテナをつないで簡単な設定のみで見れました。よかったです'}, '映画鑑賞に向いているか': {'普通にテレビやDVDを見る分には十分やし、所詮は安物やから。': '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', '映像の写りも悪くありません。': '中古って言ってもかなり綺麗だったのでビックリしてます。 映像の写りも悪くありません。 買って良かったです。', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', 'きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。', 'AmazonfireTVのみで使用 HDMIで使用可能': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', "BS 4K/110度CS 4Kに関連する記述がないため、'なし'": '商品が到着しました、リモコンの設定も最初からしてありましたのでテレビを電源とアンテナをつないで簡単な設定のみで見れました。よかったです', '今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '上からみたら画面が白くなって見えない': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', 'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。', 'スタンドが心配でしたが問題なく設置できました。': 'スタンドが心配でしたが問題なく設置できました。 とてもきれいな商品で良かったです。'}, 'どれぐらい場所を取るか': {'普通にテレビやDVDを見る分には十分やし、所詮は安物やから。': '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', 'サイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '本品とは別の台がついているらしいが気にならないほどです。': '３台買いました。全部良く映りました。中古で安いので、少々のキズは我慢しようと思いましたが、ほとんどキズもなく、本品とは別の台がついているらしいが気にならないほどです。しかしTVとして使う場合は大丈夫ですか、一部端子が隠れます。また画面を正面から観るにはよいが少し下から見上げると暗く見えるのが難点かと思います。', '今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった': 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '大きさもいい感じです。': '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', '自分の計算ミスで小さいかった': '自分専用のＴＶが欲しくて買った。自分の計算ミスで小さいかったが他はすべて満足。', '狭い部屋での使用ならオススメです。': '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', 'じゅうぶんです！': '寝室用に。じゅうぶんです！ きれいに映ります。', 'このサイズが欲しかったのであって良かった。': 'このサイズが欲しかったのであって良かった。', 'じゅうぶんです！ きれいに映ります。': '寝室用に。じゅうぶんです！ きれいに映ります。'}};
           const allReviews = ['監視カメラ用に買いました。今使っているヤツが調子が悪くなりました。暑さでおかしくなり代わり買いました。大変満足しております。また機会あればよろしくお願いいたします。', '思ったとおりの商品でした。中古の商品なのでどのくらい使えるか不明ですが、程度と価格には満足しております。', '自分専用のＴＶが欲しくて買った。自分の計算ミスで小さいかったが他はすべて満足。', 'この安さの割には、完璧です。非常用として、大満足です。', 'このサイズが欲しかったのであって良かった。', 'テレビが壊れたので買いました。、安い割にはみやすくて、今でも愛用しています。', '廉価でテレビの機能は何の問題もありませんでしたが、リモコンが外部チューナのコントロールができなかったのは事前情報不足でした。', 'スタンドが心配でしたが問題なく設置できました。 とてもきれいな商品で良かったです。', '机の上に置いて見てるので、大きさもいい感じです。 ただ、上からみたら画面が白くなって見えません^^;', '寝室用に。じゅうぶんです！ きれいに映ります。', '中古って言ってもかなり綺麗だったのでビックリしてます。 映像の写りも悪くありません。 買って良かったです。', '本体、画像の映り、リモコン非常にキレイでした。スタッフ様も丁寧な方でした。ありがとうございました。また 買います！', '使用感はありますが、性能はお値段以上だと感じました。', '押入れほどの広さの書斎で、テレビを見たりPS3をやるために購入しました。中古のテレビを買うのは初めてで、しかもネットで。ということで不安はあったもの、届いてみるとだいぶ綺麗で安心しました。 梱包については他の方も書いてるように、これで大丈夫なのか？って感じの梱包ですが初期不良とかなかったんで、まぁ。。 狭い部屋での使用ならオススメです。', '商品が到着しました、リモコンの設定も最初からしてありましたのでテレビを電源とアンテナをつないで簡単な設定のみで見れました。よかったです', '価格の割には良い商品でした。 ただ残念なのは、マルチリモコンがつけられていたがその設定表にメーカーが記載されておらず、問い合わせしたら即回答をいただけたのはよかったが、最初から書いておけ！っといったところ', 'AmazonfireTVのみで使用 HDMIで使用可能 こちらでシャープアクオス16インチも購入しています 並べて映像を見ると、矢張りアクオスの色は良い 買うならアクオス しかし、今回は小スペースにサブとして購入をしたかったのでサイズ的には良かった 確かに視野角は狭い サブとしてならオススメ 長時間の視聴ならアクオスをオススメ 音響はアクオスがおすすめ 感動するほど綺麗な商品ではないので中古を覚悟して購入するほうが良い サブなら値段は良い コスパ最高とまではいかないが', '中古品ですが とても良い品でした。 対応もすごくよく、すぐに届きました。 ありがとうございました。', '説明の様に外装に傷がありますがきれいです。画像は液晶が古いためかあまりくっきりはしていませんが、ゲームに使う分には全然問題ありません。助かりました。', '普通にテレビやDVDを見る分には十分やし、所詮は安物やから。', '中古品なので、液晶の劣化等もある程度予想していました。特に良いということもなく「可」というところです。', '色々調べた中では、最安値で且つ機能的には完璧でした。もう二つ三つ欲しいです。', '３台買いました。全部良く映りました。中古で安いので、少々のキズは我慢しようと思いましたが、ほとんどキズもなく、本品とは別の台がついているらしいが気にならないほどです。しかしTVとして使う場合は大丈夫ですか、一部端子が隠れます。また画面を正面から観るにはよいが少し下から見上げると暗く見えるのが難点かと思います。', '予想以上に良品だと思っています。価格の割には必要な条件を満たしています。満足です。', '綺麗なテレビでした。 ゲーム用に購入しましたが、十分です。', '商品がとても良いので良かったです。何かあったらまた利用したい。'];
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
           const currentSpecs = {'画面サイズ': '16 V型(インチ)', '画素数': '1366x768', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': 'None', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': 'None', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '2端子', 'リモコン(音声操作)': 'None', 'スピーカー数': 'None', '幅x高さx奥行': '383x305x140 mm', '重量': '3 kg'};



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
           function updateSpecDisplay(specs, title = "PRD-LB116B 商品スペック") {
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
    