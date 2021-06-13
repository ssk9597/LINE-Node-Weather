![名称未設定.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/838372/0af0bfce-b695-b341-4e90-aeefde544562.png)

## どのようなアプリか

皆さんは、今日の気温を聞いて、「快適に過ごすために今日のファッションをこうしよう」ってパッと思いつきますか？

私は、最高気温、最低気温を聞いてもそれがどのくらい暑いのか、寒いのかがピンと来ず、洋服のチョイスを外したことがしばしばあります。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/838372/c9583e2c-1e6c-a662-e7cf-b9995ca8e3cb.png)

こんな思いを 2 度としないために今回このアプリを作りました。

## 開発

Node.js

Express

@line/bot-sdk

axios

dotenv

nodemon

## アプリの流れ

アプリの流れは大まかに以下の 4 つのステップで成り立っています。

・① クライアントが現在地を送る

・②[OpenWeather](https://openweathermap.org/)から天気予報を取得

・③ データの整形

・④ クライアントに送る

## デプロイ

[Glitch](https://glitch.com/)を使いました。

https://line-weather-fashion.glitch.me/
