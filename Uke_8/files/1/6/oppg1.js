function example(){
    i = 0;
    while(i < 3) {
	f0 = function() {
	    return i;
	}
	window["f" + i] = f0;
	i++;
    }
    var i = 0;
}

example();
