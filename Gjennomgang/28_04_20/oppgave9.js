console.log("Oppgave 9.a):");
for (var i = 0; i <= 3; i++) {
  console.log(i);
}

console.log("Oppgave 9.b):");
function f(n,m) {
  for (var i = 0; i < n; i++) {
    console.log(i-m);
  }
}
f(4,2)

console.log("Oppgave 9.c):");
function f2(n,m) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log(i-m);
}
f2(4,2)

console.log("Oppgave 9.d):");
function g(n) {
  return 2 * n
}

function f3(x,h) {
  console.log(h(x) - x);
}
f3(2,g)

console.log("Oppgave 9.e):");
var g = 0;
function f4(x) {
  g = x
}
f4(1)
console.log(g);

console.log("Oppgave 9.f):");
var o = 0;
function f5(x) {
  o = x
}
console.log(o);
f5(1)
