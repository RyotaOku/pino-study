let img = document.getElementsByClassName("image")

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (e) {
    let src = img[i].src
    let aa = src.replace('_s', '_l')

    let newElement = document.createElement("div"); // div要素作成
    newElement.setAttribute("class", "over"); // div要素にclassを設定
    let parent = document.querySelector('main');
    parent.insertBefore(newElement, null);

    let newPicture = document.createElement("picture"); // picture要素作成
    newPicture.setAttribute("class", "overPic"); // picture要素にclassを設定
    let parentDiv = document.querySelector('main')
    parentDiv.insertBefore(newPicture, null);

    let newImg = document.createElement("img"); // picture要素作成
    newImg.setAttribute("src", aa); // picture要素にclassを設定
    let parentPic = document.querySelector('.overPic')
    parentPic.insertBefore(newImg, null);

    document.querySelector('.over').addEventListener('click', function () {
      const over = document.querySelector('.over')
      const overPic = document.querySelector('.overPic')
      over.classList.add("hidden")
      overPic.classList.add("hidden")
      setTimeout(() => {
        over.remove()
        overPic.remove()
      }, 300)
    })
  })
}