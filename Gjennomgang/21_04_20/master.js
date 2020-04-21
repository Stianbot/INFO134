var teller = {
  counter: 6,
  tick: function() {
    if (this.counter === 0) {

      if (this.onzero) {
        this.onzero()
      }

      return //"Counter har nådd 0"
    }
    this.counter--
    //this.counter -= 1
    //this.counter = this.coutner - 1

    if (this.onchange) {
      this.onchange(this.counter)
    }

    return this.counter
  },
onchange: function(nyVerdi) {
  console.log("ny verdi:", nyVerdi);
},
onzero: function() {
  console.log("Du har nådd 0!");
}
};

teller.onchange = function(x) {changeLabel(x)}
teller.onzero = function() {disableButton()}

function changeLabel(newLabel) {
  var btn = document.getElementById("myButton")
  btn.innerHTML = newLabel
}

function disableButton() {
  var btn = document.getElementById("myButton")
  btn.disabled = true;
}
/*UKE 4*/


function Person(fornavn, etternavn) {
  this.fornavn = fornavn;
  this.etternavn = etternavn;
  this.navn = function() {return fornavn +" " + etternavn;}
  this.hils = function() {return "Hei! " + fornavn + " " + etternavn;}
}

var p1 = new Person("Ola", "Nordmann")
var p2 = new Person("Kari", "Nordmann")


var fam = [p1,p2]

/*
for (var navn in fam) {
  console.log(fam[navn].fornavn);
}
*/

var numbers = [0,1,2,3,4,6]
/*
for (var i = 0; i < numbers.length; i++) {
  console.log("første", numbers[i]);
}
*/

/*
for (var tall in numbers) {
  console.log("andre", numbers[tall]);
}
*/

/*
var liste_0 = [[1,2],[3,4],[5,6]]

for (var i = 0; i < liste_0.length; i++) {
  var tall_0 = liste_0[i][0]
  var tall_1 = liste_0[i][1]
  console.log("klassisk",tall_0 + tall_1);
}

for (var x in liste_0) {
  var tall_0 = liste_0[x][0]
  var tall_1 = liste_0[x][1]
  console.log("for in",tall_0 + tall_1);
}

var j = 0
while (j < liste_0.length) {
  var tall_0 = liste_0[j][0]
  var tall_1 = liste_0[j][1]
  console.log("while",tall_0 + tall_1);
  j++
}
*/


function hei(navn, hilsen) {
  if(navn === undefined && hilsen === undefined){
    return "Hello, World!"
  }
  if (navn != undefined && hilsen === undefined) {
    return "Hello, " + navn + "!";
  }
  if (navn != undefined && hilsen != undefined) {
    return hilsen + ", " + navn + "!"
  }
}
