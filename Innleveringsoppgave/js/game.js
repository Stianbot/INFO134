
function makeButtons(x) {
  for (let i = 0; i < x.maxGrab; i++) {
      x.btn = document.createElement("button");
      x.btn.appendChild(document.createTextNode("Button " + (i + 1)))
      document.getElementById("Spiller1").appendChild(x.btn)
  }
}


function createGame() {
    var p = new Nim()
    makeButtons(p)
    console.log(p);
}
