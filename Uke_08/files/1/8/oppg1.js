function example(){
    i = 0;
    while(i < 3) {
	(function(i){
	    function f() {
		return i;
	    }
	    window["f" + i] = f;
	})(i);
	i++;
    }
    var i = 0;
}

example();
