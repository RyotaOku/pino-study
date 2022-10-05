/* 奥綾太が書いたコード
for(let i=0; i<100; i++){
    
    // console.log(i+1);
    if((i+1)%3==0){
        // i+1の値を3で割って余りが0だった場合 → 3の倍数だよね
        console.log("Fizz");
        let san = "Fizz";
    }
    if((i+1)%5==0){
        // i+1の値を5で割って余りが0だった場合 → 5の倍数だよね
        console.log("Buzz");
        let go = "Buzz";
    }

    if((i+1)%(3*5)==0){
        // i+1の値を(3*5)の解で割って余りが0だった場合 → 15の倍数だよね
        console.log("確定演出");
        let god = "god";
    }
    else{
        console.log(i+1)
    }
} */

// ココからは解答です

/* let out;
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        out = "FizzBuzz";
    }

    else if (i % 3 === 0) {
        // console.log("3で割り切れた");
        //iが3の倍数のとき outにFizzを代入。
        out = "Fizz";
    }
    else if (i % 5 === 0){
        out = "Buzz";
    }
    else {
        // それ以外の数値
        out = i;
    }
    console.log(out);
} */

let out;
for (let i = 1; i <= 40; i++) {
    if (i % 3 == 0 || /3/.test(i)) {
        out = i+"!!";
    }
    else{
        out = i
    }
    console.log(out);
}