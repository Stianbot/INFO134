function Nim(player1, player2, victory, total, maxGrab) {

    this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab;

    if (player1 == undefined) {
        this.p1 = {
            name: "Robot 1",
            human: false
        }
    }

    if (player1 != undefined) {
        this.p1 = {
            name: player1,
            human: true
        }
    }

    if (player2 == undefined) {
        this.p2 = {
            name: "Robot 2",
            human: false
        }
    }

    if (player2 != undefined) {
        this.p2 = {
            name: player2,
            human: true
        }
    }

    if (!this.maxGrab) {
        this.maxGrab = 3;
    }

    if (!this.victory) {
        this.victory = function() {
            console.log("Du vant");
        }
    }




    function grab(antall) {
        this.antall = antall;
        if (!this.antall) {
            this.antall = 0;
        }
        console.log(this.antall);
    }


}






/*o1 = {
  message: "Dette er en melding",
  greet: function(){
    console.log(o1.message); //this.message);
  },
  btn: "",
  get button(){
    if (this.btn){
      return this.btn;
    }
     this.btn = document.createElement("button");
     this.btn.appendChild(document.createTextNode("Button"))
     document.body.appendChild(this.btn)
     this.btn.onclick = o1.greet;
     return this.btn
  }

}



var knapp2 = document.getElementById("knapp2");
knapp2.onclick = o1.greet;
*/
