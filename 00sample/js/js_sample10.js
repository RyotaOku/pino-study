let img = document.getElementsByClassName("image")
let black = document.getElementById("black")
let image = document.querySelector("#black picture img")


for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (e) {
    let src = img[i].src
    let aa = src.replace('_s.', '_l.')
    // console.log(src);
    image.src = aa
    black.style.display = "block"
    black.style.display = "flex"
    // let ss = src.split("_")
    // let aa = ss[3].split(".")
    // let ee = aa[0] ="l"
    // console.log(ss);
    // console.log(aa);
    // console.log(ee);
    // console.log(aa);
  });
}

black.addEventListener("click", function (evt) {
  black.style.display = "none"
  image.src = ""
})