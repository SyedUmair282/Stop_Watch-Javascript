var min0 = 0;
var sec0 = 0;
var msec0 = 0;
var interval;



function msec() {
    msec0++;
    var msec1 = document.getElementById("msec");
    msec1.innerHTML = msec0;

    if (msec0 >= 100) {
        sec0++;
        msec0 = 0;
        var sec1 = document.getElementById("sec");
        sec1.innerHTML = sec0;
    } else if (sec0 >= 60) {
        min0++;
        msec0 = 0;
        sec0 = 0;
        var min1 = document.getElementById("min");
        min1.innerHTML = min0;
    }
}

function start() {
    interval = setInterval(msec, 10);
    var start = document.getElementsByTagName("button");
    start[0].disabled = true;

}

function stop() {
    clearInterval(interval);
    var start = document.getElementsByTagName("button");
    start[0].disabled = false;
}

function reset() {
    var msec1 = document.getElementById("msec");
    msec1.innerHTML = 0;
    var sec1 = document.getElementById("sec");
    sec1.innerHTML = 0;
    var min1 = document.getElementById("min");
    min1.innerHTML = 0;
}