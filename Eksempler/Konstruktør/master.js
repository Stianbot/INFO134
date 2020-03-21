// NOTE: Uke 1/2 Første møte
// demo: lage en funksjon som kan erstatte et element på en HTML-side

//funksjonen endrer tekst-fargen til et html element.
//funksjonen tar et argument: IDen til elementet du vil endre farge på.
function endre_element(id_til_element) {
  var element = document.getElementById(id_til_element)
  element.style.color = farge_generator()
}

//funksjonen returnerer et tilfeldig tall mellom 0-250
function random_color(){
  return Math.round(Math.random()*250)
}

//funksjonen returnerer en rgb fargekode
function farge_generator(){
  return "rgb(" + random_color() +", " + random_color() + ", " + random_color() + ")";
}

// NOTE: UKE 3
// Lager er objekt som skal representere en uke.
 var timeplan = {
   mandag:undefined,
   tirsdag:undefined,
   onsdag:undefined,
   torsdag:undefined,
   fredag:undefined,
   lørdag:"FRI",
   søndag:"FRI",
 }

 //lager et objekt (uke_9) av typen "timeplan"
var uke_9 = Object.create(timeplan)

//tilegener tirsdag-egenskapen verdien: "INFO134 lab"
uke_9.tirsdag = "INFO134 Lab"

//logger ut det en skal op tirsdag og lørdag.
console.log(uke_9.tirsdag, uke_9.lørdag);

//funksjon som skriver ut alt en skal på en uke. tar et uke-objekt som argument
function påminner(uke_objekt) {
  for (var dag in uke_objekt) {
    console.log("På " + dag + " har du følgende avtaler: ");
    if (uke_objekt[dag] !== undefined) {
      for (var tidspunkt in uke_objekt[dag]) {
      console.log(tidspunkt + ": " + uke_objekt[dag][tidspunkt])
    }
  }
    if (uke_objekt[dag] === undefined) {
      console.log("INGEN AVTALER");
    }
  }
}

//lager et nytt uke-objekt og legger til avtaler
var uke_10 = Object.create(timeplan)
uke_10.mandag = {"08:15": "Forelesning INFO300", "12:15": "INFO134 lab"}
uke_10.tirsdag = {"08:15": "INFO134 Lab", "14:00": "Tur"}
uke_10.lørdag  ={"Hele dagen": "Fri"}
uke_10.søndag = {"Hele dagen": "Fri"}


// NOTE: UKE 4 objekter

//funksjon for å lage et uke-objekt.
function lag_timeplan(mandag,tirsdag,onsdag,torsdag,fredag,lørdag={"hele dagen": "fri"},søndag={"hele dagen": "fri"}) {
  let plan = Object.create(timeplan)
  plan.mandag = mandag
  plan.tirsdag = tirsdag
  plan.onsdag = onsdag
  plan.torsdag = torsdag
  plan.fredag = fredag
  plan.lørdag = lørdag
  plan.søndag = søndag

  return plan
}

//lager et uke-objekt ved hjelp av funksjonen lag_timeplan()
let uke_11 = lag_timeplan(undefined,undefined, {"08:10": "Jobb intervju", "14:00": "Bursdagsbesøk"}, undefined, {"16:00": "kino"})
//console.log(uke_11);

//lager et timeplan objekt men med en Konstruktør i steded.
function Timeplan(ma,ti,on,to,fr,lø,sø) {
  this.mandag = ma;
  this.tirsdag = ti;
  this.onsdag = on;
  this.torsdag = to;
  this.fredag = fr;
  this.lørdag = lø;
  this.søndag = sø;
}

//lager et objekt (uke12) ved hjelp av en Konstruktør
let uke_12 = new Timeplan({"20:15": "ut og spise"},{"12:00": "møte"},undefined,undefined, undefined,undefined,undefined)
