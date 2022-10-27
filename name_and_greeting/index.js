// document.getElementById('btn').onclick = function () {
  
//   var currentTime = new Date().getHours();

//   if (11 <= currentTime && currentTime <= 16) {
//     console.log('こんにちは');
//     var greeting = "こんにちは"
//   } else if (17 <= currentTime || currentTime <= 3) {
//     console.log('こんばんは');
//     var greeting = "こんばんは"
//   } else {
//     var greeting = "おはようございます"
//     console.log('おはようございます');
//   }
  
//   let name = document.getElementById('name').value;
// document.getElementById("first").innerHTML = "<span id='first'>"+greeting+"</span>" + "<span id='second'>"+ name +"さん"+"</span>";
// }

document.getElementById('btn').onclick = function () {
  
  var currentTime = new Date().getHours();

  if (11 <= currentTime && currentTime <= 16) {
    console.log('こんにちは');
    var greeting = "こんにちは"
  } else if (17 <= currentTime || currentTime <= 3) {
    console.log('こんばんは');
    var greeting = "こんばんは"
  } else {
    var greeting = "おはようございます"
    console.log('おはようございます');
  }
  
  let name = document.getElementById('name').value;
	document.getElementById("text").textContent = `${greeting}、${name}さん`
}