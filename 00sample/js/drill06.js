/*
drill06 - スクロール処理
3つのトピックからなるページがある
それぞれ、スクロールし該当箇所まで来ると
該当のトピック箇所（文字部分と画像部分）が連動して
アニメーションしながら表示されるように作成すること。
尚、アニメーションは任意のもので構わない。
*/


window.addEventListener("load", () => {
  // windowがロードされたら動くようにセット

  // console.log("ロードされたぞ");

  const boxes = document.querySelectorAll(".msgWrap");
  // .msgWrapをすべて取得
  // console.log(boxes);

  window.addEventListener("scroll", showBoxes);
  // scrollイベントをセット、スクロールされれば発火！

  showBoxes();
  // ロードのタイミングで一度発火！

  function showBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    // 発火位置をセット

    boxes.forEach((box) => {
      // box(=.msgWrap)の頭部分の座標を取得
      const boxTop = box.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら.showを付け、そうでなければ.showを外す。
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});