function example(){
    i = 0;
    while(i < 3) {
	var f = function() {
	    return i;
	}
	window["f" + i] = f;
	i++;
    }
    var i = 0;
}

example();
