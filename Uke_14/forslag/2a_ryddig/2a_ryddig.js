function makeUrl(num1, num2) {
    var URL = "https://nelson.uib.no/info134demo/addition/";
    return URL + num1 + "/" + num2 + "/";
}

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function add(x, y, callback) {
    // koder forespørsel
    var url = makeUrl(x, y);
    
    // klargjør forespørsel
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function() {
	if(xhr.readyState === 4 && xhr.status === 200) {
	    var response = JSON.parse(xhr.responseText);
	    var equation = response["equation"];
	    var solution = response[equation];
	    callback(solution);
	}
    };

    // send forespørselen
    xhr.send();
}

function calculate() {
    add(getValue("x1"), getValue("x2"), function(sum1) {
	add(sum1, getValue("x3"), function(sum2) {
	    var sumElt = document.getElementById("sum");
	    sum.innerHTML = sum2;	    
	});	
    });
}
