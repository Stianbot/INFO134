// 3.a)
var protoPerson = {
  get navn() {return this.fornavn + " " + this.etternavn}
};

console.log(protoPerson.navn);

//3.b)
var ola = Object.create(protoPerson);
ola.fornavn = "Ola";
ola.etternavn = "Nielsen";

console.log(ola.fornavn, ola.etternavn, ola.navn);

//3.c)

function person(fornavn, etternavn){
  var resultat = Object.create(protoPerson);
  resultat.fornavn = fornavn;
  resultat.etternavn = etternavn;
  return resultat
}

var familie = {
    ola: person("Ola", "Nielsen"),
    kari: person("Kari", "Nielsen"),
    mor: person("Mor", "Nielsen"),
    far: person("Far", "Nielsen")
};

for (var nøkkel in familie) {
    var verdi = familie[nøkkel];
    console.log(verdi.navn);
}

// 3.d)

protoPerson.hils = function() {
  console.log("Hei, " + this.navn + "!");
};

console.log(familie.ola.hils());
