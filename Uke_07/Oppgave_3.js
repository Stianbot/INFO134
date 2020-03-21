//3.a)
function teller() {
  teller.verdi = teller.verdi + 2;
  return teller.verdi
}
teller.verdi = -1;

//3.b)

function teller2(n) {
  if (n) {
    teller2.verdi = n;
    return n
  }
  teller2.verdi = teller2.verdi += 1;
  return teller2.verdi
}
teller2.verdi = 0;


//3.d)

function makeCounter (limit, counter, step, loop) {
  if (step === undefined) {
    step = 1;
  }
  if (counter === undefined) {
    counter == 0;
  }
  if (loop === undefined) {
    loop = counter;
  }

  function counterFunction(){
    var result = counterFunction.counter;

    if (counterFunction.counter + counterFunction.step < counterFunction.limit) {
      counterFunction.counter = counterFunction.counter + counterFunction.step;
    } else {
      counterFunction.counter = counterFunction.loop;
    }
    if (result !== false) {
      return result;
    }
  }
  counterFunction.counter = counter;
  counterFunction.step = step;
  counterFunction.limit = limit;
  counterFunction.loop = loop;

  return counterFunction;
}
