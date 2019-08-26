var rs = document.getElementById("r");
var gs = document.getElementById("g");
var bs = document.getElementById("b");
var imgy = document.getElementById("changing");

console.log("hi");
function colorchange() {
    imgy.style.backgroundColor = `rgb(${rs.value}, ${gs.value}, ${bs.value})`;
    console.log("asdf");
}

window.setInterval(colorchange, 100);