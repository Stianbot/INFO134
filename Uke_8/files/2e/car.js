function constructCar(letters, numbers) {
	var newObject = Object.create(constructCar.prototype);
    newObject.letters = letters;
    newObject.numbers = numbers;
	return newObject;
}

constructCar.prototype = {
	reg: function() {
		return this.letters + this.numbers;
    }
};
