function constructCar(letters, numbers) {
    var newObject = Object.create(methods);
    newObject.letters = letters;
    newObject.numbers = numbers;
    return newObject;
}

var methods = {
	reg: function() {
		return this.letters + this.numbers;
    }
};
