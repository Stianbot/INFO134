//1.a)
console.log("----- 1.a -----");
var p1 = {
  fornavn: "Ola",
  etternavn: "Nordmann"
}

var p2 = {
  fornavn: "Kari",
  etternavn: "Nordmann"
}

var fam = [p1, p2];

for(var personID in fam){
  var personObj = fam[personID];
  console.log(personObj.fornavn);
}

var numbers = [0, 1, 2, 4, 6];

for (var number in numbers){
  console.log(numbers[number]);
}

//1.b)
console.log("----- 1.b -----");

var numbers_b = [[1, 2], [3, 4], [5, 6]];

for (var number in numbers_b){
  var svar = numbers_b[number][0] + numbers_b[number][1];
  console.log(svar);
}

var numbers_b_2 = [[1, 1], [1, 2], [2, 3], [3, 5], [5, 8], [8, 13]];

for (var number in numbers_b_2){
  var svar = numbers_b_2[number][0] + numbers_b_2[number][1];
  console.log(svar);
}

// 1.c)
console.log("----- 1.c -----");

var i = 0;
while ( i < fam.length) {
  console.log(fam[i].fornavn);
  i = i+1
}

var z = 0
while (z < numbers_b.length) {
  console.log(numbers_b[z][0] + numbers_b[z][1]);
  z = z+1
}

var y = 0
while (y < numbers_b_2.length) {
  console.log(numbers_b_2[y][0] + numbers_b_2[y][1]);
  y = y+1
}

// 1.d)
console.log("----- 1.d -----");

for (var x = 0; x < fam.length; x++){
  console.log(fam[x].fornavn);
}

for (var x = 0; x < numbers_b.length; x++){
  var svar = numbers_b[x][0] + numbers_b[x][1];
  console.log(svar);
}

for (var x = 0; x < numbers_b_2.length; x++){
  var svar = numbers_b_2[x][0] + numbers_b_2[x][1];
  console.log(svar);
}
