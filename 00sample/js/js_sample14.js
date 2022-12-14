// 複数の引数を持つ

function test(num,txt){
  console.log(num,txt);
}

test(50,'test')


// 引数に初期値を決める
// 引数に = つけて完成❗
function test2(num=200){
  console.log(num);
}

test2(100)

const total = 1000

function testTax(num) {
  // if ("数字じゃないものがきたら"){
  //   return;
  //   // return 'error'
  //   // エラーが出るようにもできる。
  //   // return false

  //   // 処理は走らない
  // }
  return num * 0.1;
  // returnで戻ってきた後、returnの下に記述したものは処理されない
  // 呼び戻す return
}

const tax = testTax(total)

console.log(`${total}の税金は${tax}`);