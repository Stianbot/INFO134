function strangeEven(tallListe, tall, funksjon) {
  var partall = [];
  if (tallListe !== undefined) {
    for (var i = 0; i < tallListe.length && partall.length < tall; i++) {
      if (tallListe[i] % 2 === 0) {

        if (funksjon) {
          var y = funksjon(tallListe[i])
          partall.push(y)
        }

        if (funksjon === undefined) {
          partall.push(tallListe[i])
        }
      }
    }
  }
  return partall
}

var liste = [1,2,3,4,5,6,7,8,9,10]

function minus1(x) {
  return x-1
}




var bil = {
  farge:"gul",
  eier: "Ola",
  regNr: "ST12345"
}

function beskriv(bilBeskr) {
  var tekst = "";

  if (bilBeskr) {
    tekst += "Bilen finnes. "
  }

  if (bilBeskr.farge) {
    tekst += "Bilen er " + bilBeskr.farge + ". "
  }

  if (bilBeskr.eier) {
    tekst += "Bilen eies av " + bilBeskr.eier + ". "
  }

  if (bilBeskr.regNr) {
    tekst += "Bilen har registreringsnummer: " + bilBeskr.regNr + ". "
  }

  return tekst
}


var n = -1
function odd() {
  return n += 2
}

var nn = 0
function nextInt(x) {
  if (x) {
    return nn = x
  }
  return nn += 1
}

function makeCounter(limit, counter, step, loop) {
  var obj = {}
  obj.counter = counter || 0;
  obj.step = step || 0;
  obj.limit = limit;
  obj.loop = loop || obj.counter;

  return obj
}
