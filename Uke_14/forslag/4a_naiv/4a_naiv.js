var URL = "http://158.39.77.143/addition"

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function calculate() {
    // klargjør første datasett, X1 + X2
    var data = {
	"first": getValue("x1"),
	"second": getValue("x2")
    };

    // serialiser data
    var payload = JSON.stringify(data);

    // klargjør forespørsel
    var xhr1 = new XMLHttpRequest();
    xhr1.open("POST", URL);
    xhr1.setRequestHeader("Content-Type", "application/json");

    xhr1.onreadystatechange = function() {
	if (xhr1.readyState === 4 && xhr1.status === 200) {
	    var response = JSON.parse(xhr1.responseText);
	    console.log("X1 + X2", response);
	    // klargjør andre datasett (X1 + X2) + X3
	    var data = {
		"first": response[response["equation"]], 
		"second": getValue("x3")
	    };
	    var payload = JSON.stringify(data);

	    // klargjør andre forespørsel
	    var xhr2 = new XMLHttpRequest();
	    xhr2.open("POST", URL);
	    xhr2.setRequestHeader("Content-Type", "application/json");

	    xhr2.onreadystatechange = function() {
		if (xhr2.readyState === 4 && xhr2.status === 200) {
		    var response = JSON.parse(xhr2.responseText);
		    console.log("(X1 + X2) + X3", response);

		    // klargjør siste (tredje) datasett ((X1 + X2) + X3) + X4
		    var data = {
			"first": response[response["equation"]],
			"second": getValue("x4")
		    };
		    var payload = JSON.stringify(data);

		    // klargjør siste (tredje) forespørsel
		    var xhr3 = new XMLHttpRequest();
		    xhr3.open("POST", URL);
		    xhr3.setRequestHeader("Content-Type", "application/json");

		    xhr3.onreadystatechange = function() {
			if (xhr3.readyState === 4 && xhr3.status === 200) {
			    var response = JSON.parse(xhr3.responseText);
			    console.log("((X1 + X2) + X3) + X4", response);

			    // presenter endelig resultat til brukeren
			    var sumElt = document.getElementById("sum");
			    sumElt.innerHTML = response[response["equation"]];
			}
		    }
		    // send siste (tredje) forespørsel
		    xhr3.send(payload);
		}
	    };
	    // send andre forespørsel
	    xhr2.send(payload);
	}
    };

    // send første forespørsel
    xhr1.send(payload);
}
