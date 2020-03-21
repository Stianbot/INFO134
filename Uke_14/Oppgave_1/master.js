/**--------------------OPPGAVE 1.a--------------------**/
function request(tall_1,tall_2){
  var url = "https://nelson.uib.no/info134demo/addition/" + tall_1 + "/" + tall_2 + "/";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      let utregning = response[tall_1+"+"+tall_2];
      toHTML("id", utregning)
    }
  };
  xhr.send()
}

function toHTML(id,tall) {
  let plassering = document.getElementById(id);
  let element = document.createElement("P");
  element.appendChild(document.createTextNode(tall));
  plassering.appendChild(element)
}

function read(id) {
  let input = document.getElementById(id).value;
  let reg = /([1-9]*)\s([1-9]*)/;
  let match = input.match(reg);
  return [match[1], match[2]]
}

function run(){
  let data = read("tekst");
  request(data[0],data[1])
}

/**--------------------OPPGAVE 1.b--------------------**/
function request_2(obj){
  var payload = JSON.stringify(obj);
  var url = "https://nelson.uib.no/info134demo/addition/";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      let utregning = response[obj["first"]+"+"+obj["second"]];
      toHTML("id_2",utregning)
    }
  };
  xhr.send(payload)
}

function oppgave_1b(){
let data = read("tekst_2");
let object = create_object(data[0],data[1]);
request_2(object)
}

function create_object(tall_1, tall_2){
  return {
    "first": tall_1,
    "second": tall_2
  }
}
