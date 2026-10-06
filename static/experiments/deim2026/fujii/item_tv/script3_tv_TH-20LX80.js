
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'純正リモコンも付属していて問題もなく作動しています。': '中古ということであまり期待はしていなかったが、実際に届いたものは多少の傷はあるものの液晶画面は 何の問題もなく満足しています。純正リモコンも付属していて問題もなく作動しています。あとは、耐久性だけです。', 'ビデオ入力が全て死んでいた': '中古ですが十分に使えます 良い買い物でした と思ったがビデオ入力が全て死んでいた サービス期間が終わっていた。短いよクレーム受付期間がね だから満足度は★１つ', 'リモコンに電池もついて': 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！', '本体もリモコンも綺麗な状態です': '普通に使えて満足です、本体もリモコンも綺麗な状態です、あまり中古には見えないほど 綺麗だす、有難う御座います', 'リモコン電池が2個付属していたのは有難かったですが,1個が全く切れておりリモコンにTVが反応しない為,': '配送画質値段ともに全く問題なく,映りもきれいでした｡今後もまた必要があったら注文します｡ただリモコン電池が2個付属していたのは有難かったですが,1個が全く切れておりリモコンにTVが反応しない為,TV自体が不良品かと思い原因がわかるまで2時間かかりました｡', '意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。'}, '音質の良さ': {}, '運びやすさ': {'あとは、耐久性だけです。': '中古ということであまり期待はしていなかったが、実際に届いたものは多少の傷はあるものの液晶画面は 何の問題もなく満足しています。純正リモコンも付属していて問題もなく作動しています。あとは、耐久性だけです。', '一人部屋には最適の大きさです。': '一人部屋には最適の大きさです。機能も充分なほど揃っています。', '我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。'}, '脚の安定性': {'あとは、耐久性だけです。': '中古ということであまり期待はしていなかったが、実際に届いたものは多少の傷はあるものの液晶画面は 何の問題もなく満足しています。純正リモコンも付属していて問題もなく作動しています。あとは、耐久性だけです。'}, '画質の良さ': {'一人部屋には最適の大きさです。': '一人部屋には最適の大きさです。機能も充分なほど揃っています。', 'ビデオ入力が全て死んでいた': '中古ですが十分に使えます 良い買い物でした と思ったがビデオ入力が全て死んでいた サービス期間が終わっていた。短いよクレーム受付期間がね だから満足度は★１つ', '我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。', 'リモコンに電池もついて、助かりました。': 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！'}, 'コンサートを観るのに向いているか': {'スタンドに気にしない小さい傷があるだけです。': '本体とてもきれいです。スタンドに気にしない小さい傷があるだけです。配送も早くて、本当に買ってよかったです。', '一人部屋には最適の大きさです。': '一人部屋には最適の大きさです。機能も充分なほど揃っています。', 'ビデオ入力が全て死んでいた': '中古ですが十分に使えます 良い買い物でした と思ったがビデオ入力が全て死んでいた サービス期間が終わっていた。短いよクレーム受付期間がね だから満足度は★１つ', 'リモコンに電池もついて、助かりました。': 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！', '我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。'}, 'スポーツ観戦に向いているか': {'スタンドに気にしない小さい傷があるだけです。': '本体とてもきれいです。スタンドに気にしない小さい傷があるだけです。配送も早くて、本当に買ってよかったです。', 'リモコンに電池もついて、助かりました。': 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！', '我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。', '一人部屋には最適の大きさです。': '一人部屋には最適の大きさです。機能も充分なほど揃っています。'}, '受信精度の良さ': {}, '映画鑑賞に向いているか': {'ビデオ入力が全て死んでいた': '中古ですが十分に使えます 良い買い物でした と思ったがビデオ入力が全て死んでいた サービス期間が終わっていた。短いよクレーム受付期間がね だから満足度は★１つ', '一人部屋には最適の大きさです。': '一人部屋には最適の大きさです。機能も充分なほど揃っています。', '純正リモコンも付属していて問題もなく作動しています。': '中古ということであまり期待はしていなかったが、実際に届いたものは多少の傷はあるものの液晶画面は 何の問題もなく満足しています。純正リモコンも付属していて問題もなく作動しています。あとは、耐久性だけです。', '我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。', 'リモコン電池が2個付属していたのは有難かったですが,1個が全く切れておりリモコンにTVが反応しない為,': '配送画質値段ともに全く問題なく,映りもきれいでした｡今後もまた必要があったら注文します｡ただリモコン電池が2個付属していたのは有難かったですが,1個が全く切れておりリモコンにTVが反応しない為,TV自体が不良品かと思い原因がわかるまで2時間かかりました｡', 'スタンドに気にしない小さい傷があるだけです。': '本体とてもきれいです。スタンドに気にしない小さい傷があるだけです。配送も早くて、本当に買ってよかったです。', '本体もリモコンも綺麗な状態です': '普通に使えて満足です、本体もリモコンも綺麗な状態です、あまり中古には見えないほど 綺麗だす、有難う御座います', 'リモコンに電池もついて': 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！', 'リモコンに電池もついて、助かりました。': 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！', '意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。'}, 'どれぐらい場所を取るか': {'一人部屋には最適の大きさです。': '一人部屋には最適の大きさです。機能も充分なほど揃っています。', '我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう': '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。'}};
           const allReviews = ['配送画質値段ともに全く問題なく,映りもきれいでした｡今後もまた必要があったら注文します｡ただリモコン電池が2個付属していたのは有難かったですが,1個が全く切れておりリモコンにTVが反応しない為,TV自体が不良品かと思い原因がわかるまで2時間かかりました｡', '注文からとっても早く、手元に届きました。商品も問題なく、キレイでした。 設定を変更するとき！説明書が、ないので、ちょっと戸惑うこともありましたが、無事出来ました。寝室のテレビとしての購入ですが、満足です。', '以前、１台購入して良かったので２台目の購入ですがこの値段でのこの品質はＯＫです。 気になる汚れやキズなどなく満足です。 注文から到着までも早く大変良い買い物ができました。', '中古とはいえこの価格で大変満足しました。 さすあｇパナソニック。この頃のテレビはまだ品質・機能ともにクオリティ高く、10年経過してても問題ありません。（耐久性は？ですが、我が家の三菱32型も10年経過しても全く問題ないので大丈夫でしょう）梱包は簡易ですが、きちんと宅配業者へ注意を促す張り紙が貼ってあり、梱包の廃棄も楽でなりよりでした。意外とリモコンの電池が付属されていない場合があるのですが、きちんと付属されており感謝です。', '中古ですが十分に使えます 良い買い物でした と思ったがビデオ入力が全て死んでいた サービス期間が終わっていた。短いよクレーム受付期間がね だから満足度は★１つ', 'リモコンに電池もついて、助かりました。配送早く、商品もきれいです。ありがとうございます！', '単身生活中、地震でTVが倒れ、画面にひびが入ったので中古を買いましたが、10年落ちには見えない新品同様の品質で大満足！！', 'もちろん中古品の多少の使用感はありますが、この価格ですごく良い品を手に入れられたと満足です。また利用したいお店です。', '中古ということであまり期待はしていなかったが、実際に届いたものは多少の傷はあるものの液晶画面は 何の問題もなく満足しています。純正リモコンも付属していて問題もなく作動しています。あとは、耐久性だけです。', '当然付いてると思っていたアンテナ線が無かったので、普通にしました。', '一人部屋には最適の大きさです。機能も充分なほど揃っています。', '本体とてもきれいです。スタンドに気にしない小さい傷があるだけです。配送も早くて、本当に買ってよかったです。', '普通に使えて満足です、本体もリモコンも綺麗な状態です、あまり中古には見えないほど 綺麗だす、有難う御座います', '寝室用なのでちょっと見る程度だったので 中古でもいっかなぁと、色々見ましたがこのお店が良さそうだったのでポチリ☆ 年式はちょい古いですが その辺の中古屋より全然綺麗だしお買得♪ 問題なく見れました～ 何より対応も早くて翌日には届きました(*^^*)'];
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
           const currentSpecs = {'画面サイズ': '20 V型(インチ)', '画素数': '1366x768', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': 'None', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': 'None', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '1端子', 'リモコン(音声操作)': 'None', 'スピーカー数': 'None', '幅x高さx奥行': '550x395x197 mm', '重量': '8.5 kg'};



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
           function updateSpecDisplay(specs, title = "TH-20LX80 商品スペック") {
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
    