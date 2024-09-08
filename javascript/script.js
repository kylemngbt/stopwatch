let [seconds, minutes, hours] = [0,0,0];
const displayTime = document.querySelector("#display-time");
let timer = null;
const stopBtn = document.querySelector("#stop-btn");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn");

function stopwatch() {
  seconds++;
  if(seconds == 60) {
    seconds = 0;
    minutes++;
    if(minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch,1000);
}