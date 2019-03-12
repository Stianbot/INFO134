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
    buttonlist[j].addEventListener("click", function(){checkTurn(game)});
  }
}


/*Funksjon for å sjekke hvem sin tur det er*/
function checkTurn(g){
  if (g.turn % 2  && g.total > 0) {
    console.log(kommentator(g,"p2", 0));
  }
  if (g.turn % 2 == false && g.total > 0) {
    console.log(kommentator(g,"p1", 0));
  }
}

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
function seier(vinner, g){
  this.vinner = vinner;
  console.log(vinner.name, "vinner!");
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
      console.log(kommentator(game, this, 2));
    }

    if (game.total == 0) {
      var vinner = checkWinner(game)
      game.victory(vinner)
    }
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

function namePlayers(game, player, id){
  var navn = document.getElementById(id);
  navn.innerHTML = game[player].name;
}

function updateCounter(game){
  makeCounter(game)
}

function kommentator(g, p, n){
  console.log(g, p, n);
  // NOTE: n = 0-3
  if (n === 0) {
    var spiller_tur = "det er " + g[p].name + " sin tur";
    return spiller_tur
  }

  if (n === 1) {
    var vinner = "" + g[p].name + " er vinneren!"
    return vinner
  }

  if (n === 2) {
    var spiller_grab = p.name + " tar " + p.last_grab + " klinkekuler"
    return spiller_grab
  }

}


function createGame() {
    var a = getElements()
    var spill = new Nim(a[0],a[1],seier,a[2],a[3])
    makeButtons(spill, "p1","Spiller1");
    makeCounter(spill)
    namePlayers(spill, "p1", "spiller1_navn")
    if (spill.p2.human == true) {
    makeButtons(spill, "p2","Spiller2")
    namePlayers(spill, "p2", "spiller2_navn")
    }
    checkTurn(spill)

}
