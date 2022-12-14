const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
let btn = document.getElementsByClassName('btn')

console.log(btn[0].dataset.color);
for (let i = 0; i < btn.length; i++) {
  // btn[i].addEventListener('click',function(){
  //   changeBg(btn[i].value)
  //   // document.body.style.backgroundColor = btn[i].value
  // })
  btn[i].addEventListener('click', function (evt) {
    changeBg(evt.target.value)
  })
}

// let color = ''

/*
btn1.addEventListener('click',function(){
  // console.log('共産主義');
  // document.body.style.backgroundColor = "red"
  // color = 'red'
  changeBg('red')
  // functionの引数valueにredが代入される
})

btn2.addEventListener('click',function(){
  // console.clear()
  // document.body.style.backgroundColor = "skyblue"
  // color = 'skyblue'
  changeBg('skyblue')
})

function → 関数 {使う・作る の2ケースに分かれる}
関数 → 実行したいまとまり
関数を作る時 function 関数名(引数){実行したい内容} てな感じ
function() って感じで関数名も引数もないものは匿名関数といいます
*/

function changeBg(value) {
  // console.log('unti');
  console.log(value);
  document.body.style.backgroundColor = value
}