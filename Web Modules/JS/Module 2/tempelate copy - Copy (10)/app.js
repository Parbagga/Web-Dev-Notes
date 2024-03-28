setInterval(clock,1000);


function clock (){
    const today = new Date();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = today.getDay();

let hours = today.getHours();
let minutes = today.getMinutes();
let sec = today.getSeconds();
let prepand = (hours>12)?"PM": "AM";
  
// Hours
hours = (hours > 12)? hours-12:hours;
hours = (hours <10)? hours = "0" + hours:hours;
// minutes
minutes = (minutes <10)? minutes = "0" + minutes:minutes;
// seconds
sec = (sec <10)? sec = "0" + sec:sec;


    document.querySelector('#clock').innerHTML= ` ${hours}: ${minutes}:${sec}  ${prepand}` + ` ${daylist[day]}`
}


clock();

// let d = new Date();
//   m = d.setMinutes(22);




