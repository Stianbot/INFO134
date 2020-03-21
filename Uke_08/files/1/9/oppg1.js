function example(){
    i = 0;
    while(i < 3) {
	(function(i){
	    var f0 = function() {
		return i;
	    };
	    window["f" + i] = f0;
	})(i);
	i++;
    }
    var i = 0;
}

example();
