
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．．': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', 'レコーダーなどのリモコンにTV操作をセットできないこと': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。', 'YouTubeが観れて最高': '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', 'リモコンの感度もいいです': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', 'YouTubeはばっちり見れます。': '息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。', '何よりユーチューブが見れるので感激。': '薄型軽量、画質もよい、設定も簡単、何よりユーチューブが見れるので感激。 中国製だが決してあなどれない、これが28,000円台とは信じられない。 当初はヤマダ電機で国内製のを買おうと思ったが、これにして大正解、次もこれにしたいです。', 'Wifi 搭載': '子供部屋に買いました。パナソニックと迷いましたが、値段とWifi 搭載が決めてでした。映りも思っていたよりもよく、本人も満足しています。後はどのくらいもってくれるかです。'}, '音質の良さ': {}, '運びやすさ': {'薄型軽量': '薄型軽量、画質もよい、設定も簡単、何よりユーチューブが見れるので感激。 中国製だが決してあなどれない、これが28,000円台とは信じられない。 当初はヤマダ電機で国内製のを買おうと思ったが、これにして大正解、次もこれにしたいです。', 'お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。'}, '脚の安定性': {'薄型軽量': '薄型軽量、画質もよい、設定も簡単、何よりユーチューブが見れるので感激。 中国製だが決してあなどれない、これが28,000円台とは信じられない。 当初はヤマダ電機で国内製のを買おうと思ったが、これにして大正解、次もこれにしたいです。'}, '画質の良さ': {'画質は値段のそれなりです。': '息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。', '画像もきれい': '立ち上がりも早いし画像もきれい。 足の取り付けは少し難しかったですが。 配送の時間が当日にしか連絡してもらえないのが不便でした。', '画像も綺麗だし音もいい♪YouTubeが観れて最高': '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', '以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', 'お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', 'YOUTUBEも問題なく観れます。': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。', 'HDMI端子がたくさん(４入力)': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。'}, 'コンサートを観るのに向いているか': {'ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．．': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', '画像も綺麗だし音もいい♪YouTubeが観れて最高': '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', 'お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', '以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', 'YOUTUBEも問題なく観れます。': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', '画像もきれい': '立ち上がりも早いし画像もきれい。 足の取り付けは少し難しかったですが。 配送の時間が当日にしか連絡してもらえないのが不便でした。', '画質は値段のそれなりです。': '息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。', 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。', 'HDMI端子がたくさん(４入力)': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。'}, 'スポーツ観戦に向いているか': {'画像も綺麗だし音もいい♪YouTubeが観れて最高': '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', 'お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', '以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', '何よりユーチューブが見れるので感激。': '薄型軽量、画質もよい、設定も簡単、何よりユーチューブが見れるので感激。 中国製だが決してあなどれない、これが28,000円台とは信じられない。 当初はヤマダ電機で国内製のを買おうと思ったが、これにして大正解、次もこれにしたいです。', 'YouTubeはばっちり見れます。': '息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。', '画像もきれい': '立ち上がりも早いし画像もきれい。 足の取り付けは少し難しかったですが。 配送の時間が当日にしか連絡してもらえないのが不便でした。', '画質は値段のそれなりです。': '息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。', 'HDMI端子がたくさん(４入力)': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。'}, '受信精度の良さ': {}, '映画鑑賞に向いているか': {'画像も綺麗だし音もいい♪YouTubeが観れて最高': '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', 'お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', 'ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．．': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', 'YouTubeが観れて最高': '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', '以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', 'リモコンの感度もいいです': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', 'YOUTUBEも問題なく観れます。': 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', '画像もきれい': '立ち上がりも早いし画像もきれい。 足の取り付けは少し難しかったですが。 配送の時間が当日にしか連絡してもらえないのが不便でした。', 'レコーダーなどのリモコンにTV操作をセットできないこと': 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。', '画質は値段のそれなりです。': '息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。'}, 'どれぐらい場所を取るか': {'お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。': 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。'}};
           const allReviews = ['息子（大学生）の一人暮らしに購入。今どきのテレビなので設定はとても簡単は当たり前。LANの接続は有線だけでなく、無線接続もあって良い。YouTubeはばっちり見れます。ただし、家庭内の無線LAN環境においてルーター3台をカスケード接続しているため接続対象のルータがルーターモードではエラーとなり、接続できませんでした。ブリッジモードに切替えたらあっさり繋がりました。あと、画質は値段のそれなりです。何より息子にとってYouTubeが見られるのはとても大きなファクターであり、とても喜んでいます。', 'PCモニターとテレビ両使いです。どちらも画質、音声もよく満足しています、 YOUTUBEも問題なく観れます。 ホームリンクは SONY BDZ-AT950Wで録画番組までは行けるのですが視聴出来ませんでした レコーダーの方が固まってしまいます  レコーダーと相性が合えば観れるのでしょうが．．． リモコンの感度もいいです、安くてとてもいい商品だと思います。', 'この価格で、YouTubeやVODがある機種はないのでは？ 国内大手家電メーカーにこだわらないのであれば、非常に お買い得だと思います。', '配送時間の変更や問い合わせ等丁寧に対応していただき満足しました', '薄型軽量、画質もよい、設定も簡単、何よりユーチューブが見れるので感激。 中国製だが決してあなどれない、これが28,000円台とは信じられない。 当初はヤマダ電機で国内製のを買おうと思ったが、これにして大正解、次もこれにしたいです。', 'HDMI端子がたくさん(４入力)欲しくて、この商品を選択しました。予想外に画質も良くて、満足しています。ちょっと残念なのはレコーダーなどのリモコンにTV操作をセットできないことでしょうか…。これから使い込んでいきたいと思います、ありがとうございました。', 'コスパ凄くいい お客様用の部屋に買いました そこで子供がユーチューブ見てます 扱いやすいしこの値段でこのクオリティは有難い&#12316; メインじゃなければ、日本製にこだわらなくていいな(^^♪', 'ハイセンスは初めて購入したが、この金額での購入はお得感ありでした', '立ち上がりも早いし画像もきれい。 足の取り付けは少し難しかったですが。 配送の時間が当日にしか連絡してもらえないのが不便でした。', 'リーズナブルな価格で、送料無料 お洒落なサイズで、部屋にピッタリでした。以前のテレビと比べるとコンパクトで画像が見やすいのがハッキリ感じます。買い替えまだ早いかなと思ってましたが、購入して良かったです。', '画像も綺麗だし音もいい♪YouTubeが観れて最高 購入して良かったです。', '圧倒的な低価格で、この品質は自分では大満足です。', 'この価格でVODと無線LANが使えるのは、超コスパが良いと思います。', 'この値段でこの性能、とても満足。 保証も三年ありポケットWi-FiにてユーチューブとTSUTAYA tv 楽しませてもらいます。', '子供部屋に買いました。パナソニックと迷いましたが、値段とWifi 搭載が決めてでした。映りも思っていたよりもよく、本人も満足しています。後はどのくらいもってくれるかです。'];
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
           const currentSpecs = {'画面サイズ': '32 V型(インチ)', '画素数': '1366x768', 'パネル種類': 'IPSパネル', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': '直下型LEDバックライト', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': '外付けHDD', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': '1.3 倍速', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '4端子ARC対応MHL対応', 'リモコン(音声操作)': 'None', 'スピーカー数': 'フルレンジ×2', '幅x高さx奥行': '734x477x175 mm', '重量': '4.4 kg'};



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
           function updateSpecDisplay(specs, title = "32N20 商品スペック") {
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
    