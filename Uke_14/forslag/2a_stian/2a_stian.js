function makeUrl(num1, num2) {
    var URL = "https://nelson.uib.no/info134demo/addition/";
    return URL + num1 + "/" + num2 + "/";
}

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function makeRequest(x1, x2, x3) {
    var url = makeUrl(x1, x2);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    var response = JSON.parse(xhr.responseText);
	    var equation = response["equation"];
	    var solution = response[equation]; // summen
	    
	    // var solution = response[response["equation"]];
	    if (x3) {
		makeRequest(solution, x3); // dropper siste argument
	    } else {
		var sumElt = document.getElementById("sum");
		sum.innerHTML = solution;
	    }
	}
    };
    xhr.send();
}

function calculate() {
    makeRequest(getValue("x1"), getValue("x2"), getValue("x3"));
}
