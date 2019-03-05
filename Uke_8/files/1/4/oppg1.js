function example(){
    i = 0;
    while(i < 3) {
	f = function() {
	    return i;
	}
	window["f" + i] = f;
	i++;
    }
    i = 0;
}

example();
