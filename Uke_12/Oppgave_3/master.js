function restoration() {
    var res = [];
    for (var elt in this) {
        if (elt != "toJSON") {
            console.log(elt)
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

    if (representation.constructor === Array) {
        result = {};//Lager et tomt objekt.
        for(var elt in representation) { //lager en løkke som itererer gjennom alle elementene i representation; som er det vi har hentet inn fra tekstfeltet på html-siden.
            var eltName = representation[elt];
            result[eltName] = 1; //Gir objektet result en egenskap og setter verdien til denne egenskapen til 1.
        }
        return result
    }
    return representation;
}


function load() {
    var tekstElt = document.getElementById("tekstboks");
    var tekstrepresentasjon = tekstElt.value;
    handleliste = JSON.parse(tekstrepresentasjon, tolkeHandlelister);
}

