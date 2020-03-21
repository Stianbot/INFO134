function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype = {
    name: function() {
		return this.first + " " + this.last;
    }
};
