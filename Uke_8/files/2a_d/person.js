function constructPerson(first, last) {
    var newObject = Object.create(methods);
    newObject.first = first;
    newObject.last = last;
    return newObject;
}

var methods = {
    name: function() {
	return this.first + " " + this.last;
    }
};
