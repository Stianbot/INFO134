//2.a)
var o1 ={bokstaver: "EL", tall: 12345}

//2.b)
console.log("2.b)", o1);

//2.c)
o1.bokstaver = "ST";
o1["tall"] = 23456
console.log("2.c)", o1.bokstaver);
console.log("2.c)", o1["tall"]);

//2.d)
var o2 = {
  bokstaver: "EL",
  tall: 12345,
  get regNr() {return this.bokstaver + this.tall }
}

console.log("2.d)", o2.regNr);

//2.e)
var p = {
  fornavn: "Stian",
  etternavn: "Botnevik",
  get navn() {return this.fornavn + " " + this.etternavn}
}

console.log("2.e)", p.navn);

//2.f)
var stian = {
  fornavn: "Stian",
  etternavn: "Botnevik",
  get navn() {return this.fornavn + " " + this.etternavn}
}

var ola = {
  fornavn: "Ola",
  etternavn: "Nordmann",
  get navn() {return this.fornavn + " " + this.etternavn}
}

var kari = {
  fornavn: "Kari",
  etternavn: "Nordmann",
  get navn() {return this.fornavn + " " + this.etternavn},
  hilsen: function() {
    return 5 * 5
  }
}

var fam = [stian, ola, kari];
for (i = 0; i < fam.length; i++){
  console.log(fam[i].navn);
}

for (person in fam){
  console.log(person);
  console.log(fam[person].navn);
}
