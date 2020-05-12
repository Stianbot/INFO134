var obj = {
  message: "Hei",
  greet: function () {console.log(this.message);},
  get button(){
    if (this.btn) {
      return this.btn
    }
    var knapp = document.createElement("Button")
    knapp.onclick = function() {this.greet()}
    this.btn = knapp
  }
}

function giveOnclick() {
  var p = document.getElementById("2")
  p.onclick = function() {obj.greet()}
}

window.onload = giveOnclick
