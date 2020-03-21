//2.a)
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
//console.log(hei());
//console.log(hei("Stian"));
//console.log(hei("Stian", "Hallais"));

function greet(name, greeting) {
  if (name === undefined) {
    name = "World";
  }
  if (greeting === undefined) {
    greeting = "Hello";
  }

  return greeting + ", " + name + "!";
}

//console.log(greet());
//console.log(greet("Per"));
//console.log(greet("Per", "Yo"));

//2.b)

function strangeEven(list, number, func) {
  var liste = [];
  console.log(func);

  if (number === undefined) {
    number = list.length;
  }

  if (func === undefined) {
    func = function(n){
      return n;
    };
  }

  for (var i = 0; i < list.length && liste.length < number; i++) {
    if (list[i]%2 === 0) {
      x = func(list[i]);
      liste.push(x)

    }
  }
  return liste
}

//console.log(strangeEven([1,2,3,4,5,6,7,8,9,10], 3, function(x){return x * 2}));

//2.c)

function logAll(){
  for (var i = 0; i < arguments.length; i++) {
    console.log("Argument", i, ": ", arguments[i]);
  }
}


function beskriv(bilBeskr) {
  var result = "";
  if (bilBeskr) {
    result = "bilen finnes.";
  }
    if (bilBeskr.farge) {
    result = "Den " + bilBeskr.farge + " bilen";
  } else {
    result = "Bilen"
  }
    if (bilBeskr.regNr) {
    result += " har registreringsnummer " + bilBeskr.regNr;
    if (bilBeskr.eier){
      result += " og eies av " + bilBeskr.eier + "."
    } else {
      result += "."
    }
  } else {
    if (bilBeskr.eier) {
    result += " tilhører " + bilBeskr.eier + "."
  } else {
    result + "."
  }}

  return  result
}

var bil = {
  farge: "rød",
  regNr: "EV12345",
  eier: "Stian"
};
