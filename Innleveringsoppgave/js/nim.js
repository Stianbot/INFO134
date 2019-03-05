function Nim(player1, player2, /*victory,*/ total, maxGrab) {
    var turn = 0;
    //this.victory = victory;
    this.total = total;
    this.maxGrab = maxGrab;

    if (player1 == undefined) {
        this.p1 = {
            name: "Robot 1",
            human: false,
        }

    }

    if (player1 != undefined) {
      this.p1 = new Person(player1, true)
    }



    if (turn % 2) {
      // NOTE: Disable player 1 sine knapper
    }

    if (player2 == undefined) {
        this.p2 = new Person("Robot 2", false)
    }

    if (player2 != undefined) {
        this.p2 = new Person(player2, true)
    }

    if (!this.maxGrab) {
        this.maxGrab = 3;
    }

    if (!this.victory) {
        this.victory = function() {
            console.log("Du vant");
        }
    }

    function Person(name, human, grab){
      this.name = name;
      this.human = human;
      this.grab = function grab(n){
        if(n === undefined){return}
        total -= n; turn += 1;
        console.log(total, turn);
      }
    }
}
