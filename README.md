# m96dev
http://m96.eek.jp/

### root folder 
各レポジトリの TOPフォルダー的なもの
```
/m96dev
  |-- /autoJob
  |    |-- /dlAllFiles
  |    |-- /dlFiles
  |-- etc Folder ..
```
---

### storage
2018 / 01 /
### du
フォルダーごとの使用量
$ du -hs *
#### mono-96.jp 
```
$ pwd
/home/mono-96/www

$ du -hs *
6.1G	mono-96.jp
206M	mono-96.sakura.ne.jp
1.1G	mono96-sub.2-d.jp
```
#### Health and health.eek.jp
```
/home/health-mgr
3.8G	www
```
#### m96dev.eek.jp
```
3.6M	chromedriver_linux64.zip
34M   exp
61M	  nodejs-docs-samples
392M  ryLogin
280M  t
668M  test
```

### backup
超めっちゃ圧縮 tar.xz

```bash
tar cvJf hogehoge.tar.xz hogehoge/
```
解凍 `x` をつける。
```bash
tar xvJf hogehoge.tar.xz
```

### local development | ローカル確認用
#### install , express web server
`npm i`
#### start web server
`node srv`

---
### infra
- [x] check deploy m96dev
- [x] check all domain disk usage
- [ ] compress backup all domain
- [ ] active access log sakura domain
- [ ] active access log gcloud domain



[Qiita](http://qiita.com "Qiita")
[index](./index.html "index")
#### google api
[api test urlshortener ](./apiUrlShort.html "api urlshortener")

---
~~~~
***
___
