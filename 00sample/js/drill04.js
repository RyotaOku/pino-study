/*
drill04 - 消費税の出力
#priceに金額を入力し、消費税込みの値段を#resultに出力すること
以下の条件の場合は、該当する出力を表示すること。

[出力時の表示] ※1000と入力した場合
1000円の税込み価格は1100円です。

[出力時の表示] ※文字を入力した場合
数値を入力してください -> errクラスを追加し赤字表示にする

[出力時の表示] ※マイナスの値を入力した場合
有効な数値を入力してください -> errクラスを追加し赤字表示にする

複数回テストを行い、エラーでない場合は文字が黒色になるように設定すること。

*/

let nedanform = document.getElementById("price")
let btn = document.querySelector(".calcWrap input:last-child")

let result = document.getElementById("result")

let taxRate = 0.1

btn.addEventListener("click", function () {
  let nedan = nedanform.value


  if (nedan.includes("-")) {
    result.classList.add("err")
    result.innerText = "有効な数値を入力してください";
  } else if (!isNaN(nedan)) {
    result.classList.remove("err")
    let tax = nedan * taxRate
    tax = Math.floor(tax * 10) / 10;
    let taxPlus = nedan * (taxRate + 1)
    taxPlus = Math.floor(taxPlus * 10) / 10;
    result.innerText = `${nedan}円の税込価格は${taxPlus}円です。`
  } else {
    result.classList.add("err")
    result.innerText = "数値を入力してください";
    // console.log("文字列ちゃう");

  }

  // if (nedan.indexOf("-")) {
  //   result.classList.add("err")
  //   result.innerText = "有効な数値を入力してください";
  // } else if (isNaN(nedan)) {
  //   result.classList.remove("err")
  //   let tax = nedan * taxRate
  //   tax = Math.floor(tax * 10) / 10;
  //   let taxPlus = nedan * (taxRate + 1)
  //   taxPlus = Math.floor(taxPlus * 10) / 10;
  //   result.innerText = `${nedan}円の税込価格は${taxPlus}円です。`
  // } else {
  //   result.classList.add("err")
  //   result.innerText = "数値を入力してください";
  //   // console.log("文字列ちゃう");

  // }
})