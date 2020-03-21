//var timerID = null; // unødvendig, men litt mer ryddig

// 2.a)
function startProgram() {
    timerID = setTimeout(function(){
	console.log("Hei!");
}, 2000);
}

function minFunksjon() {
return "Hei"
}

// 2.b)
setTimeout(function() {
    clearTimeout(timerID);
    console.log("Timeout cleared!");
}, 2000); // Jeg rekker ikke clear hvis jeg venter "2050" millisekunder



setTimeout(function(){clearTimeout(timerID);console.log("Slettet timeout")},2000)
