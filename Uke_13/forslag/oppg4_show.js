function initDownload() {
    var names_index_URL = "http://wildboy.uib.no/~tpe056/info134/uke9/data/names_index.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", names_index_URL);
    xhr.onreadystatechange = function() {
	if(xhr.readyState === 4 && xhr.status === 200) {
	    layoutSelection(JSON.parse(xhr.responseText));
	}
    };
    xhr.send();
}

function createButton(name, nettID) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = nettID;
    button.onclick = function() {
	var netURL = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_" + nettID + ".json";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", netURL);
	xhr.onreadystatechange = function() {
	    if(xhr.readyState === 4 && xhr.status === 200) {
		displayNetworkInfo(name, JSON.parse(xhr.responseText));
	    }
	};
	xhr.send();
    };
    return button;
}

function displayNetworkInfo(name, networkInfo) {
    var message = "People with this name:";
    for (var i in networkInfo.nodes) {
	var person = networkInfo.nodes[i];
	if (person.name === name) {
	    message += "\n" + person.name + " " + person.surname;
	}
    }
    alert(message);
}

function layoutSelection(namesIndex) {
    var selElt = document.getElementById("selecting");
    selElt.innerHTML = "";
    var olElt = document.createElement("ol");
    for(var i in namesIndex) {
	var liElt = document.createElement("li");
	liElt.innerHTML = i;
	for(var j in namesIndex[i]) {
	    var nettID = namesIndex[i][j];
	    liElt.appendChild(createButton(i, nettID));
	}
	olElt.appendChild(liElt);
    }
    selElt.appendChild(olElt);
}

window.addEventListener("load", initDownload);
