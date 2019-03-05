function makeF(i) {
    function f0() {
	return i;
    }
    return f0;
}

function example(){
    i = 0;
    while(i < 3) {
	window["f" + i] = makeF(i);
	i++;
    }
    var i = 0;
}

example();
