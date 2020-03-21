function f1() {
    console.log("f1");
}

function f2() {
    console.log("f2");
}

function f3() {
    console.log("f3");
}

window.onload = f2();
window.addEventListener("load", f3);

