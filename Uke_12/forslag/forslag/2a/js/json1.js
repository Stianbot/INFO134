var handleliste = {
    melk: {
	lett: 1,
	toJSON: function() {
	    var res = [];
	    for (var elt in this) {
		if (elt != "toJSON") {
		    res.push(elt);
		}
	    }
	    return res;
	}
    },
    makrell: {
	tomat: 1,
	lettrøkt: 1,
	toJSON: function() {
	    var res = [];
	    for (var elt in this) {
		if (elt != "toJSON") {
		    res.push(elt);
		}
	    }
	    return res;
	}
    },
    majones: {
	lett: 2, 
	toJSON: function() {
	    var res = [];
	    for (var elt in this) {
		if (elt != "toJSON") {
		    res.push(elt);
		}	    }
	    return res;
	}
    }
};

function save() {
    var tekstElt = document.getElementById("tekstboks");
    tekstElt.innerHTML = JSON.stringify(handleliste, undefined, 2);
}

function load() {
    var tekstElt = document.getElementById("tekstboks");
    var beskElt = document.getElementById("beskrivelse");

    var tekstrepresentasjon = tekstElt.value;
    handleliste = JSON.parse(tekstrepresentasjon);
}

