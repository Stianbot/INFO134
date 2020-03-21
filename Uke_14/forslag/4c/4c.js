var URL = "http://158.39.77.143/addition"

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function add(x, y, callback) {
    // klargjør datasett ("bestilling")
    var data = {
	"first": x,
	"second": y
    };

    // serialiser data
    var payload = JSON.stringify(data);

    // klargjør forespørsel
    var xhr = new XMLHttpRequest();
    xhr.open("POST", URL);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
	if(xhr.readyState === 4 && xhr.status === 200) {
	    var response = JSON.parse(xhr.responseText);
	    var equation = response["equation"];
	    var solution = response[equation];
	    callback(solution);
	}
    };

    // send forespørselen
    xhr.send(payload);
}

// MERK: her lagrer vi første response. Det er enten x1+x2 eller x3+x4!
var firstResponse = null;

function initialCallback(sum) {
    if (firstResponse === null) {
	firstResponse = sum;
    } else {
	add(firstResponse, sum, lastCallback);
    }
}

function lastCallback(sum) {
    var sumElt = document.getElementById("sum");
    sumElt.innerHTML = sum;
}

function calculate() {
    add(getValue("x1"), getValue("x2"), initialCallback);
    add(getValue("x3"), getValue("x4"), initialCallback);
}
