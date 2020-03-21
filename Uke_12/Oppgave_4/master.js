let dato;
dato = {
    now: new Date(),
    dates: /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/
};

/*----------OPPGAVE 4.a)----------*/
function oppgave_4a() {
    let serialisert = JSON.stringify(dato);
    let parset = JSON.parse(serialisert);
    console.log("----------OPPGAVE 4.a)----------");
    console.log("Oprinnelig objekt:", dato);//printer ut det opprinnelige objektet.
    console.log("Serialisert:", serialisert) ; //printer ut serialisert objekt
    console.log("Parset:", parset);  //printer ut parset objekt.
    console.log("--------------------------------");
}

/*----------OPPGAVE 4.b)----------*/

let text = JSON.stringify(dato, function (key, value) {
    if (value.constructor === RegExp){
        return value.toString();
    }
    return value
});

function oppgave_4b() {
    console.log("----------OPPGAVE 4.b)----------");
    let serialisert = JSON.stringify(text);
    let parset = JSON.parse(serialisert);
    console.log("Oprinnelig objekt:", dato);//printer ut det opprinnelige objektet.
    console.log("Serialisert:", serialisert) ; //printer ut serialisert objekt
    console.log("Parset:", parset);  //printer ut parset objekt.
    console.log("--------------------------------");
}