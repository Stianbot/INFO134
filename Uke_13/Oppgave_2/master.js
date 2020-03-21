/*----------OPPGAVE 2)----------*/
function lastNed() {
    var url = "";/*SETT INN FILSTI TIL JSON DOKUMENT*/
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response)
        }
    };
    xhr.send();
}
