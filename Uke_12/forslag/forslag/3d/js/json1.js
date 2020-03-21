function restoration() { 
    var res = [];
    for (var elt in this) {
	if (elt != "toJSON") {
	    res.push(elt);
	}
    }
    return res;
}

var handleliste = {
    melk: {
	lett: 1,
	toJSON: restoration
    },
    makrell: {
	tomat: 1,
	lettrøkt: 1,
	toJSON: restoration
    },
    majones: {
	lett: 2, 
	toJSON: restoration
    }
};

function save() {
    var tekstElt = document.getElementById("tekstboks");
    tekstElt.innerHTML = JSON.stringify(handleliste, undefined, 2);
}

function tolkeHandlelister(name, representation) {
    // console.log("Tolker", name, "representert som", representation);
    if (representation.constructor === Array) {
	result = {};
	for(var elt in representation) {
	    var eltName = representation[elt];
	    result[eltName] = 1;
	}
	result.toJSON = restoration;
	return result
    }
    return representation;
}

function load() {
    var tekstElt = document.getElementById("tekstboks");
    var beskElt = document.getElementById("beskrivelse");

    var tekstrepresentasjon = tekstElt.value;
    handleliste = JSON.parse(tekstrepresentasjon, tolkeHandlelister);
}

