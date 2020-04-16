var tall = 0;
var tall2 = 50;

function test(arg) {
  if (arg) {
    return "er en sann verdi"
  }
  return "er en falsk verdi"
}


function Person2(navn) {
  this.navn = navn || "Ola Nordmann"
}

var a = new Person2("Kari Nordmann")
var a2 = new Person2()

var o1 = {
  bokstaver: "EL",
  tall: 12345,
  "noe med mellomrom" : "test"
}

var o1a = {};
o1a.bokstaver = "ELa";
o1a.tall = 12345;

var o1b = {};
o1b["bokstaver"] = "ELb";
o1b["tall"] = 12345;


o1.bokstaver = "ST";
o1["tall"] = 23456;

//console.log(o1.bokstaver);
//console.log(o1["tall"]);
//console.log(o1["noe med mellomrom"]);


var o2 = {
  bokstaver: "EL",
  tall: 12345,
  get regNr(){
    return this.bokstaver + " " + this.tall
  }
}

o2.bokstaver = "SV"
o2.tall = "45673"


var p = {
  fornavn: "Ola",
  etternavn: "Nordmann",
  get navn(){
    return this.fornavn + " " + this.etternavn
  }
}

var p1 = {
  fornavn: "Kari",
  etternavn: "Nordmann",
  get navn(){
    return this.fornavn + " " + this.etternavn
  }
}

var p2 = {
  fornavn: "Per",
  etternavn: "Nordmann",
  get navn(){
    return this.fornavn + " " + this.etternavn
  }
}

var p3 = {
  fornavn: "Pål",
  etternavn: "Nordmann",
  get navn(){
    return this.fornavn + " " + this.etternavn
  }
}

var fam = [p,p1,p2,p3]

function loop(arr) {
  for (var person in arr) {
    console.log(arr[person].navn);
  }
}

//loop(fam)

// NOTE: ARV

var protoPerson = {
  get navn() {return this.fornavn + " " + this.etternavn}
}

var ola = Object.create(protoPerson);
ola.fornavn = "Ola";
ola["etternavn"] = "Nielsen";

console.log(ola.fornavn, ola.etternavn,"\n" + ola.navn);

function person(fornavn, etternavn) {
  var person = Object.create(protoPerson);
  person.fornavn = fornavn;
  person.etternavn = etternavn;
  return person
}

var familie = {
  ola: person("Ola", "Nielsen"),
  kari: person("Kari", "Nielsen"),
  mor: person("Mor", "Nielsen"),
  far: person("Far", "Nielsen")
}

function printFamilie(fam_obj) {
  for (var egenskap in fam_obj) {
    console.log(fam_obj[egenskap].navn);
  }
}

printFamilie(familie)
protoPerson.hils = function() { console.log("Hei, " + this.navn + "!"); }
