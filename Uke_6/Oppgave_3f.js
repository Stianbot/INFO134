//3.f)

var protoSpesPerson = Object.create(protoPerson);
protoSpesPerson.alder = function () {
  return 2018 - this.født;
};
protoSpesPerson.hils = function () {
  console.log("Ærede " + this.navn);
};

var elizabeth = Object.create(protoSpesPerson);
elizabeth.fornavn = "Elizabeth";
elizabeth.etternavn = "II";
elizabeth.født = 1926;


console.log(elizabeth);
