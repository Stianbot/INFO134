
function myTimeout() {
  t = setTimeout(function () {console.log("Lastet " + t);}, 2000);
  return t
}

function myTimeout2() {
  s = setTimeout(function () {console.log("Lastet " + s);}, 2000);
  return s
}

var x = myTimeout()
var y = myTimeout2()

setTimeout(function () {clearTimeout(t); console.log("timeout " + t + " slettet");}, 1000)


function loaded() {
  var elt = document.getElementById("avsnittetMitt")
  elt.innerHTML = "Siden er lastet."
}

function freeze(tryToFreeze) {
  tryToFreeze = tryToFreeze || 4000;
  var work = 30;

  function workAlittle(n) {
    if (n < 2) {
      return 1;
    }
    return workAlittle(n-1) + workAlittle (n+2);
  }

  var start = performance.now();
  var timeSpent = 0;
  while (timeSpent < tryToFreeze) {
    workAlittle(work)
    timeSpent = (performance.now() - start)
  }
  alert("Total time spent: " + timeSpent)
}

freeze(1000);
