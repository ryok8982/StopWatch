let time = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let millisecond = 0;

let interval;
let status = "stop";

function stopWatch(){
  millisecond++;
  if(millisecond / 10 == 1){
    seconds++;
    millisecond = 0;
    if(seconds / 60 == 1){
      minutes++;
      seconds = 0;
      if(minutes / 60 == 1){
        hours++;
        minutes=0;
      }
    }
  } 
  
  
  time.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + millisecond;
  
  
}


function eventStart(){
  if(status == "stop"){
 interval = setInterval(stopWatch, 100);
 status = "start";
  }else{
    alert("今は押せません");
  }
  
}

function eventStop(){
  clearInterval(interval);
  status = "stop";
}

function eventReset(){
  clearInterval(interval);
  status = "stop";
  time.innerHTML = "0:0:0:0"
  hours = 0;
  minutes = 0;
  seconds = 0;
  millisecond = 0;
}