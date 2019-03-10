function Nim(player1, player2, victory, total, maxGrab) {
    this.status = []
    this.turn = 0;
    this.total = total;
    this.maxGrab = maxGrab;
    this.victory = victory;

    if (player1 === undefined) {
      throw "Definer Spiller 1"
    }

    if (player1 != undefined) {
      this.p1 = new Person(player1, true, this)
    }

    if (player2 == undefined) {
        this.p2 = new Person("Robot 2", false, this)
    }

    if (player2 != undefined) {
        this.p2 = new Person(player2, true, this)
    }

    if (!this.maxGrab) {
        this.maxGrab = 3;
    }
}
