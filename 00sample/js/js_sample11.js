let img = document.getElementsByClassName("image")
let black = document.querySelector(".over")
let image = document.querySelector(".overPic img")
let overPic = document.querySelector(".overPic")



for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (e) {
    overPic.classList.remove("hidden")
    black.classList.remove("hidden")
    let src = img[i].src
    let aa = src.replace('_s', '_l')
    // console.log(src);
    image.src = aa
    black.style.display = "flex"
    overPic.style.display = "block"
  });
}

black.addEventListener("click", function (evt) {
  black.classList.add("hidden")
  overPic.classList.add("hidden")
  setTimeout(() => {
    black.style.display = `none`
    overPic.style.display = "none"
    image.src = ""
  }, 300)
})