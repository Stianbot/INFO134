
/**Her finner dere løsningen på oppgave 1,2 og 4 fra uke 11. Oppgave 3 er ikke løst, men denne kan løses ved hjelp av dette løsningsforslaget
 * og løsningsforslaget fra uke 10, hvor det vises hvordan en kan få ut egenskaper til objekter som er hentet via XMLHttpRequest, det vises også
 * hvordan resultatet kan presenteres på html siden.
 *
 * Dette løsningsforslaget kan være nyttig å se på når en jobber med flere eksterne ressurser samtidig. Det kan være nyttig å merke seg
 * hvordan callbacks blir brukt i oppgave 2a og 4. For en av utfordringene ved å jobbe med XMLhttpRequest er å sikre seg at responsen er komt tilbake
 * før en kjører funksjoner som skal bruke nevnt respons. Callbacks brukt på denne måten som i 2.a og 4 garanterer at responsen er kommet frem
 * før en går videre i programmet. Om spørsmål ta kontakt med foreleser eller studentassistenter**/

/*--------------------OPPGAVE 1.a--------------------*/
/*Skriv et HTML-dokument som lar brukeren skrive inn to tall. Legg også inn en knapp. Anta at brukeren har
skrevet inn tallene 1 og 2. Oppgavene under skal selvsagt reflektere hvilke tall brukeren faktisk har skrevet inn.
Presenter resultatet (3) til brukeren. Du vet hvilken nøkkel du skal slå opp på ved å sjekke verdien av
equation.*/
function request(tall_1,tall_2){
    var url = "https://nelson.uib.no/info134demo/addition/" + tall_1 + "/" + tall_2 + "/";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            let utregning = response[tall_1+"+"+tall_2];
            toHTML("id", utregning)
        }
    };
    xhr.send()
}

function toHTML(id,tall) {
    return document.getElementById(id).innerHTML = tall;
}

function read(id) {
    let input = document.getElementById(id).value; //henter input fra html
    let reg = /([1-9]*)\s([1-9]*)/; //regexuttrykk
    let match = input.match(reg); // sjekker om input passer med uttrykket over
    return [match[1], match[2]] //returner det som matcher
}

function run(){
    let data = read("tekst");
    request(data[0],data[1])
}

/*--------------------OPPGAVE 1.b--------------------*/
/*Når brukeren trykker på knappen, last opp følgende dokument til https://nelson.uib.no/info134demo/addition/. Som respons for dette vil du få nok
et JSON-dokument. Dette dokumentet ser ut som det du lastet ned i forrige oppgave. Presenter resultatet til brukeren.
NB! Når du laster opp dette dokumentet må du angi metadata: Content-Type: application/json.
Ellers vil nelson svare med en feilmelding.*/
function request_2(obj){
    var payload = JSON.stringify(obj);
    var url = "https://nelson.uib.no/info134demo/addition/";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            let utregning = response[obj["first"]+"+"+obj["second"]];
            toHTML("id_2",utregning)
        }
    };
    xhr.send(payload)
}

function oppgave_1b(){
    let data = read("tekst_2");
    let object = create_object(data[0],data[1]);
    request_2(object)
}

function create_object(tall_1, tall_2){ //lager et objekt
    return {
        "first": tall_1,
        "second": tall_2
    }
}


/**Her i oppgave 2 viser vi løsning på 2.a på to forskjellige måter. De gjør det samme men den ene er mer kompakt enn den andre.
 * 2.b og 2.c er ikke løst, men ved hjelp av oppgave 1.b og 2.a klarer en gjerne å se hvordan disse skal løses.**/
/*--------------------OPPGAVE 2.a--------------------*/
/*Skriv et HTML-dokument som lar brukeren skrive inn tre tall. Legg også til en knapp. Anta at brukeren har
skrevet inn tallene 1, 2, og 3. Regn ut summen av de tre tallene ved å gjøre GET-forespørsler. Send først en forespørsel om å regne ut
summer av to av dem (f. eks. 2 og 3). Send så en forespørsel om å summere det gjenværende tallet og
summen du fant i forrige beregning (f.eks. 1 og 5).
*
VERSJON 1:*/
function makeUrl(num1, num2) {
    var URL = "https://nelson.uib.no/info134demo/addition/";
    return URL + num1 + "/" + num2 + "/";
}

function getValue(id) {
    var elt = document.getElementById(id);
    return Number(elt.value);
}

function calculate() {
    // koder forespørselen
    var url = makeUrl(getValue("x1"), getValue("x2"));

    // klargjør forespørsel
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", url);

    xhr1.onreadystatechange = function() {
        if (xhr1.readyState === 4 && xhr1.status === 200) {
            var response = JSON.parse(xhr1.responseText);
            var solution = response[response["equation"]];

            // koder andre forespørsel
            var url = makeUrl(solution, getValue("x3"));

            // klargjør andre forespørsel
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url);

            xhr2.onreadystatechange = function() {
                if (xhr2.readyState === 4 && xhr2.status === 200) {
                    var response = JSON.parse(xhr2.responseText);
                    console.log("(X1 + X2) + X3", response);

                    // presenter endelig resultat til brukeren
                    var sumElt = document.getElementById("sum");
                    sumElt.innerHTML = response[response["equation"]];
                }
            };
            // send andre forespørsel
            xhr2.send();
        }
    };

    // send første forespørsel
    xhr1.send();
}

/*--------------------OPPGAVE 2.a Ryddig versjon--------------------*/

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

function calculate_2() {
    add(getValue("x1_2"), getValue("x2_2"), function(sum1) {
        add(sum1, getValue("x3_2"), function(sum2) {
            var sumElt = document.getElementById("sum_2");
            sumElt.innerHTML = sum2;
        });
    });
}

/**Oppgave 4 er på samme måte som oppgave 2. Her blir oppgaven løst på to forskjellige måter, de gjør det samme men en av versjonene er
 * mer kompakt.**/
/*--------------------OPPGAVE 4 --------------------*/

var URL = "http://158.39.77.143/addition";


function calculate_3() {
    // klargjør første datasett, X1 + X2
    var data = {
        "first": getValue("x1_3"),
        "second": getValue("x2_3")
    };

    // serialiser data
    var payload = JSON.stringify(data);

    // klargjør forespørsel
    var xhr1 = new XMLHttpRequest();
    xhr1.open("POST", URL);
    xhr1.setRequestHeader("Content-Type", "application/json");

    xhr1.onreadystatechange = function() {
        if (xhr1.readyState === 4 && xhr1.status === 200) {
            var response = JSON.parse(xhr1.responseText);
            console.log("X1 + X2", response);
            // klargjør andre datasett (X1 + X2) + X3
            var data = {
                "first": response[response["equation"]],
                "second": getValue("x3_3")
            };
            var payload = JSON.stringify(data);

            // klargjør andre forespørsel
            var xhr2 = new XMLHttpRequest();
            xhr2.open("POST", URL);
            xhr2.setRequestHeader("Content-Type", "application/json");

            xhr2.onreadystatechange = function() {
                if (xhr2.readyState === 4 && xhr2.status === 200) {
                    var response = JSON.parse(xhr2.responseText);
                    console.log("(X1 + X2) + X3", response);

                    // klargjør siste (tredje) datasett ((X1 + X2) + X3) + X4
                    var data = {
                        "first": response[response["equation"]],
                        "second": getValue("x4_3")
                    };
                    var payload = JSON.stringify(data);

                    // klargjør siste (tredje) forespørsel
                    var xhr3 = new XMLHttpRequest();
                    xhr3.open("POST", URL);
                    xhr3.setRequestHeader("Content-Type", "application/json");

                    xhr3.onreadystatechange = function() {
                        if (xhr3.readyState === 4 && xhr3.status === 200) {
                            var response = JSON.parse(xhr3.responseText);
                            console.log("((X1 + X2) + X3) + X4", response);

                            // presenter endelig resultat til brukeren
                            var sumElt = document.getElementById("sum_3");
                            sumElt.innerHTML = response[response["equation"]];
                        }
                    };
                    // send siste (tredje) forespørsel
                    xhr3.send(payload);
                }
            };
            // send andre forespørsel
            xhr2.send(payload);
        }
    };

    // send første forespørsel
    xhr1.send(payload);
}


/*--------------------OPPGAVE 4 Ryddig versjon--------------------*/

function add_2(x, y, callback) {
    // klargjør datasett ("bestilling")
    var data = {
        "first": x,
        "second": y
    };

    // serialiser data
    var payload = JSON.stringify(data);

    // klargjør forespørsel
    var xhr = new XMLHttpRequest();
    xhr.open("POST", URL);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var equation = response["equation"];
            var solution = response[equation];
            callback(solution);
        }
    };

    // send forespørselen
    xhr.send(payload);
}

function calculate_4() {
    add_2(getValue("x1_4"), getValue("x2_4"), function(sum1) {
        add_2(sum1, getValue("x3_4"), function(sum2) {
            add_2(sum2, getValue("x4_4"), function(sum3) {
                var sumElt = document.getElementById("sum_4");
                sumElt.innerHTML = sum3;
            });
        });
    });
}
