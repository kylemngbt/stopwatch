let [seconds, minutes, hours] = [0,0,0];
const displayTime = document.querySelector("#display-time");

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
  setInterval(stopwatch,1000);
}