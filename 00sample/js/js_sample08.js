/* const box = document.getElementsByClassName('box')
document.querySelector('box')
console.log(box[0]);  // HTMLCollectionが出力される。[0]を入れると一番最初のクラス名が一致するものを取得できる。
*/



// const box = document.querySelectorAll('.box')
/* console.log(box[1]);  //NodeListが出力される。
// Nodeとは要素1つ1つのこと。
console.log(box[0]);
console.log(box[1]);
console.log(box[2]);
*/
/*
for (let i=0; i<box.length; i++){
  // console.log(box[i]);
  // console.dir(box[i])
  // dirにすると要素のプロパティすべてを見ることができる。
}

// 配列の数だけ繰り返し処理をする 「foreach」
// 配列.forEach((引数) => {繰り返したい内容})
box.forEach((ele,i) => {
  // ここに繰り返したい内容
  // クリックされた時本来なら以下の書き方になる
  // box[0].addEventListener('click',()=>{
  // console.log(ele,i)

  //  これで完了
  ele.addEventListener('mousedown',()=>{
    ele.style.backgroundColor = "skyblue";
    // ele.textContent = "共産主義"
    console.log("押した")
  })
});

box.forEach((ele2,i) => {
  ele2.addEventListener("mouseup",()=>{
    ele2.style.backgroundColor = "";
    // ele2.textContent = "BOX";
    console.log("離した")
  });
});

box.forEach((ele3,i) => {
  ele3.addEventListener("mouseout",()=>{
    // mouseleaveでも可能です。
    ele3.style.backgroundColor = "";
    console.log("離した")
  });
});
*/


// window.addEventListener("mousemove",(evt)=>{
//   // console.log(evt.clientX);
//   let flg = false
//   box.onmousedown =function(){
//     flg = true
//   }
//   if (flg == true) {
//     var cliX = evt.clientX
//     var cliY = evt.clientY
//     box.forEach((element,i) => {
//       // element.addEventListener("mousedown",()=>{
//     element.style.left = cliX -element.offsetWidth / 2 + "px"
//     element.style.top = cliY -element.offsetHeight / 2 + "px"
//     })
//   } else {
// console.log("e");
//   }
  // })
// })


const boxs = document.querySelectorAll(".box");

let rikuto;
let num = 10
let mouse = false

boxs.forEach((e,i) => {
  e.addEventListener("mousedown",(event) => {
    console.log(event);
      mouse = true;
      rikuto = event.target;
      num = num+=1
      e.style.zIndex = num
  });
  e.addEventListener("mouseup",() => {
      mouse = false;
  });
});


window.addEventListener('mousemove',(evt)=> {
    if(mouse){
        rikuto.style.left = evt.clientX-62.5 + "px";
        // つかんだら強制ど真ん中
        rikuto.style.top = evt.clientY-62.5 + "px";
    }
});