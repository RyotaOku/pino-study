// sendを押すたびにクラス名が「追加⇔削除」されるボタン。
// document.getElementById('send').addEventListener('click', () => {
// document.querySelector('.text').classList.toggle('anime');
// });

document.getElementById("msg")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      send()
      document.getElementById("msg").value = null
    }
  });
document.getElementById("send").addEventListener("click", function (evt) {
  send()
  document.getElementById("msg").value = null

})

function send() {
  let text = document.getElementById("msg").value
  let width = document.documentElement.clientWidth - 200;
  let height = document.documentElement.clientHeight - 200;
  let rWidth = Math.random() * (width - 10) + 10;
  let rHeight = Math.random() * (height - 20) + 20;
  let style = `left: ${rWidth}px; top: ${rHeight}px;`

  var newElement = document.createElement("div"); // div要素作成
  var newContent = document.createTextNode(text); // テキストノードを作成
  newElement.appendChild(newContent); // div要素にテキストノードを追加
  newElement.setAttribute("class", "text"); // div要素にclassを設定
  newElement.setAttribute("style", style); // div要素にclassを設定

  // ----------------------------
  // 親要素の最初の子要素を追加
  // ----------------------------
  // 親要素（div）への参照を取得
  var parentDiv = document.getElementById("chat");
  // 追加
  parentDiv.insertBefore(newElement, null);

  // document.getElementById("chat").innerHTML += `<div class="text" style="left: ${rWidth}px; top: ${rHeight}px;">${text}</div>`
}

document.getElementById("clear").addEventListener("click", (e) => {
  let text = document.getElementsByClassName("text")
  Array.prototype.forEach.call(text, function (element) {
    element.classList.add("anime");
    setTimeout(() => {
      document.getElementById("chat").innerHTML = ``
    }, 300)
  });
})