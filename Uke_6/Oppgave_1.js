console.log("1.a)", "1" == 1);
console.log("1.a)", "1" === 1);
console.log("1.b)", true == 1);
console.log("1.b)", true === 1);
console.log("1.b)", false == 0);
console.log("1.b)", false === 0);
console.log("1.c)", null == undefined);
console.log("1.c)", null === undefined);
console.log("1.d)", 1/0);
console.log("1.e)", Infinity == undefined);
console.log("1.f)", (1/0) == 1/-0);
console.log("1.g)", 1 + "4");
console.log("1.g)", 1 + ("4"/2));

var x = 0.3 - 0.2;
var y = 0.2 - 0.1;

console.log("1.h)", x == y);

function ifTest(x) {
  if (x) {
    return x + " er 'truthy'.";
  } else {
    return x + " er 'falsy'.";
  }
}

console.log("1.i)", ifTest(-2));
console.log("1.i)", ifTest(-1));
console.log("1.i)", ifTest(-0));
console.log("1.i)", ifTest(0));
console.log("1.i)", ifTest(1));
console.log("1.i)", ifTest(2));

console.log("1.j)", ifTest(null));
console.log("1.j)", ifTest(undefined));
console.log("1.j)", ifTest({}));
console.log("1.j)", ifTest({}.enEgenskap));

console.log("1.k)", !(false && false));
console.log("1.k)", !(false && true));
console.log("1.k)", !(true && false));
console.log("1.k)", !(true && true));

console.log("1.l)", !0 == true);
console.log("1.l)", !0 === true);

console.log("1.m)", !null || {});
console.log("1.n)", !(null || {}));
console.log("1.n)", null || !{});
