function endre(id, farge) {
  var avsnittet = hentElement(id)
  //var nytt = '<a href="#">død lenke</a>';
  avsnittet.style.color=farge
  //avsnittet.innerHTML = nytt;
}

function hentElement(id) {
  return document.getElementById(id)
}

//endre("avsnittet", "blue")

window.onload = function() {endre("avsnittet_2", "yellow")}
