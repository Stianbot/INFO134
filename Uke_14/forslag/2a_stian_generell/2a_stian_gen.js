function makeUrl(num1, num2) {
    var URL = "https://nelson.uib.no/info134demo/addition/";
    return URL + num1 + "/" + num2 + "/";
}

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function makeRequest(x1, x2, remaining) {
    var url = makeUrl(x1, x2);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    var response = JSON.parse(xhr.responseText);
	    var equation = response["equation"];
	    var solution = response[equation]; // summen
	    
	    // var solution = response[response["equation"]];
	    if (remaining.length > 0) {
		var x = remaining.pop(0);
		makeRequest(solution, x, remaining); // dropper siste argument
	    } else {
		var sumElt = document.getElementById("sum");
		sum.innerHTML = solution;
	    }
	}
    };
    xhr.send();
}


function calculate() {
    var tasks = [];

    // les inn alle tallene
    var inpElt = document.getElementById("numbers");
    var numsStrs = inpElt.value.split(",");
    for(var i in numsStrs) {
	tasks.push(Number(numsStrs[i]));
    }

    // ta ut de to første
    var x1 = tasks.pop(0);
    var x2 = tasks.pop(0);

    makeRequest(x1, x2, tasks);
}
