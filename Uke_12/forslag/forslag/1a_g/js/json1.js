var handleliste = {
    melk: {
	lett: 1
    },
    makrell: {
	tomat: 1,
	lettrøkt: 1
    },
    majones: {
	lett: 2
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

