/* Funksjon for å opprette knapper.
   Tar tre argumenter. game = spillobjekt, player = spiller-objekt og
   id = id, til element i html hvor knappene skal lages.*/
function makeButtons(game, player, id) {
  var buttonlist = []
  for (let i = 0; i < game.maxGrab; i++) {
      var btn = document.createElement("button");
      btn.appendChild(document.createTextNode((i + 1)))
      buttonlist.push(btn);
      document.getElementById(id).appendChild(btn)
  }
  for (let j = 0; j < buttonlist.length; j++) {
    buttonlist[j].onclick = function(){game[player].grab(j+1)};
    buttonlist[j].addEventListener("click", function(){checkTurn(game, buttonlist)});
  }

  return buttonlist

}


/*Funksjon for å sjekke hvem sin tur det er*/
function checkTurn(g, l){
  var sw = false;
  console.log(l);
  if (g.turn % 2  && g.total > 0) {
    console.log("reee");
  }
  if (g.turn % 2 == false && g.total > 0) {
  console.log("reee2");
}}

/*
if (sw == true) {
  for (var i = 0; i < l.length; i++) {
    l[i].disabled = true;

    for (var i = 0; i < l.length; i++) {
      l[i].disabled = true;
  }


*/

/*funksjon som sjekker hvem som har vunnet. Tar ett argrument: g = spillobjekt.
  om det er en vinner returnerer funksjonen spillerobjektet til vinneren*/
function checkWinner(g){
  if (g.total === 0 && g.turn % 2) {
    return g.p1
  }
  if (g.total === 0 && g.turn % 2 == false) {
    return g.p2
  }
}

/*Funksjon som kårer vinneren, tar inn et argument: vinner = spillerobjektet som har vunnet.
  Dette objektet kommer fra funksjonen checkWinner.
  seier() funskjonen logger ut navnet til vinneren*/
function seier(vinner, game){
  makeComment(kommentator(game, vinner, 1))
}

function kommentator(g, p, n){
  // NOTE: n = 0-3
  if (n === 0) {
    var spiller_tur = "det er " + g[p].name + " sin tur";
    return spiller_tur
  }

  if (n === 1) {
    var vinner = p.name + " er vinneren!"
    return vinner
  }

  if (n === 2) {
    var spiller_grab = p.name + " tar " + p.last_grab + " klinkekuler"
    return spiller_grab
  }

}


/*Konstruktør for Person objekt.*/
function Person(name, human, game){
  this.name = name;
  this.human = human;

  this.grab = function grab(n){
    if (n <= game.total) {
      game.total -= n;
      game.turn += 1;
      this.last_grab = n
      updateCounter(game)
      makeComment(kommentator(game, this, 2))
    }

    if (game.total == 0) {
      var vinner = checkWinner(game)
      game.victory(vinner)
      game.total = undefined
    }
    return
  }
}

function getInfo(id){
  var element = document.getElementById(id).value

  if (element == "") {
    element = undefined
  }
  return element
}

function getElements() {
  var elementliste = ["p1","p2","Ak","Mg"];
  var verdier =[]

  for (var i = 0; i < elementliste.length; i++) {
    verdier.push(getInfo(elementliste[i]))
  }
  return verdier
}

function makeCounter(game){
  var klinkekuler = document.getElementById("teller");
  klinkekuler.innerHTML = game.total;
}

function makeComment(comment){
  var list = document.getElementsByClassName("logg")[0];
  var logg = document.createElement("p");
  logg.appendChild(document.createTextNode((comment)))
  document.getElementsByClassName("logg")[0].appendChild(logg)

  if (list.childNodes.length == 7) {
    list.removeChild(list.childNodes[2])
  }
}

function namePlayers(game, player, id){
  var navn = document.getElementById(id);
  navn.innerHTML = game[player].name;
}

function updateCounter(game){
  makeCounter(game)
}



function background() {
  var logg = document.getElementsByClassName("logg")[0];
  logg.style.width = "250px";
  logg.style.visibility = "visible";
}


function createGame() {
    var a = getElements()
    var spill = new Nim(a[0],a[1],seier,a[2],a[3])
    var spiller_1_btn = makeButtons(spill, "p1","Spiller1");
    makeCounter(spill);
    namePlayers(spill, "p1", "spiller1_navn");
    background();
    if (spill.p2.human == true) {
    var spiller_2_btn = makeButtons(spill, "p2","Spiller2")
    namePlayers(spill, "p2", "spiller2_navn")
    }

}
