var handleliste = {
  melk: {"lett": 1},
  makrell: {"i tomat": 1, "lettrøkt":1},
  majones: {"lett": 2}
}


function makeString(obj) {
  return JSON.stringify(obj, undefined, 2)
}

function toHTML(){
  var location = document.getElementById("tekstboks")
  location.innerHTML = makeString(handleliste);
}

function hentText() {
  var tekst = document.getElementById("tekstboks").value
  var temp = JSON.parse(tekst);
  handleliste = temp;
}

var tekst = "Hei, Dette Er en liten tekst"
var regex = /[A-Z]/g
var results = tekst.match(regex)
console.log(results);
