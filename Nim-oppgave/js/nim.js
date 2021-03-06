function Nim(player1, player2, victory, total, maxGrab) {
    this.status = [];
    this.turn = 0;
    this.total = parseInt(total);
    this.maxGrab = parseInt(maxGrab);
    this.victory = victory;

    if (player1 === undefined) {
      throw "Definer Spiller 1"
    }

    this.p1 = new Person(player1, true, this);

    if (player2 === undefined) {
        this.p2 = new Person("Robot", false, this)
    }

    if (player2 !== undefined) {
        this.p2 = new Person(player2, true, this)
    }

    if (!this.maxGrab || maxGrab < 3) {
        this.maxGrab = 3;
    }

    if (maxGrab > 10){
        this.maxGrab = 10;
    }
    if (total === undefined) {
      this.total = 14;
    }
}
