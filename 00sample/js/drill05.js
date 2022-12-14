/*
drill05 - 複数要素の設定
外部リンクと内部リンクが混在しているリンクがある。
外部リンクは、新しくwinodwを開き表示をしたい。
HTMLの情報は変更せず、JavaScriptで実現すること。
*/

const link = document.querySelectorAll('nav li a[href="http://"]')


for (let i = 0; i < link.length; i++) {
  link[i].onclick = function (e) {
    e.preventDefault();
    // window.open(e.target.href, '_blank', 'toolbar=0,location=0,menubar=0');
    window.open("", '_blank', 'toolbar=0,location=0,menubar=0');

  }
}

// window.open(event.target.href)