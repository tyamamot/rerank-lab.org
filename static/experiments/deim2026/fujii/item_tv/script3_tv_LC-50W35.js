
           // ====================================================================
           // 1. データ構造の定義
           // ====================================================================

           // レビューデータ: キーワード => {意見: レビュー本文}
           const reviewData = {'録画設定はしやすいか': {'リモコンが小さくなっていてうれしい。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', 'リモコンを使用したときの本体側の反応が...ワンテンポ遅いです。': '番組表の表示など、リモコンを使用したときの本体側の反応が今まで使用していたテレビと比べてワンテンポ遅いです。'}, '音質の良さ': {}, '運びやすさ': {'大きくて綺麗です': '大きくて綺麗で私も家族も大変満足しております。', '少し若返りました（笑）': '技術は確実に進化していますね。いつまでも同じものにしがみつく必要のあることもありますが、テレビはちょっと違うようです。少し若返りました。（笑）', '設置は少し、大きいので一人では無理ですね。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '設置は少し、大きいので一人では無理ですね。結構大変で、時間がかかってしまいました。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '50インチが欲しくて': '初期のAQUOSからの買い換えで50インチが欲しくて1年探してやっと希望の金額で買えました。  発送も早く入る時間も希望通りで助かりました。ネットも繋げて満足です ありがとうございました', '32インチのアクオスから買い換えました。': '32インチのアクオスから買い換えました。 線を繋ぐと、そのまま使えて今までのような操作で使えるので最高です！ こんなお安く良いものを買えて大満足です。 画質は、すごく良くなってますが（6年前のテレビより）音質は、あまり良くなってる気がしませんがこだわりが無いので満足しています。 配送について、お店さんが気を使っていただきました。 ありがとうございました！ ちなみに、配送は西濃運輸でした。', 'デカイテレビ': 'デカイテレビはとても良かった。 値段も安めです。オススメ', '大きい画面は迫力あっていいですね。': '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', '大型のTVがほしかったんで最高': 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高'}, '脚の安定性': {'設置は少し、大きいので一人では無理ですね。結構大変で、時間がかかってしまいました。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '今まで、40インチそこそこだったので、かなり大きく感じます。': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', 'デカイテレビはとても良かった。': 'デカイテレビはとても良かった。 値段も安めです。オススメ'}, '画質の良さ': {'画質も十分綺麗': 'この値段で買えるテレビ、画質も十分綺麗で、購入してよかったです。', '画質は、すごく良くなってますが（6年前のテレビより）': '32インチのアクオスから買い換えました。 線を繋ぐと、そのまま使えて今までのような操作で使えるので最高です！ こんなお安く良いものを買えて大満足です。 画質は、すごく良くなってますが（6年前のテレビより）音質は、あまり良くなってる気がしませんがこだわりが無いので満足しています。 配送について、お店さんが気を使っていただきました。 ありがとうございました！ ちなみに、配送は西濃運輸でした。', '画質が思っていたよりよくなかった': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '4kではないですが': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', '大きい画面は迫力あっていいですね。': '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', 'デカイテレビはとても良かった。': 'デカイテレビはとても良かった。 値段も安めです。オススメ', 'ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '大型のTVがほしかったんで最高': 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高', '大きくて綺麗です': '大きくて綺麗で私も家族も大変満足しております。'}, 'コンサートを観るのに向いているか': {'ホームシアターに繋いで': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', '大きい画面は迫力あっていいですね。': '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', '今までもアクオスを見ていたせいかもしれません。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '32インチの買い替えで大型テレビで良いですね？': '32インチの買い替えで大型テレビで良いですね？', '大型のTVがほしかったんで最高': 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高', '大きくて綺麗です': '大きくて綺麗で私も家族も大変満足しております。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '画質も十分綺麗': 'この値段で買えるテレビ、画質も十分綺麗で、購入してよかったです。', '4kではないですが': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', '画質が思っていたよりよくなかった': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました'}, 'スポーツ観戦に向いているか': {'大きい画面は迫力あっていいですね。': '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '大型のTVがほしかったんで最高': 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高', '32インチの買い替えで大型テレビで良いですね？': '32インチの買い替えで大型テレビで良いですね？', '今までもアクオスを見ていたせいかもしれません。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '画質も十分綺麗': 'この値段で買えるテレビ、画質も十分綺麗で、購入してよかったです。', '大きくて綺麗です': '大きくて綺麗で私も家族も大変満足しております。', 'デカイテレビ': 'デカイテレビはとても良かった。 値段も安めです。オススメ', 'デカイテレビはとても良かった。': 'デカイテレビはとても良かった。 値段も安めです。オススメ', '4kではないですが': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。'}, '受信精度の良さ': {'4kではないですが': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。'}, '映画鑑賞に向いているか': {'ホームシアターに繋いで': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '大きい画面は迫力あっていいですね。': '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', '画質も十分綺麗': 'この値段で買えるテレビ、画質も十分綺麗で、購入してよかったです。', '今までもアクオスを見ていたせいかもしれません。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '32インチの買い替えで大型テレビで良いですね？': '32インチの買い替えで大型テレビで良いですね？', '大型のTVがほしかったんで最高': 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高', '画質が思っていたよりよくなかった': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '4kではないですが': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', 'ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。'}, 'どれぐらい場所を取るか': {'設置は少し、大きいので一人では無理ですね。': '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました': '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '今まで、40インチそこそこだったので、かなり大きく感じます。': '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', '50インチが欲しくて': '初期のAQUOSからの買い換えで50インチが欲しくて1年探してやっと希望の金額で買えました。  発送も早く入る時間も希望通りで助かりました。ネットも繋げて満足です ありがとうございました', '32インチのアクオスから買い換えました。': '32インチのアクオスから買い換えました。 線を繋ぐと、そのまま使えて今までのような操作で使えるので最高です！ こんなお安く良いものを買えて大満足です。 画質は、すごく良くなってますが（6年前のテレビより）音質は、あまり良くなってる気がしませんがこだわりが無いので満足しています。 配送について、お店さんが気を使っていただきました。 ありがとうございました！ ちなみに、配送は西濃運輸でした。', '大きくて綺麗です': '大きくて綺麗で私も家族も大変満足しております。', '32インチの買い替えで大型テレビで良いですね？': '32インチの買い替えで大型テレビで良いですね？', 'デカイテレビ': 'デカイテレビはとても良かった。 値段も安めです。オススメ', '大きい画面は迫力あっていいですね。': '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', '新築にしたから大型のTVがほしかったんで最高': 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高'}};
           const allReviews = ['デカイテレビはとても良かった。 値段も安めです。オススメ', '高評価のマクスゼンと迷いましたが、電器屋に下見に行っても、置いてなく、同価格帯の中国メーカーの画像が、白っぽく画像があらかったのでこちらにしました。 ＳＯＮＹやパナと見比べても、画像はシャープが一番好みでした。 今までもアクオスを見ていたせいかもしれません。 おおきな買い物なので、下見したほうがいいと思います。 リモコンが小さくなっていてうれしい。画像も昔のものとは全然違います。買ってよかったです。 設置は少し、大きいので一人では無理ですね。 結構大変で、時間がかかってしまいました。 50インチでこの値段は本当にお得でした。', '36インチからの買い替えです。リビングが20畳あるので、とても見やすくていい感じですが、画質が思っていたよりよくなかったのでマイナス１にしました', '大きくて綺麗で私も家族も大変満足しております。', '急に壊れてアタフタしていた所、このテレビを見つけました！快速だったので、本当に助かりました！ありがとうございました！', 'まさかこの価格でこのクオリティのテレビが買えるなんて…超ラッキーでした。とてもいい買い物ができました。家族揃って大満足しています。お薦めですよ。', '技術は確実に進化していますね。いつまでも同じものにしがみつく必要のあることもありますが、テレビはちょっと違うようです。少し若返りました。（笑）', '今まで、40インチそこそこだったので、かなり大きく感じます。 ホームシアターに繋いで、まるで映画館のようです。 4kではないですが、値段も安くて良い買い物が出来ました。', '安く買えたし配送も問題ありませんでした。購入の数日後には売り切れになっていたので良いタイミングで買えて良かったです！', '画像も綺麗で、値段も安くて、満足です。配送も早く、設置も1人で出来ました。', '初期のAQUOSからの買い換えで50インチが欲しくて1年探してやっと希望の金額で買えました。  発送も早く入る時間も希望通りで助かりました。ネットも繋げて満足です ありがとうございました', '大きい画面は迫力あっていいですね。ほぼゲーム専用で使用中。', 'この値段で買えるテレビ、画質も十分綺麗で、購入してよかったです。', '32インチのアクオスから買い換えました。 線を繋ぐと、そのまま使えて今までのような操作で使えるので最高です！ こんなお安く良いものを買えて大満足です。 画質は、すごく良くなってますが（6年前のテレビより）音質は、あまり良くなってる気がしませんがこだわりが無いので満足しています。 配送について、お店さんが気を使っていただきました。 ありがとうございました！ ちなみに、配送は西濃運輸でした。', '希望する最低限の仕様を満足していて、価格も格安でした。', '電気屋さんを見て回りましたがなかなかこのお値段では買えません。ネットで買うのはちょっと不安でしたが何も問題なくお得にゲット出来ました! ブラックのシンプルなデザインも良いです!', 'こんなTVがこんな価格で買えたんで大変満足です&#10071;新築にしたから大型のTVがほしかったんで最高', '32インチの買い替えで大型テレビで良いですね？', '番組表の表示など、リモコンを使用したときの本体側の反応が今まで使用していたテレビと比べてワンテンポ遅いです。', 'まだ届いてませんが、安く購入出来て良かったです', '注文後、すぐに届きました。また機会があれば購入します。'];
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
           const currentSpecs = {'画面サイズ': '50 V型(インチ)', '画素数': '1920x1080', 'パネル種類': 'None', 'HDR方式': 'None', '映像処理エンジン': 'None', 'バックライト': 'エッジ型LEDバックライト', '量子ドット': 'None', '倍速機能': 'None', 'BS 8K': 'None', 'BS 4K/110度CS 4K': 'None', '録画機能': '外付けHDD', 'ドライブ内蔵': 'None', '自動録画機能': 'None', '2番組同時録画': 'None', '早見再生': 'None', 'スマートスピーカー連携': 'None', '回転式スタンド': 'None', 'HDMI端子': '3端子ARC対応', 'リモコン(音声操作)': 'None', 'スピーカー数': 'None', '幅x高さx奥行': '1123x684x315 mm', '重量': '21 kg'};



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
           function updateSpecDisplay(specs, title = "LC-50W35 商品スペック") {
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
    