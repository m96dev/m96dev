ガラケー計測やメール開封に使えるヒットビルダーの使い方    
=====================================


![taggenerator](http://www.kagua.biz/wp-content/uploads/2015/08/taggenerator2.jpg)

**※cidに関する注意を追記しました。**

ガラケーの計測やHTMLメールの開封など、通常のトラッキングではできない計測ができる、それがGoogleアナリティクスのMeasurement Protocol（メジャメントプロトコル）です。httpリクエストを送るだけでトラッキングができる通信技術でユニバーサルアナリティクスから実装されました。

こんにちは、[**カグア！**](https://www.facebook.com/kagua)です。アスキーさんで連載を書かせていただきましたが、そのときに紹介したMeasurement Protocol ですが実際に使うにはタグを生成しなくてはなりません。

＞＞[**ASCII.jp：メルマガ開封率をMeasurement Protocolで調べる｜自分でできる！ユニバーサルアナリティクス活用ガイド**](http://ascii.jp/elem/000/001/026/1026730/)

コールするURLが簡単に生成できないかなと思っていたところ、先日Googleから公式にツールがリリースされました。本記事では、そのMeasurement ProtocolのURLをつくるそのヒットビルダーをご紹介します。

目次
  * Measurement Protocolとは
  * ヒットビルダーの使い方
      * 1.Google公式のヒットビルダーにアクセス
      * 2.プロパティIDなど情報を入力
      * 3.計測させたいURLを設定し生成！リアルタイムで確認
      * より詳細なトラッキング情報も送信可能
      * IMGタグなどでコールすればOK
  * ヒット数上限の注意：8月25日追記
  * まとめ～自社アフィリエイトのピクセルにも

### Measurement Protocolとは
-------------------------------------------------------------

![Googleアナリティクスのメジャメントタグ](http://www.kagua.biz/wp-content/uploads/2015/08/Googleアナリティクスのメジャメントタグ.jpg)

Measurement Protocolとは、ユニバーサルアナリティクスから実装されました、データトラッキングの通信フォーマットです。

＞＞＞＞[**Measurement Protocol Overview&nbsp;| Google Developers**](https://developers.google.com/analytics/devguides/collection/protocol/v1/?hl=ja)

通常Googleアナリティクスでは、トラッキングコードと呼ばれるコードを各ページに組み込んで、データ送信をします。ga(‘send’, ‘pageview’,～); といったJavaScriptで稼働させます。

いっぽう、Measurement Protocolでは、生成したURLを、IMGタグなどで単純に、httpリクエストを送信すれば計測できてしまうのです。ですから画像として扱えば良いため、たとえばHTMLメールに貼り付けて開封率を計測したり、JavaScriptが使えないガラケーの計測をしたりなど使えます。


  col 1 | col 2                                                                    
  ----- | -------------------------------------------------------------------------
  `1`   | `<``img` `src``=``"https://www.google-analytics.com/collect?v=1&..."``/>`


＞＞[**Email Tracking – Measurement Protocol |&nbsp;Google Developers**](https://developers.google.com/analytics/devguides/collection/protocol/v1/email?hl=ja)

<span id="i">ヒットビルダーの使い方</span>
-------------------------------

### <span id="1Google">1.Google公式のヒットビルダーにアクセス</span>

https://ga-dev-tools.appspot.com/hit-builder/

＞＞[**Hit Builder — Google Analytics Demos & Tools**](https://ga-dev-tools.appspot.com/hit-builder/)

上記URLにアクセスして、AUTH認証をしてGoogleアナリティクスの利用を承認してください。  
![認証します](http://www.kagua.biz/wp-content/uploads/2015/08/認証します.jpg)

### <span id="2ID">2.プロパティIDなど情報を入力</span>

tidはプロパティID（認証後はメニューから選ぶだけです）、cidはクライアントIDですがぐるっと回っているアイコンをクリックしますとユニークなつづりを発行してくれますので、それをそのまま使えばokです。そして、項目を追加（**Add parameter**）し、「dp」「計測したいURL」を入力します。  
![必須項目](http://www.kagua.biz/wp-content/uploads/2015/08/必須項目.jpg)

入力する情報は決して間違えないようにしましょう。いわば手入力で都度トラッキングをさせているわけですので、ここで間違ってしまいますと、永遠に間違った計測しかされません。気をつけましょう。

### 3.計測させたいURLを設定し生成！リアルタイムで確認

URLはでコードする必要があります。スラッシュは「%2F」で記述してください。あとは、「**Send Hit Google Analytics**」をクリックしますと確認できます。正しく生成されていればリアルタイム解析にURLがちゃんと表出します。  
![完成](http://www.kagua.biz/wp-content/uploads/2015/08/完成.jpg)

### より詳細なトラッキング情報も送信可能

詳細なタグは、Measurement Protocolタグのリファレンスをご覧ください。以下に必須項目の例を示します。  
＞＞[**Measurement Protocol Parameter Reference &nbsp;|&nbsp; Analytics Measurement Protocol &nbsp;|&nbsp; Google Developers**](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cid)

**(パラメーター)　(意味)　(記述例)**  
v　バージョン　&v=1  
tid　プロパティID　&tid=UA-999999-1  
cid　クライアントID　&cid=35009a79-1a05-49d7-b876-2b884d0f825b  
t　ヒットタイプ　&t=pageview  
dp　ドキュメントパス　&dp=%2Findex.html

※cidが同じですと同一セッションとみなされる可能性がありますので、後述の追記を参照。

### <span id="IMGOK">IMGタグなどでコールすればOK</span>

「**Copy hit payload**」をクリックしますと生成されたヒットコードがコピーされます。以下のcollect?以降に貼り付けて、IMGタグなどで呼び出せばOKです。


  col 1 | col 2                                                                                                     
  ----- | ----------------------------------------------------------------------------------------------------------
  `1`   | `<``img` `width``=``"1"` `height``=``"1"` `src``=``"https://www.google-analytics.com/collect?v=1&..."``/>`

### ヒット数上限の注意：8月25日追記
---------------------------------------
たとえば、1セッション内で500PVを超えてしまうと、その日の計測はされなくなってしまうというもの。Googleアナリティクスプレミアムではリミットがなくなる模様ですが、無料版ですと注意。

[**Google Analytics Collection Limits and Quotas &nbsp;|&nbsp; Classic Analytics Web Tracking (ga.js) &nbsp;|&nbsp; Google Developers**](https://developers.google.com/analytics/devguides/collection/gajs/limits-quotas)

ユニバーサルアナリティクスでは、以下の上限があります。

200,000 hits per user per day  
（1日につき、ユーザーあたり20万ヒット）

500 hits per session not including ecommerce (item and transaction hit types).  
（eコマースを除いて、1セッションあたり500ヒット）

上記の方法でCIDを固定的なものにしてしまいますと、同一セッションのみなされる可能性があるので、メルマガ経由が500件以上あると、マズイかもです。ランダムで数値を差し込みしたほうが良いですね。

このあたりは、かつてga.jsのときにリリースされていたガラケー版Googleアナリティクスですと、乱数が割り当てられていました。上記cidの自動発行はあくまで一意のものにどどめるようお願いします。

### まとめ～

メールの開封率などは、すでに多くのメール配信ASPで実装されていて、あらためてGoogleアナリティクスで計測する必要はないかもしれません。
しかし、ガラケーなどは一定のニーズがありつつも、かつて普及していましたphpのライブラリなどはユニバーサルアナリティクスでは使えません。CMSやシステム等に上記で生成されたURLの原則にしたがって組み込めば、いまでも十分にガラケー計測が十分可能です。


