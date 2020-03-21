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

function getData() { //samme funksjon som i oppgave 1
    let reg = /^\d{1,3}$/;
    let data = document.getElementById("text").value;
    if (reg.test(data) === true){
        return lastNed_oppg3(data)
    }
}

/*----------OPPGAVE 3.a)----------*/
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