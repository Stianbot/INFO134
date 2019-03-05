
function makeButtons(x) {
  var buttonlist = []
  for (let i = 0; i < x.maxGrab; i++) {
      var btn = document.createElement("button");
      btn.appendChild(document.createTextNode("Button " + (i + 1)))
      buttonlist.push(btn);
      document.getElementById("Spiller1").appendChild(btn)
  }
  for (let j = 0; j < buttonlist.length; j++) {
    x = x;
    buttonlist[j].onclick = function(){x.p1.grab(j+1)};
  }
}





function createGame() {
    var p = new Nim("Stian","Robert", 50, 4)
    makeButtons(p)
    console.log(p);
}
