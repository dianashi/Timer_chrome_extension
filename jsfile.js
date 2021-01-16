var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.value = 25;
    ws.value = "00";

    bm.value = 5;
    bs.value = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ws.value != 0){
        ws.value--;
    } else if(wm.value != 0 && ws.value == 0){
        ws.value = 59;
        wm.value--;
    }

    //Break Timer Countdown
    if(wm.value == 0 && ws.value == 0){
        if(bs.value != 0){
            bs.value--;
        } else if(bm.value != 0 && bs.value == 0){
            bs.value = 59;
            bm.value--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.value == 0 && ws.value == 0 && bm.value == 0 && bs.value == 0){
        wm.value = 25;
        ws.value = "00";

        bm.value = 5;
        bs.value = "00";

        document.getElementById('counter').innerText++;
        stopInterval()
        startTimer = undefined;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}

