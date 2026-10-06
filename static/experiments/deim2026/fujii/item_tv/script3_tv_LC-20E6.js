
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'新品のリモコンつきでこのお値段ということでこちらに決めました。': '４月から一人暮らししている大学生の息子が「テレビを買いたい」ということで、いろいろと探してこちらにたどり着きました。 レビューでの評判もよく、新品のリモコンつきでこのお値段ということでこちらに決めました。 テレビの状態もよく、初期設定も簡単にできたようです。 安くで購入できてよかった！と息子も満足しております。 ありがとうございました。', 'リモコン(音声操作)': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。', 'リモコンが純正新品が有りがたい。': 'パッと見で二か所ほど傷と汚れがあったけど抉れてるや変色は無い模様。 設置が終われば中古という違和感無く生活に馴染みました。 そしてリモコンが純正新品が有りがたい。 １つだけ気になったのは配送がプチプチ梱包(精密機械シールあり)で脚の部分が 角の部分から突き破ってか擦れてかで表に出ていた事。 それ以外で商品に関して特に不満が出ることなく満足でした。', 'この値段で新品の純正リモコンが付属するのはお得です。': '単身赴任用に購入しました。外装、液晶画面はとても綺麗でこの値段は安いと思います。この値段で新品の純正リモコンが付属するのはお得です。', 'リモコンが新品で良く満足です。': '本体に擦り傷は少々ありましたが画面に傷、ドットぬけなどなく良いとおもいます。リモコンが新品で良く満足です。届け日指定もでき発送メールもあり品物受け取りも無事できました。プチプチ梱包ですが画面には段ボールで保護されてるので配送中の傷は心配ないかな。', '新しいリモコンは有難いです。': 'ちゃんと映ります。傷は思った以上にありました。まぁそこは納得して買いましたけど。でも埃は拭き取ったほうがいいと思いますよ。見えづらいとこならまだしもパッと見でわかるぐらいというのはねぇ・・・。新しいリモコンは有難いです。', '新品のリモコンも付いており': '欲をいえば、もう少しクリーニングされていたらという初見ではありましたが、中古ゆえ小傷や多少の汚れなどの使用感はあるものの、写りも機能も完動品でまったく問題ありません。書斎のテレビが故障したので中古のテレビを探していたのですが、始終使うわけでもないのでこれで十分です。Ｂ－ＣＡＳカードにも不具合はみられず、新品のリモコンも付いておりポイントも一部使ったので、かなりのお買い得感がありました。'}, '音質の良さ': {}, '運びやすさ': {'寝室に置いてます': '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', '20型液晶テレビ': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。'}, '脚の安定性': {}, '画質の良さ': {'映像も画面もきれいです(^^)': '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', '今のところ綺麗に映る': 'まだ、使用して3日なので、今後は分からないが、今のところ綺麗に映るし、キズ等もあまり気にならないですので、満足しております。', '20型液晶テレビ': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。'}, 'コンサートを観るのに向いているか': {'テレビの受け台もモニター左右に向くのでいいです。': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。', '今のところ綺麗に映る': 'まだ、使用して3日なので、今後は分からないが、今のところ綺麗に映るし、キズ等もあまり気にならないですので、満足しております。', '映像も画面もきれいです(^^)': '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', '20型液晶テレビ': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。'}, 'スポーツ観戦に向いているか': {'テレビの受け台もモニター左右に向くのでいいです。': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。', '今のところ綺麗に映る': 'まだ、使用して3日なので、今後は分からないが、今のところ綺麗に映るし、キズ等もあまり気にならないですので、満足しております。', '映像も画面もきれいです(^^)': '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', '20型液晶テレビ': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。'}, '受信精度の良さ': {}, '映画鑑賞に向いているか': {'テレビの受け台もモニター左右に向くのでいいです。': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。', '今のところ綺麗に映る': 'まだ、使用して3日なので、今後は分からないが、今のところ綺麗に映るし、キズ等もあまり気にならないですので、満足しております。', '映像も画面もきれいです(^^)': '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', '20型液晶テレビ': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。', '新品のリモコンつきでこのお値段ということでこちらに決めました。': '４月から一人暮らししている大学生の息子が「テレビを買いたい」ということで、いろいろと探してこちらにたどり着きました。 レビューでの評判もよく、新品のリモコンつきでこのお値段ということでこちらに決めました。 テレビの状態もよく、初期設定も簡単にできたようです。 安くで購入できてよかった！と息子も満足しております。 ありがとうございました。', 'リモコンが純正新品が有りがたい。': 'パッと見で二か所ほど傷と汚れがあったけど抉れてるや変色は無い模様。 設置が終われば中古という違和感無く生活に馴染みました。 そしてリモコンが純正新品が有りがたい。 １つだけ気になったのは配送がプチプチ梱包(精密機械シールあり)で脚の部分が 角の部分から突き破ってか擦れてかで表に出ていた事。 それ以外で商品に関して特に不満が出ることなく満足でした。', 'リモコンが新品で良く満足です。': '本体に擦り傷は少々ありましたが画面に傷、ドットぬけなどなく良いとおもいます。リモコンが新品で良く満足です。届け日指定もでき発送メールもあり品物受け取りも無事できました。プチプチ梱包ですが画面には段ボールで保護されてるので配送中の傷は心配ないかな。', 'この値段で新品の純正リモコンが付属するのはお得です。': '単身赴任用に購入しました。外装、液晶画面はとても綺麗でこの値段は安いと思います。この値段で新品の純正リモコンが付属するのはお得です。', '新しいリモコンは有難いです。': 'ちゃんと映ります。傷は思った以上にありました。まぁそこは納得して買いましたけど。でも埃は拭き取ったほうがいいと思いますよ。見えづらいとこならまだしもパッと見でわかるぐらいというのはねぇ・・・。新しいリモコンは有難いです。', 'リモコン(音声操作)': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。'}, 'どれぐらい場所を取るか': {'寝室に置いてます': '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', '20型液晶テレビ': '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。'}};
           const allReviews = ['単身赴任用に購入しました。外装、液晶画面はとても綺麗でこの値段は安いと思います。この値段で新品の純正リモコンが付属するのはお得です。', '20型液晶テレビ中古で新品のリモコンです。設定が東京にされたていたので愛知県に設定して直ぐに映像が出ました。テレビの受け台もモニター左右に向くのでいいです。', '中古のＴＶでしたが大変満足です。 おまけにカードのポイント利用で大変値打ちに購入できました。 お世話になりました。', 'まだ、使用して3日なので、今後は分からないが、今のところ綺麗に映るし、キズ等もあまり気にならないですので、満足しております。', '一人暮らし用に購入。お値段にしては外観は思ったよりきれいです。 画面に少し擦り傷が多かったのがマイナス要素です。全体的にこのお値段では十分過ぎます。いい買い物でした。', '初めて中古のテレビを購入したけど特に問題なくとてもきれいです 寝室に置いてます 初期設定も簡単ですぐみることが出来ました 映像も画面もきれいです(^^)', 'パッと見で二か所ほど傷と汚れがあったけど抉れてるや変色は無い模様。 設置が終われば中古という違和感無く生活に馴染みました。 そしてリモコンが純正新品が有りがたい。 １つだけ気になったのは配送がプチプチ梱包(精密機械シールあり)で脚の部分が 角の部分から突き破ってか擦れてかで表に出ていた事。 それ以外で商品に関して特に不満が出ることなく満足でした。', '欲をいえば、もう少しクリーニングされていたらという初見ではありましたが、中古ゆえ小傷や多少の汚れなどの使用感はあるものの、写りも機能も完動品でまったく問題ありません。書斎のテレビが故障したので中古のテレビを探していたのですが、始終使うわけでもないのでこれで十分です。Ｂ－ＣＡＳカードにも不具合はみられず、新品のリモコンも付いておりポイントも一部使ったので、かなりのお買い得感がありました。', '本体に擦り傷は少々ありましたが画面に傷、ドットぬけなどなく良いとおもいます。リモコンが新品で良く満足です。届け日指定もでき発送メールもあり品物受け取りも無事できました。プチプチ梱包ですが画面には段ボールで保護されてるので配送中の傷は心配ないかな。', '迅速に対応してくださりました。中古でも全然キレイですし使えます。いい買い物ができましたm(__)m', '４月から一人暮らししている大学生の息子が「テレビを買いたい」ということで、いろいろと探してこちらにたどり着きました。 レビューでの評判もよく、新品のリモコンつきでこのお値段ということでこちらに決めました。 テレビの状態もよく、初期設定も簡単にできたようです。 安くで購入できてよかった！と息子も満足しております。 ありがとうございました。', '画面に傷あるが、リモコン新品と画面無傷で値段も手頃で寝室に設置して満足しています。', 'ちゃんと映ります。傷は思った以上にありました。まぁそこは納得して買いましたけど。でも埃は拭き取ったほうがいいと思いますよ。見えづらいとこならまだしもパッと見でわかるぐらいというのはねぇ・・・。新しいリモコンは有難いです。'];
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
           const currentSpecs = {'画面サイズ': '20 V型(インチ)', '画素数': '1366x768', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': 'None', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': 'None', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '2端子', 'リモコン(音声操作)': 'None', 'スピーカー数': 'None', '幅x高さx奥行': '509x375x165 mm', '重量': '6.2 kg'};



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
           function updateSpecDisplay(specs, title = "LC-20E6 商品スペック") {
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
    