window.onload = init;

function init() {
    window.setInterval(time, 66);
}

function time() {
    var time = new Date();
    var saat = document.getElementById("time");
    saat.innerHTML = time.toLocaleTimeString();
}