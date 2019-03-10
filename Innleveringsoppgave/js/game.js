
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
  }
}





function createGame() {
    var p = new Nim("Stian","Robert", 50, 4)
    makeButtons(p, "p1","Spiller1")
    makeButtons(p, "p2","Spiller2")
    console.log(p);
}
