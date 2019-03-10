/* Funksjon for å opprette knapper.
   Tar tre argumenter. game = spillobjekt, player = spiller-objekt og
   id = id, til element i html hvor knappene skal lages.*/
function makeButtons(game, player, id) {
  var buttonlist = []
  for (let i = 0; i < game.maxGrab; i++) {
      var btn = document.createElement("button");
      btn.appendChild(document.createTextNode("Button " + (i + 1)))
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
    console.log("det er", g.p2.name, "sin tur");
  }
  if (g.turn % 2 == false && g.total > 0) {
    console.log("det er", g.p1.name,"sin tur");
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
function seier(vinner){
  this.vinner = vinner;
  console.log(this.vinner.name, "er vinneren!");
}


/*Konstruktør for Person objekt.*/
function Person(name, human, game){
  this.name = name;
  this.human = human;

  this.grab = function grab(n){
    if (n <= game.total) {
      game.total -= n;
      game.turn += 1;
      console.log(game.total);
    }

    if (game.total == 0) {
      var vinner = checkWinner(game)
      game.victory(vinner)
    }
  }
}


function createGame() {
    var spill = new Nim("Stian","Robert",seier, 10, 4)
    makeButtons(spill, "p1","Spiller1")

    if (spill.p2.human == true) {
    makeButtons(spill, "p2","Spiller2")
    }

    checkTurn(spill)
}
