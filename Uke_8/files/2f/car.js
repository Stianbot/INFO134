function Car(letters, numbers) {
    this.letters = letters;
    this.numbers = numbers;
}

Car.prototype = {
	reg: function() {
		return this.letters + this.numbers;
    }
};
