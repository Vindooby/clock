  document.getElementById("clock")
  document.getElementById("clock2")
  document.getElementById("clock3")
  document.getElementById("time")
  var clock=document.getElementById("clock")
  var clock2=document.getElementById("clock2")
  var clock3=document.getElementById("clock3")
  var pm=document.getElementById("pm")
  // var time=document.getElementById("time")

setInterval(function(){
var date = new Date()
var sec=date.getSeconds()
var min=date.getMinutes()
var hour=date.getHours()
var dumb=document.getElementById("dumb")
var time=document.getElementById("time")
if (sec <= 9)sec='0'+sec;
if (min <= 9)min='0'+min;
if (hour <= 9)hour= '0'+hour;

clock.innerHTML= hour;
clock2.innerHTML=min;
clock3.innerHTML=sec;
var color="#"+hour+min+sec;
document.body.style.background=color;
time.innerText=hour+":"+ min+":"+ sec;

},1000)




var date=new Date()
date.getDay()
console.log
