/*
drill06 - スクロール処理
3つのトピックからなるページがある
それぞれ、スクロールし該当箇所まで来ると
該当のトピック箇所（文字部分と画像部分）が連動して
アニメーションしながら表示されるように作成すること。
尚、アニメーションは任意のもので構わない。
*/


window.addEventListener("load", () => {
  // boxをすべて取得
  const boxes = document.querySelectorAll(".box");
  // scrollイベントをセット
  window.addEventListener("scroll", showBoxes);
  // ロードのタイミングで一度発火
  showBoxes();

  function showBoxes() {
    // 発火位置
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      // boxの頭部分の座標を取得
      const boxTop = box.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});