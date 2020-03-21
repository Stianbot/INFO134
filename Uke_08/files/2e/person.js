function constructPerson(first, last) {
	var newObject = Object.create(constructPerson.prototype);
    newObject.first = first;
    newObject.last = last;
	return newObject;
}

constructPerson.prototype = {
    name: function() {
		return this.first + " " + this.last;
    }
};
