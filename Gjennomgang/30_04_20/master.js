//10.
//a)

var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://example.com/dokart.json.") //dette er metode kallet vi gjør + .send().
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var respons = xhr.responseText
  }
}
xhr.send()

/*
b)
UNSENT 0 Ikke startet enda
OPENED 1 Startet
HEADERS_RECEIVED 2 Mottatt metadata
LOADING 3 Holder på å motta data
DONE 4 Forespørselen er ferdig
*/

//c: xhr.readyState === 4 && xhr.status === 200.

//11.

var resultat = {}

function hent(url){
  var xhr = new XMLHttpRequest();
    xhr.open("GET", url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var respons = JSON.parse(xhr.responseText)
        callback(respons)
    }
  }
  xhr.send()
}

function callback(arg) {
  console.log(arg);
  resultat.respons = arg
}
//nå er reponsen lagret i resultat variabelen.

hent("eksempel.no/jsonRessurs.json")

//12.

function CurrencyConv(data, from, to) {
  this.from = from;
  this.to = to;
  this.rate = data[this.from][this.to];
  this.changeTo = function (to) {this.to = to; this.updateRate()}
  this.updateRate = function () {this.rate = data[this.from][this.to]}
}

var obj = {
  "NOK":{
    "SEK": 1.06,
    "DKR": 0.78,
    "EUR": 0.1,
    "USD": 0.12,
    "JPY": 13.37
  }
}

//13.

function hent(url, from, to){
  var xhr = new XMLHttpRequest();
    xhr.open("GET", url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var respons = JSON.parse(xhr.responseText)
        veksling = new CurrencyConv(respons, from, to)
        console.log(veksling);
    }
  }
  xhr.send()
}

hent("http://example.com/currencies", "NOK", "SEK")


//15.
function hent(url, cfunksjon){
  var xhr = new XMLHttpRequest();
    xhr.open("GET", url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var respons = JSON.parse(xhr.responseText)
        if (cfunksjon) {
          cfunksjon(respons)
        }
    }
  }
  xhr.send()
}


function CurrencyConv(data, from, to) {
  this.from = from;
  this.to = to;
  this.rate = data[this.from][this.to];
  this.changeTo = function (to) {this.to = to; this.load()}
  this.updateRate = function () {this.rate = this.data[this.from][this.to]}
  this.load = function(this) {hent("http://example.com/currencies", function(x) {
    this.data = x;
    this.updateRate()
  })}
}
