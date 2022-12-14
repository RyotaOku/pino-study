// // ----------関数を利用せず、かつidでいちいち取る場合

// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById('btn3')

// btn1.onclick = function(){
//   document.body.style.backgroundColor = "tomato"
// }

// btn2.onclick = function(){
//   document.body.style.backgroundColor = "skyblue"
// }

// btn3.onclick = function(){
//   document.body.style.backgroundColor = "lightgreen"
// }

// // このコードの問題点
// /* 汎用的ではない → いちいちid名で取得しているので、仮にHTML側でもう１つボタンが増えた際に
// jsを書き足す必要がある。

// 例) HTMLにyellowのボタンが増えた ↓
// const btn4 = document.getElementById('btn4')
// btn4.onclick = function(){
//   document.body.style.backgroundColor = "yellow"
// }
// といったコード作業が必要になる。
// */





// // ----------関数を利用せず、クラス名で要素を取得する場合
// const btn = document.getElementsByClassName('btn')
// // getElementsByClassName ではなく querySelectorAllでもOK

// for(let i = 0; i < btn.length; i++){
//   // for文を用いて何番目のボタンがクリックされたかを取得する
//   // iはbtnの数未満動く
//   /* 例) HTML側にclass名が「btn」のものが10個あった場合
//   btn.length → 9
//   配列は0から始まるため、0,1,2,3,4,5,6,7,8,9 で合計10
//   */
//   btn[i].addEventListener('click',function(){
//       document.body.style.backgroundColor = btn[i].value
//       // 試しにconsoleで中身を見てみる↓↓
//       console.log(btn[i].value)  //出力結果はクリックしたボタンのvalue値
//       // 押されたボタンのvalue値を代入する。HTML側ではinputタグを用いているので使用できる。
//       // buttonタグを使用している場合は　btn[i].innerText　で取得はできる。
//   })
// }

// // このコードの問題点
// /* 今回の肝である関数・引数を用いていない。

// さらに、inputタグを用いてボタンを作っていると仮定した場合、value値が都合よく「tomato」で
// あるとは限らない。
// 例) <input type="button" value="トマト色に変更！" class="btn">
// といった場合に、value値を取得しただけでは背景色が変えられない場合がある。
// */





// // ----------関数を利用して、クラス名で要素を取得する場合
// const btn = document.getElementsByClassName('btn')
// // getElementsByClassName ではなく querySelectorAllでもOK
// let color = ''
// // 空っぽの変数を宣言。この中に変更する色を保存する
// // わざわざこの場所にletを宣言する理由(for文の中にletを宣言しない理由)は
// // for文の中で宣言してしまうとfor文の中でしかletが参照できないから。
// // この挙動をブロックスコープという。詳しくはググって。

// for(let i = 0; i < btn.length; i++){
//   btn[i].addEventListener('click',function(){
//     color = btn[i].value
//     // colorにbtnのvalue値、つまり色名を代入。

//       changeBg()
//       // btnのi番目がクリックされたら、関数changeBgに飛べ！ってこと。
//   })
// }

// /*
// functionが関数のこと
// function 関数名(引数名){
//   動かしたい内容
// }

// つまり↓のfunctionは
// 関数名: changeBg
// 引数: 空
// と読むことができる。
// */

// function changeBg(){
//   document.body.style.backgroundColor = color
//   // 結構前の方で宣言したcolorの中身を参照して入れる。
// }

// // このコードの問題点
// /* 今回の肝である関数を用いているものの、引数を用いていない。

// 先程のコードと同じく、inputタグを用いてボタンを作っていると仮定した場合、value値が都合よく「tomato」で
// あるとは限らない。
// 例) <input type="button" value="トマト色に変更！" class="btn">
// といった場合に、value値を取得しただけでは背景色が変えられない場合がある。
// */



// // ----------関数と引数を利用して、クラス名で要素を取得する場合
// const btn = document.getElementsByClassName('btn')
// // getElementsByClassName ではなく querySelectorAllでもOK

// for(let i = 0; i < btn.length; i++){
//   btn[i].addEventListener('click',function(){

//       changeBg(btn[i].value)
//       // btnのi番目がクリックされたら、関数changeBgに飛べ！
//       // そのついでに引数にbtnのvalue値を代入していけ！ってこと。
//   })
// }

// function changeBg(value){
//   document.body.style.backgroundColor = value
//   // functionが呼び出される際に引数にbtnのvalue値、つまり色名が代入されている！
//   // このようにして引数は使う。ちなみに引数はコンマで区切って複数個持つことができる。
//   // 初期値を指定しておくこともできる。
// }

// このコードの問題点
/* 関数も引数も利用できているのでJsのコード的には特に大きな問題はない。

問題は「関数を利用せず、クラス名で要素を取得する場合」のところにもう書いているが、
inputタグを用いてボタンを作っていると仮定した場合、value値が都合よく「tomato」で
あるとは限らない。
例) <input type="button" value="トマト色に変更！" class="btn">
といった場合に、value値を取得しただけでは背景色が変えられない場合がある。
これを解決するための選択肢がいくつかあるがここでは代表的で使いやすい2つの解決策紹介する。
なお、全てHTMLファイル側で操作するので注意。↓↓

1. ボタンに色名を冠したクラス名をつける。
例) <input type="button" value="トマト色に変更！" class="btn tomato">
ボタンタグの場合 <button class="btn tomato">トマト色に変更！</button>

この場合、Js側では、classNameを使ってクラス名を取得する。
※※注意点
CSSでスタイルを適用する際は、色コードを冠したクラスに対してつけるのではなく、
もう１つ統一されたclass名(ここではbtn)などをつけてスタイルをつける方がおすすめ。
ボタンが増えるたびに色名を冠したクラス名に対して同じスタイルを適用し続けるのはスマートではない。

2. HTMLで使用できる  data-属性  を使用してその値をJsで取得する。
data属性はすべてのHTMLタグに付与できる属性で、後ろに好きな文字列を付与できる。
例) data-color / data-text など
その値に色名をつけてあげればそれをJsで取得すれば良いよね。
例) <input type="button" value="tomatoに変更！" class="btn" data-color="tomato">
ボタンタグの場合 <button class="btn" data-color="tomato">トマト色に変更！</button>

これらの代替案のうち2を採用した解答を以下に記述する。
*/

// <input type="button" id="btn1" value="tomato" class="btn" data-color="tomato">
// <input type="button" id="btn2" value="skyblue" class="btn" data-color="skyblue">
// <input type="button" id="btn3" value="lightgreen" class="btn" data-color="lightgreen">

const btn = document.getElementsByClassName('btn')
// getElementsByClassName ではなく querySelectorAllでもOK

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click',function(){

      changeBg(btn[i].dataset.color)
      // btnのi番目がクリックされたら、関数changeBgに飛べ！
      // そのついでに引数にbtnのdata属性のうちcolorの値を代入しろ！ってこと。
  })
}

function changeBg(value){
  document.body.style.backgroundColor = value
  // functionが呼び出される際に引数にbtnのdata-color値、つまり色名が代入されている！
  // このようにして引数は使う。ちなみに引数はコンマで区切って複数個持つことができる。
  // 初期値を指定しておくこともできる。
}

// これが11/22のJs放課後自習学習の内容だ！