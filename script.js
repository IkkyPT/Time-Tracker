// Setting up timer 

let hh = 0;
let mm = 0;
let ss = 0;
let cron;
let isStartOn = false;

function start(){
    if (isStartOn == false) {
        timer();
        cron = setInterval(() => { timer(); }, 1000);
        isStartOn = true;
    }
}

function reset(){
    ss = 0;
    mm = 0;
    hh = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    stop();
    isStartOn = false;
}

function stop(){
    clearInterval(cron);
    isStartOn = false;
}

function timer(){
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
    if (mm == 60){
        mm = 0;
        hh++;
        }
    }

    document.getElementById('hour').innerHTML = returnData(hh);
    document.getElementById('minute').innerHTML = returnData(mm);
    document.getElementById('second').innerHTML = returnData(ss);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}

// Setting up currently date and hour

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function updateDateTime() {
  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]}, ${year}`;
  const formattedTime = `${returnData(today.getHours())}:${returnData(today.getMinutes())}:${returnData(today.getSeconds())}`;

  document.getElementById("current-date").innerHTML = formattedDate;
  document.getElementById("current-time").innerHTML = formattedTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);