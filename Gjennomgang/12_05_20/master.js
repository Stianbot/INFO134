
function giveOnClick() {
  var p = document.getElementsByTagName("BUTTON")
  p[1].onclick = function() {console.log(2);}
}

function giveEventListener() {
  var p = document.getElementsByTagName("BUTTON")
  p[2].addEventListener("click",function() {console.log(3);})
}

function program() {
  giveOnClick()
  giveEventListener()
  console.log("window er lastet")
}

window.onload = program
window.addEventListener = function() {console.log("window 2");}

function giveFunction() {
  var p = document.getElementById("5")
  p.onclick = function() {console.log(5);}
}
