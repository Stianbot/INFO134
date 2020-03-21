function makeUrl(num1, num2) {
    var URL = "https://nelson.uib.no/info134demo/addition/";
    return URL + num1 + "/" + num2 + "/";
}

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function calculate() {
    // koder forespørselen
    var url = makeUrl(getValue("x1"), getValue("x2"));
    
    // klargjør forespørsel
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", url);

    xhr1.onreadystatechange = function() {
	if (xhr1.readyState === 4 && xhr1.status === 200) {
	    var response = JSON.parse(xhr1.responseText);
	    var solution = response[response["equation"]];

	    // koder andre forespørsel
	    var url = makeUrl(solution, getValue("x3"));

	    // klargjør andre forespørsel
	    var xhr2 = new XMLHttpRequest();
	    xhr2.open("GET", url);

	    xhr2.onreadystatechange = function() {
		if (xhr2.readyState === 4 && xhr2.status === 200) {
		    var response = JSON.parse(xhr2.responseText);
		    console.log("(X1 + X2) + X3", response);

		    // presenter endelig resultat til brukeren
		    var sumElt = document.getElementById("sum");
		    sumElt.innerHTML = response[response["equation"]];
		}
	    };
	    // send andre forespørsel
	    xhr2.send();
	}
    };

    // send første forespørsel
    xhr1.send();
}
