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

function createButton(nettID) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = nettID;
    button.onclick = function() {
	var netURL = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_" + nettID + ".json";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", netURL);
	xhr.onreadystatechange = function() {
	    if(xhr.readyState === 4 && xhr.status === 200) {
		displayNetworkInfo(JSON.parse(xhr.responseText));
	    }
	};
	xhr.send();
    };
    return button;
}

function displayNetworkInfo(networkInfo) {
    var dispElt = document.getElementById("displaying");
    dispElt.innerHTML = "";
    var olElt = document.createElement("ol");
    for (var i in networkInfo.nodes) {
	var person = networkInfo.nodes[i];
	var liElt = document.createElement("li");
	liElt.innerHTML = person.name + " " + person.surname;
	olElt.appendChild(liElt);
    }
    dispElt.appendChild(olElt);
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
	    liElt.appendChild(createButton(nettID));
	}
	olElt.appendChild(liElt);
    }
    selElt.appendChild(olElt);
}

window.addEventListener("load", initDownload);
