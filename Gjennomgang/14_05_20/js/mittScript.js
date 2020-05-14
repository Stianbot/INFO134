/*
setTimeout(function() {
  alert("Det har gått minst et minutt nå.")
}, 4000)
*/

function en() {
  for (var i = 0; i <= 3; i++){
    console.log(i);
  }
}
en()

console.log("---------------------");

function to() {
  function f(n,m) {
    for (var i = 0; i < n; i++) {
      console.log(i - m);
      }
  }
  f(4,2)
}
to()

console.log("---------------------");

function tre() {
  function f(n,m) {
    for (var i = 0; i < n; i++) {
      console.log(i);
      }
      console.log(i-m);
  }
  f(4,2)
}
tre()


// NOTE: 10 b. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
function request() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://example.com/dokart.json"); //10 a.
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { //10 c.
        console.log(xhr.responseText);
      }
  };

  xhr.send();
}


function CurrencyConv(data, from, to) {
  this.from = from;
  this.to = to;
  this.rate = data[from][to];
}

var obj = {
  "NOK": {
    "SEK": 1.06,
    "DKR": 0.78,
    "EUR": 0.1,
    "USD": 0.12,
    "JPY": 13.37
  }
}


var c = new CurrencyConv(obj, "NOK", "DKR")
console.log(c);
