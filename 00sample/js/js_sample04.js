/*  let num = 20;
let numArray = new Array();
// Array アレイ → 「配列」という意味。
console.log(numArray);
numArray[0] = 20;
numArray[1] = 30;
numArray[2] = 50;
numArray[3] = 100;
numArray[4] = 2000;
console.log(numArray.length);
console.log(numArray);
let numArray2 = [40,10];
// numArray2[0] = 40;
// numArray2[1] = 10;
console.log(numArray2[0]);

// 繰り返す for文
// for(カウンタ変数; 条件; カウント;){
// 繰り返す内容
// }

for(let i=0; i<numArray.length; i++){
    // console.log("sovietunion",i)
    console.log(numArray[i]);
};

// 月〜金のお昼のメニューを配列で作る
// arrLaunch
// for文を使ってconsoleにメニュー表示

let arrLaunch = new Array();

arrLaunch[0] = "共産定食";
arrLaunch[1] = "ポテト共産味";
arrLaunch[2] = "奥綾太";
arrLaunch[3] = "焼肉定食";
arrLaunch[4] = "せつあおき";
console.log(arrLaunch.length)

const menu = document.querySelector("#menu");
console.log(menu);
for(let i=0; i<arrLaunch.length; i++){
    menu.innerHTML += `<li>${arrLaunch[i]}</li>`;
    // console.log(arrLaunch[i]);
    // menu.innerHTML += "<li>"+arrLaunch[i]+"</li>"
};

let numArray3 = [];

numArray3[0] = [];

const kuku = document.querySelector("#kuku")

for(let i=0; i<9; i++){
    numArray3[i]=[]
    console.log(`-------${i+1}のだん-------------`);
    kuku.innerHTML += `<tr>`;
    for(let j=0; j<9; j++){
        numArray3[i][j] = (j+1) * (i+1);
        console.log("numArray3[i][j]の値は",numArray3[i][j]);
    kuku<tr.innerHTML +=`<td>1</td>`;
    }
    kuku.innerHTML +=`</tr>`;
};

console.log(numArray3);  */

/* let testArray= [0,1,2,3];

for(let i=0; i<testArray.length; i++){
    console.log("testArray",testArray[i]);
} */

const tbl = document.querySelector("#tbl tbody")
console.log(tbl)

let multArray = [];

for (let i = 0; i < 9; i++) {
    console.log(i+1,"番目開始---------")
    // tbl.innerHTML += `<tr>`
    let ele = "<tr>";
    multArray[i] = i;
    for(let j=0; j<9; j++){
        // ele += "<td>";
        console.log(`${i+1}✕${j+1}は`,(i+1)*(j+1));
        // ele += (i+1)*(j+1);
        // ele += "</td>";
        ele += `<えtd>${(i+1)*(j+1)}</td>`;
    }
    ele += "</tr>";
    console.log(i+1,"番目終了---------");
    tbl.innerHTML += ele;
}

console.log(multArray);