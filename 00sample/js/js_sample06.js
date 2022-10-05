/* let numArray =[20,40,60,80];
console.log(numArray);
numArray.pop();
numArray.push(100);
console.log(numArray);
numArray.splice(0,2);
console.log(numArray);

// ランダムな数字を作る

*/

let rcm = [];

/* let ran = Math.floor(Math.random()*21);
rcm.push(ran)
console.log(rcm)

let rana = Math.floor(Math.random()*21);
rcm.push(rana)
console.log(rcm)


let ranb = Math.floor(Math.random()*21);
rcm.push(ranb)
console.log(rcm) */

// 0~20までのランダムな数字を生成。（Floorは整数のこと）

let member = [
    "中井 侑吾",
    "森田 翔太郎",
    "福村 晃弘",
    "池田 博人",
    "薄井 岳志",
    "ジェイソン",
    "神崎 未希",
    "須崎 魁人",
    "細田 海斗",
    "大澤 心春",
    "奥 綾太",
    "薛 思穏",
    "大垣 陸斗",
    "ダレン",
    "山野 錬磨",
    "阪本 陸",
    "山地 咲愛",
    "和田 卓斗",
    "基 恵都",
    "本村 永遠",
    "中木屋 十夢"
];

    for(i=0; i<3; i++){
        console.log("今日の運が良い人",i+1);
        let ran = Math.floor(Math.random()*21);
        rcm.push(ran);
        console.log(member [rcm]);
    }