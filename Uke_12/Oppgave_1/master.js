var handleliste = {
  melk: {"lett":1},
  makrell: {"tomat":1,"lettrøkt":1},
  masjones: {"lett":2}
};

//funksjon som henter en button baset på "id" og gir den en onlick som er lik den funksjonen en putter inn som argument "func"
function getButton(id, func) {
  var btn = document.getElementById(id);
  btn.onclick = func
}

//funksjon som gjør handleliste om til JSON format
function serialiser(){
  var data = JSON.stringify(handleliste, undefined, 2);
  console.log("serialisert", data);
  return data
}

//funksjon som etter tekst inn i tekst-feltet på html siden.
function getTextField(arg){
  document.getElementById("text").innerHTML = arg
}

//funksjon som gjør om tekst i tekst-feltet på html-siden til JSON-format
function getTextFieldValue(){
  let data = document.getElementById("text").value;
  handleliste = JSON.parse(data);
  console.log(handleliste);
}

function load() {
  getTextFieldValue()
}

function lagre(){
  getTextField(serialiser())
}

function program(){
  getButton("logge", function(){console.log(handleliste)})
}
