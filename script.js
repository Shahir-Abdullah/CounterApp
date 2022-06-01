const btn = document.getElementById("btnIncrement");
const textArea = document.getElementById("txtCnt");
const timerBody = document.getElementById("timerId");
const startBtn = document.getElementById("btnStart");
const stopBtn = document.getElementById("btnStop");

timerBody.innerHTML = '00:00:00';
textArea.innerHTML = '0';

let interval;
let times = timerBody.innerHTML.split(":");
let s = 0;
let m = 0;
let h = 0;
let cnt = 0;
let startClicked = false;

var performCount = makeCounter();

function timer(){
    times = timerBody.innerHTML.split(":");
    s = parseInt(times[2]);
    m = parseInt(times[1]);
    h = parseInt(times[0]);
    s++;
    if(s>60){
        s = 0;
        m++;
        if(m>60){
            m = 0;
            h++;
        }
    }
    var hh, ss, mm;
    if(s < 10){
        ss = "0" + s;
    }else{
        ss = s;
    }
    if(m < 10){
        mm = "0"+m;
    }else{
        mm = m;
    }
    if(h < 10){
        hh = "0"+h;
    }else{
        hh = h;
    }
    timerBody.innerHTML = hh+":"+mm+":"+ss;
};


stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    startClicked = false;
});

startBtn.addEventListener("click", () => {
    if(startClicked==false){
        interval = setInterval(timer, 1000);
        startClicked = true;
    }
    
});

btn.addEventListener("click", () => {
    textArea.innerHTML =  performCount();
});


function makeCounter(){
    var count = 0;
    function counter(){
        count = count + 1;
        return count;
    }
    return counter;
}