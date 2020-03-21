//4.a)

var teller = {
  counter: 3,
  tick: function(){
    if (this.counter === 0){
      return
    }

    this.counter = this.counter - 1;

    // 4.b)
    if (this.onchange){
      this.onchange(this.counter)
    }

    // 4.c)
    if (this.counter === 0 && this.onzero){
      this.onzero();
    }

    // Hører til 4.d)
    if (this.counter === 0){
      finishedAlert()
    }

    return this.counter
},
 // Hører til 4.b)
  /* onchange: function(nyVerdi) {
    this.nyVerdi = nyVerdi;
    console.log("Ny teller-verdi: ", nyVerdi, "!");
  } */

    // 4.f)
    onchange: function(value){
      var btn = document.getElementById("myButton")
      btn.innerHTML = value;
    },

    //4.g)
    onzero: function () {
      var button = document.getElementById("myButton")
      button.disabled = true;
    }

}

//4.d)
function finishedAlert(){
  console.log("The counter reached zero");
}

//4.e)
function changeLabel(newLabel) {
  var btn = document.getElementById('myButton');
  btn.innerHTML = newLabel;
}
