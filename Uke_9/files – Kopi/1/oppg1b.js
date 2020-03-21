function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}

function f3() {
    console.log("f3");
}

function setupListeners() {
    var knapp2 = document.getElementById("knapp2");
    knapp2.onclick = f2;

    var knapp3 = document.getElementById("knapp3");
    knapp3.addEventListener("click", f3);    
}
