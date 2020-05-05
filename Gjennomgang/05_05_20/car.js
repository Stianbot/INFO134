function constructCar(bokstaver, tall){
  var newObject = Object.create(methods);
  newObject.first = bokstaver;
  newObject.last = tall;
  return newObject
}

var methods = {
  reg: function(){
    return this.first + " " + this.last;
  }
}
