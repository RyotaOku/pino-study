/*
drill07 - ECCカード
現在3000円分チャージされているECCカードがあり、これでお買い物をしたい。<br>
自動チャージ機能に対応しており、残高が1000円を切ると自動的に1000円チャージされる。<br>
下部フォームデータを使って実装をすること。
以下の内容は最低限機能を作ること
残高の更新
- 金額が空白の場合や入力データが正しくない場合エラーを表示
- 残高が1000円未満の場合は1000円分チャージすること

利用履歴
支払いをする度に使用した金額と差額分を表示すること
[表示例] 1200円支払った場合
Out:-1200 Charge:0 Remaining:1800
[表示例] 次に3000円支払った場合
Out:-3000 Charge:2000 Remaining:800

利用履歴のli要素は削除しておくこと
*/

const balanceForm = document.getElementById('cash');
const price = document.getElementById('bill');
const sendButton = document.getElementById('send');

const history = document.getElementById('history');

let balance = 3000;
const numnum = 1000

sendButton.addEventListener('click', function () {
  let priceValue = price.value;

  if (priceValue === "") {
    alert('中身が空です。正しい数値を入力してください。')
  } else if (priceValue.includes("-")) {
    alert('無効な数値です。正しい数値を入力してください。')
  } else if (!isNaN(priceValue)) {
    let priceNum = parseInt(priceValue);
    let balanceNum = balance - priceNum
    balance = balanceNum

    
    let list = document.createElement('li');
    // list.textContent = `Out:-${priceValue} Charge:${0} Remaining:${balanceNum}`
    
    if(balance == 3000){
      let priceNum = parseInt(priceValue);
      balanceNum = (priceNum - 3000) + 1000;
      console.log(balanceNum);
    } else if(balance < 2000){
      let priceNum = parseInt(priceValue);
      balanceNum = priceNum + 1000;
      // console.log(balanceNum);
    }

    // if(balanceNum < 1000){
    //   let priceNum = parseInt(priceValue);
    //   balanceNum = priceNum + 1000;
    //   console.log(balanceNum);
    // }
    //     for (let i = balanceNum; i < numnum; i + 1000) {
      //       tasi += 0
    //       // console.log(i);
    //       tasi += 1000
    //       console.log(tasi);
    //       console.log("---------------");
    //   i += 1000
    //   // console.log(i);
    //   // console.log("1000円未満");
    //   balanceForm.innerText = i
    //   balanceNum = i
    // }
    balanceForm.innerText = balanceNum
    list.textContent = `Out:-${priceValue} Charge:${priceNum + 1000} Remaining:${balanceNum}`
    history.appendChild(list)
  } else {
    alert('文字列は入力できません。正しい数値を入力してください。')
  }
  price.value = ""
})