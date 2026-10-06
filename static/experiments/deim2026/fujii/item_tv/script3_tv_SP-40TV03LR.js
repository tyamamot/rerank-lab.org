
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。': 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。', '録画中は裏番組見れないし、': 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。', 'スイッチつけるときにぶちって音がする': 'テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする', 'リモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', '少しリモコンの反応が遅いです': '皆さんのクチコミにあったように、少しリモコンの反応が遅いですが、安かったので特に気になりません。 良い買い物ができました。', '一年たたないでリモコン壊れかけてきてます。': 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。'}, '音質の良さ': {'マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', '後はスイッチつけるときにぶちって音がする': 'テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする'}, '運びやすさ': {'お値段も安く購入できて満足です！': 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', '40型はやっぱり見やすい！': '安く購入出来ました40型はやっぱり見やすい！', 'このサイズでこの価格、品質なら 大変お得だと思います。': 'このサイズでこの価格、品質なら 大変お得だと思います。', 'テレビは値段はお手頃なのに大きさ、画質大満足です。': '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', '40型': '４０型でこの値段には驚きです。昨日も沢山ありますが会社でモニター用として購入しましたが家庭でも十分な品質だと思います。'}, '脚の安定性': {}, '画質の良さ': {'TVという部分では画質は値段からすれば充分とは思います。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', 'テレビは値段はお手頃なのに大きさ、画質大満足です。': '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', 'HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！': 'プチ会議室に設置して仕事用に使用しておりますが、HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！', 'このサイズでこの価格、品質なら 大変お得だと思います。': 'このサイズでこの価格、品質なら 大変お得だと思います。', '40型はやっぱり見やすい！': '安く購入出来ました40型はやっぱり見やすい！', '粒子も粗い': 'シンプルで、価額も安く良い&#10071;&#65039;しかし、チャンネル切り替えが、気絶するくらい(笑)長い&#10071;&#65039;番組表の文字が、読みにくい&#10071;&#65039;この価額だから、諦めるし う～ん、粒子も粗いし、私は繋ぎのテレビだから、セカンドテレビなら良いかもです&#10071;&#65039;後一万円出して他を、おすすめです。', 'チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです': '画面はきれいです 音質は低音高音が不足です チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです', 'お値段も安く購入できて満足です！': 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', 'スイッチつけるときにぶちって音がする': 'テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする', '40型': '４０型でこの値段には驚きです。昨日も沢山ありますが会社でモニター用として購入しましたが家庭でも十分な品質だと思います。'}, 'コンサートを観るのに向いているか': {'録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。': 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。', 'TVという部分では画質は値段からすれば充分とは思います。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', 'マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', 'HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！': 'プチ会議室に設置して仕事用に使用しておりますが、HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！', '40型はやっぱり見やすい！': '安く購入出来ました40型はやっぱり見やすい！', 'チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです': '画面はきれいです 音質は低音高音が不足です チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです', 'スイッチつけるときにぶちって音がする': 'テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする', 'お値段も安く購入できて満足です！': 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', 'テレビは値段はお手頃なのに大きさ、画質大満足です。': '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', '粒子も粗い': 'シンプルで、価額も安く良い&#10071;&#65039;しかし、チャンネル切り替えが、気絶するくらい(笑)長い&#10071;&#65039;番組表の文字が、読みにくい&#10071;&#65039;この価額だから、諦めるし う～ん、粒子も粗いし、私は繋ぎのテレビだから、セカンドテレビなら良いかもです&#10071;&#65039;後一万円出して他を、おすすめです。'}, 'スポーツ観戦に向いているか': {'TVという部分では画質は値段からすれば充分とは思います。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', '録画中は裏番組見れないし、': 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。', 'テレビは値段はお手頃なのに大きさ、画質大満足です。': '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', '40型はやっぱり見やすい！': '安く購入出来ました40型はやっぱり見やすい！', 'チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです': '画面はきれいです 音質は低音高音が不足です チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです', 'お値段も安く購入できて満足です！': 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', 'マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', 'スイッチつけるときにぶちって音がする': 'テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする', '後はスイッチつけるときにぶちって音がする': 'テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする', 'このサイズでこの価格、品質なら 大変お得だと思います。': 'このサイズでこの価格、品質なら 大変お得だと思います。'}, '受信精度の良さ': {}, '映画鑑賞に向いているか': {'録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。': 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。', 'TVという部分では画質は値段からすれば充分とは思います。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', 'HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！': 'プチ会議室に設置して仕事用に使用しておりますが、HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！', '40型はやっぱり見やすい！': '安く購入出来ました40型はやっぱり見やすい！', 'テレビは値段はお手頃なのに大きさ、画質大満足です。': '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', 'マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', 'チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです': '画面はきれいです 音質は低音高音が不足です チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです', 'お値段も安く購入できて満足です！': 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', 'リモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが': 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', '粒子も粗い': 'シンプルで、価額も安く良い&#10071;&#65039;しかし、チャンネル切り替えが、気絶するくらい(笑)長い&#10071;&#65039;番組表の文字が、読みにくい&#10071;&#65039;この価額だから、諦めるし う～ん、粒子も粗いし、私は繋ぎのテレビだから、セカンドテレビなら良いかもです&#10071;&#65039;後一万円出して他を、おすすめです。'}, 'どれぐらい場所を取るか': {'テレビは値段はお手頃なのに大きさ、画質大満足です。': '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', 'お値段も安く購入できて満足です！': 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', 'このサイズでこの価格、品質なら 大変お得だと思います。': 'このサイズでこの価格、品質なら 大変お得だと思います。', '40型はやっぱり見やすい！': '安く購入出来ました40型はやっぱり見やすい！', '40型': '４０型でこの値段には驚きです。昨日も沢山ありますが会社でモニター用として購入しましたが家庭でも十分な品質だと思います。'}};
           const allReviews = ['テレビの画質見た目は普通でしたが、電源入れて着くまで時間が、かかります。後はスイッチつけるときにぶちって音がする', 'シンプルで、価額も安く良い&#10071;&#65039;しかし、チャンネル切り替えが、気絶するくらい(笑)長い&#10071;&#65039;番組表の文字が、読みにくい&#10071;&#65039;この価額だから、諦めるし う～ん、粒子も粗いし、私は繋ぎのテレビだから、セカンドテレビなら良いかもです&#10071;&#65039;後一万円出して他を、おすすめです。', '皆さんのクチコミにあったように、少しリモコンの反応が遅いですが、安かったので特に気になりません。 良い買い物ができました。', 'いつも利用しています。 ありがとうございます。', 'このサイズでこの価格、品質なら 大変お得だと思います。', '４０型でこの値段には驚きです。昨日も沢山ありますが会社でモニター用として購入しましたが家庭でも十分な品質だと思います。', 'プチ会議室に設置して仕事用に使用しておりますが、HDMI端子3系統は本当に便利です。 パソコン画面の出力も問題ありません！', '配送に対しての要望も迅速に対応してくださいました！ 大変素晴らしいショップ様です。 テレビは値段はお手頃なのに大きさ、画質大満足です。 いらない機能などがないので、シンプルで使いやすいです！ また機会があれば利用させていただきます！ この度はありがとうございました。', '画面はきれいです 音質は低音高音が不足です チャンネルの切替時の切替時間は昔の蛍光灯かと思うほど遅いです', 'PCのモニターとしても使用してますが TVという部分では画質は値段からすれば充分とは思います。ナショナルブランドとの比較ではやはり落ちるのはしょうがないと思います。音質については聞けます（笑）低音の全くないペラペラの音質です。 マニュアルでの調整も出来ますが低音を最大にした場合低音は出ずに音が割れて全く聞ける状態にはなりませんので 音質が気になる方は別途スピーカー等を使う必要があります。気になる事はリモコンでOFFにした時に画面が消えた後に音声が一瞬鳴ったり 入力切替等の後にプチッっというノイズがしたりで耐久性には不安が感じられますが どの程度の耐久性かはこれからですので不明です。 まあ 値段が値段だけにこれはこれで充分にありだと思います。', '画質・音質はうちには合わず残念でした。 番組表も１チャンネル毎の表示でもの凄く見難い… 機能性と価格で試し買いでしたがこのブランドのリピートはないですね、', 'お値段も安く購入できて満足です！また利用させていただきたいと思います。', '安く購入出来ました40型はやっぱり見やすい！', 'つかいがってがわるいテレビです。 録画中は裏番組見れないし、 画像が途切れるし番組表の読み込み遅いし勝手失敗なテレビです。 一年たたないでリモコン壊れかけてきてます。'];
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
           const currentSpecs = {'画面サイズ': '40 V型(インチ)', '画素数': '1920x1080', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': 'LEDバックライト', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': '外付けHDD', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '2端子', 'リモコン(音声操作)': 'None', 'スピーカー数': 'None', '幅x高さx奥行': 'None', '重量': '8.5 kg'};



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
           function updateSpecDisplay(specs, title = "SP-40TV03LR 商品スペック") {
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
    