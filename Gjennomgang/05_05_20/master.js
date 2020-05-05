//6.

function euclideanDistance(c1,c2) {
  var dX = c2.x - c1.x;
  var dY = c2.y - c1.y;
  var sumOfSquares = dX * dX + dY * dY;
  return Math.sqrt(sumOfSquares)
}

var a = {
  x:10,
  y:50
}

var b = {
  x:20,
  y:40
}

console.log(euclideanDistance(a,b));

// NOTE: Søk opp asynkron programmering.
// NOTE: Søk opp callback function.


//12

//A
for(var i = 0; i < 3; i++){
  console.log(i);
}

//B
function f(n){
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

f(4)

//C
function f2(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log(i);
}
f2(4)

//D
function g(n) {
  return 2 * n
}

function f3(x,h) {
  console.log(h(x) - x);
}

f3(2,g)

//E

var q = 0;
function f4(x) {
  q = x;
}

console.log(q);
f4(1)

//F

var w = 0;
function f5(x) {
  w = x;
}
f5()
console.log(w);

console.log("------------------------------");
