function freeze (tryToFreeze){
	tryToFreeze = tryToFreeze || 4000; // standard 4 sekunder
	var work = 30;
	
	//en funksjon som tar tid å beregne
	//funksjonen regner ut det n-te tallet i Fibinacci-sekvensen
	
	function workAlittle(n){
		if(n < 2){
			return 1;
		}
		return workAlittle(n-1) + workAlittle(n-2);
	}
	
	//forsøk å utfør (meningsløs) arbeid i 'tryToFreeze' antall millisekunder
	
	var start = performance.now()
	var timeSpent = 0;
	while(timeSpent < tryToFreeze){
		workAlittle(work);
		timeSpent = (performance.now() - start)
	}
	alert("Total time spent: " + timeSpent)
}

setTimeout(function(){alert("Hei")},4000)
freeze();