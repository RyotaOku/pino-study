/*
誰が(要素・タグ)　　なにを(要素の持つプロパティ)　　する(実行・変更)
p要素のid名txtの文字情報を持つプロパティに「テキスト」を追加したい。
<p id="txt"></p>
document.getElementById("txt")
*/

// console.dir(document.getElementById("txt"))
// dirで要素の持つプロパティをすべて参照できる。

// console.log(document.getElementById("txt").innerText);

// document.getElementById("txt").innerText = "後から入れた文字"
// pタグの中身が変わる。

// querySelectorはCSSライクで要素を見つける。のでgetElementByIdのほうが処理速度は早い。
// querySelectorは探す順序は下から。かつクラス名なら１つしか抜き出せない。すべて抜き出したいなら
// querySelectorAllが必要。
// query → 「要求」
// ドメイン名も、欠から探す。~~~~.jpだと、jpから探し出す。

document.getElementById("btn").addEventListener("click", () => {
  const age1 = document.getElementById("meta").value;
  const age = parseInt(age1);
  var check = 0
  if (document.getElementById("meta").value.match(/[^0-9]+/)) {
    check = 1
  } else {
  }
  if (check) {
    window.alert("死にてえのか？年齢を入れんかいボケ")
  }
  if (document.getElementById("meta").value == 0) {
    window.alert("死にてえのか？せめて何かいれんかいボケ")
  } else if (5 < age && 13 > age) {
    document.getElementById("comment").innerText = "あなたは小学生ですね"
  } else if (13 <= age && 18 > age) {
    document.getElementById("comment").innerText = "あなたは中学生ですね"
  } else if (20 <= age && 100 > age) {
    document.getElementById("comment").innerText = "成人してますね"
  } else if (130 <= age) {
    document.getElementById("comment").innerText = "長生きしすぎですね"
  }  else if (100 <= age) {
    document.getElementById("comment").innerText = "長生きですね"
  }else {
    document.getElementById("comment").innerText = "赤ちゃんバブバブ"
  }
})