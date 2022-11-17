let set = document.getElementById("set")
set.addEventListener("click", function () {
  let num1 = document.getElementById("num1").value
num1 = parseFloat(num1)

  let elements = document.getElementsByName('calc');
  let len = elements.length;
  let checkValue = '';
  for (let i = 0; i < len; i++) {
    if (elements.item(i).checked) {
      checkValue = elements.item(i).value;
    }
  }

  let num2 = document.getElementById("num2").value
num2 = parseFloat(num2)
  let answer = 0;

  if (checkValue == "*") {
    answer = num1 * num2
  } else if (checkValue == "/") {
    answer = num1 / num2
  } else if (checkValue == "+") {
    answer = num1 + num2
  } else if (checkValue == "-") {
    answer = num1 - num2
  }
  document.getElementById("answer").value = answer
})

let monitor = document.getElementById("monitor")
let n1 = document.getElementById("1")
let n2 = document.getElementById("2")
let n3 = document.getElementById("3")
let n4 = document.getElementById("4")
let n5 = document.getElementById("5")
let n6 = document.getElementById("6")
let n7 = document.getElementById("7")
let n8 = document.getElementById("8")
let n9 = document.getElementById("9")
let n0 = document.getElementById("0")
let np = document.getElementById("+")
let nm = document.getElementById("-")
let nk = document.getElementById("*")
let nw = document.getElementById("/")
let ne = document.getElementById("=")

let numCalc = 0;


n1.addEventListener("click", function () {
  numCalc += "1"
  monitor.value += "1"
})
n2.addEventListener("click", function () {
  numCalc += "2"
  monitor.value += "2"
})
n3.addEventListener("click", function () {
  numCalc += "3"
  monitor.value += "3"
})
n4.addEventListener("click", function () {
  numCalc += "4"
  monitor.value += "4"
})
n5.addEventListener("click", function () {
  numCalc += "5"
  monitor.value += "5"
})
n6.addEventListener("click", function () {
  numCalc += "6"
  monitor.value += "6"
})
n7.addEventListener("click", function () {
  numCalc += "7"
  monitor.value += "7"
})
n8.addEventListener("click", function () {
  numCalc += "8"
  monitor.value += "8"
})
n9.addEventListener("click", function () {
  numCalc += "9"
  monitor.value += "9"
})
n0.addEventListener("click", function () {
  numCalc += "0"
  monitor.value += "0"
})
np.addEventListener("click", function () {
  monitor.value += "+"
  moni()
})
nk.addEventListener("click", function () {
  monitor.value += "×"
  moni()
})
nm.addEventListener("click", function () {
  monitor.value += "-"
  moni()
})
nw.addEventListener("click", function () {
  monitor.value += "÷"
  moni()
})
ne.addEventListener("click", function () {
  // console.log(numCalc);
  monitor.value = numCalc
  moni()
})






function moni() {
  parseFloat(numCalc)
  console.log(numCalc);
  console.log("moni");
}