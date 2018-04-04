# draft md

[ES6 クラス](https://html5experts.jp/takazudo/17355/)

## ES6 class

```md
|            old             |         ES6            |
| :------------------------- | :--------------------- |
| Cat.prototype = {          | class Cat {            |
|   setName: function(name){ |   constructor(name){   |
|     this._name = name;     |     this.name = name;  |
|   },                       |   }                    |

```

```js
/* Cat雛形の作成 */
function Cat(name) {
  this.setName(name);
};
Cat.prototype = {
  setName: function(name) {
    this._name = name;
  },
  getName: function() {
    return this._name;
  },
  walk: function() {
    console.log(this._name + 'が歩いてます');
  }
};
/* Catからオブジェクトを作成 */
var cat1 = new Cat('タマ');
var cat2 = new Cat('コタロー');
cat1.walk(); // タマが歩いています
cat2.walk(); // コタローが歩いています
```

```js
/* Catクラス */
class Cat {
  constructor(name) {
    this.name = name;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  walk() {
    console.log(this._name + 'が歩いてます');
  }
}
/* Catクラスのインスタンス作成 */
var cat1 = new Cat('タマ');
var cat2 = new Cat('コタロー');
cat1.walk(); // タマが歩いています
cat2.walk(); // コタローが歩いています
```
