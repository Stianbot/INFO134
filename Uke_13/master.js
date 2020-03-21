/**Her finne en løsningene på alle oppgavene fra uke 10, unntatt oppgave 2.
 * Oppgaveteksten står over koden om løser oppgaven. Ha konsollen åpen for å se resultatet av funksjonene.
 * Trykk på knappene på html-siden for å se resultatet av de ulike oppgavene.
 *
 * Dette løsningsforslaget kan være nyttig å se på når en jobber med eksterne ressurser.
 * I dette løsningsforslaget vises det hvordan en laster ned eksterne ressurser og presenterer de på en html-side.**/

/*----------OPPGAVE 1.a)----------*/
/*Skriv et kort HTML-dokument som laster inn et JavaScript program, og så snart dokumentet er lastet inn så
* startes nedlastingen av nettverk:0
* - Her er det gjort litt annerledes. Funksjonen er satt til å kjøre når en trykker på en knapp i stedet.
* Om en ønsker å ha den til å starte når siden lastes inn, kan en ha det som onload i <body>-taggen i html-dokumentet eller som
* window.onload = lastNed() i JavaScript*/

function lastNed() {
    var url = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_0.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log("1a: ",response)
        }
    };
    xhr.send();
}

function oppgave_1a() {
    lastNed()
}

/*----------OPPGAVE 1.b)----------*/
/*Skriv en ny versjon av programmet i forrige oppgave. Når du har lastet ned filinnholdet, skal du parse denne teksten (JSON.parse) og logge ut det
* gjennopprettede objektet heller enn tekstverdien. Utforsk objektet i konsollen.*/

function lastNed2() {
    var url = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_0.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("1b: ",response)
        }
    };
    xhr.send();
}
function oppgave_1b() {
    lastNed2()
}

/*----------OPPGAVE 1.c)----------*/
/*Skriv et program som inkluderer funksjonen lastNed1 som laster ned nettvek1
* - Funksjonen under gjør dette, men den heter lastNed3() det har ingen betydning for resultatet av funksjonen*/

function lastNed3() {
    var url = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_1.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("1c: ",response)
        }
    };
    xhr.send();
}

function oppgave_1c() {
    lastNed3()
}

/*----------OPPGAVE 1.d)----------*/
/*Skriv et program der du definerer en funksjon, lastNed, definert med ett parameter, netID. Programmet ditt skal laste ned nettveket med den
* ID-en, parse teksten, og logge det gjennopprettede objektet.*/

function lastNed4(netID) {
    var url = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_"+ netID +".json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("1d: ",response)
        }
    };
    xhr.send();
}

function oppgave_1d() {
    lastNed4(5) //laster ned nettverk med netID = 5
}

/*----------OPPGAVE 1.e)----------*/
/*Utvid HTML-dokumentet ditt slik at det tillater brukeren å angi hvilket nettvek som skal logget til konsollen (0-999).
* Dette kan du gjøre med en liten tekstboks og en knapp, eller du kan velge en annen løsning.
* Valgfritt: Merk at ID-ene er nøyaktig all tall som består av minst ett og maks tre siffer. Hvis du vil teste om brukeren
* har skrevet inn en gyldig ID, kan du se om tekstverdien passer med det regulære uttrykket: var idPattern = /^\d{1,3}$/;*/

function lastNed5(netID) {
    var url = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_"+ netID +".json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("1e: ",response)
        }
    };
    xhr.send();
}

function getData() {
    let reg = /^\d{1,3}$/; //lager regex-uttrykk
    let data = document.getElementById("text").value; //henter ut verdien av inputfeltet på html-siden
    if (reg.test(data) === true){ //tester om data fra inputfeltet matcher med regex-uttrykket. om den gjør det så;
        lastNed5(data) //kjøres lastNed5 funksjonen med input fra html-siden som argument.
    }
}

function oppgave_1e() {
    getData()
}

/*----------OPPGAVE 3)----------*/
/**Oppgave 3.a og b er ganske like. Bytt på å kommentere ut linje 134/135 for å se oppgave 3.a og 3.b
 * Det holder kanskje å se oppgave 3.b siden den er den samme som 3.a bare utvidet med å vise antall venner.**/

/*----------BRUKES AV OPPGAVE 3a) og 3b)----------*/
function lastNed_oppg3(netID) {
    let url = "http://wildboy.uib.no/~tpe056/info134/uke9/data/nettverk_15_"+ netID +".json";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            //getNames(data) //avkommenter for å se oppgave 3.a)
            getFriends(data) //kommenter ut for å ikke se oppgave 3.b)
        }
    };
    xhr.send();
}

function getData_oppg3() { //samme funksjon som i oppgave 1
    let reg = /^\d{1,3}$/;
    let data = document.getElementById("text_oppg3").value;
    if (reg.test(data) === true){
        return lastNed_oppg3(data)
    }
}

/*----------OPPGAVE 3.a)----------*/
/*Skriv et HTML-dokument som lar brukeren laste ned et nettverk. Når du har lastet ned og tolket dataene
(JSON.parse), skal du lage en liste hvor du lister opp navnene til alle personene i nettverket, og
legger denne listen (et sted) i dokumentet. Du kan opprette et slikt listeobjekt ved å bruke metoden
createElement på document-objektet: document.createElement("ul") for en uordnet
liste eller document.createElement("ol") for en ordnet (numerert) liste. (Nå kan brukeren få
tilgang til informasjon uten å se i konsollen.)*/
function getNames(network) {
    let html_position = document.getElementById("personer_liste");
    for (let ppl in network["nodes"]){ //itererer gjennom personene i nettverket.
        let person = network["nodes"][ppl]; //lagrer dette i en variabel for å gjøre koden mer oversiktlig.
        let list_element = document.createElement("LI"); //lager et <li> element
        let text = document.createTextNode(person["name"] + " " + person["surname"]); //lager en tekstnode av fornavn og etternavn
        list_element.appendChild(text); //legger tekst noden til <li> elementet
        html_position.appendChild(list_element) //legger <li> elementet inn i html-dokumentet, i elementet med id "personer-liste" som er et <ul> element.
    }
}

/*----------OPPGAVE 3.b)----------*/
/*Skriv en utvidet versjon av programmet i oppgave 3.a). I tillegg til personens navn, skal du også skrive ut
hvor mange venner hun/han har bak eller under navnet.*/
function getFriends(network) {
    for (let ppl in network["nodes"]){ //itererer gjennom alle personene i network
        let person = network["nodes"][ppl]; // lager denne variabelen for å korte ned lengden på dot-notering
        person.venner = 0; //gir personer en egenskap "venner"
        for (let id in network["edges"]){ //itererer gjennom alle
            if (person.id === network["edges"][id][0] ||person.id === network["edges"][id][1]) //Hvis id er lik til nummer i edge
                person.venner += 1; //pluss på en venn.
        }
    }

    /*Kopi av getNames, eneste endring er å ta med person["venner"] på linje 52*/
    let html_position = document.getElementById("personer_liste");
    for (let ppl in network["nodes"]){
        let person = network["nodes"][ppl];
        let list_element = document.createElement("LI");
        let text = document.createTextNode(person["name"] + " " + person["surname"] + " har: " + person["venner"]+ " venner"); //lager en tekstnode av fornavn, etternavn og antall venner.
        list_element.appendChild(text);
        html_position.appendChild(list_element)
    }
}

/*----------OPPGAVE 4.a)----------*/

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