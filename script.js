// To get Current Weekday
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDate = new Date();
let day = weekday[currentDate.getDay()];
document.getElementById("CurrentDay").innerHTML = day;


// To get Current Time
const CurrentUTCtime = new Date();
let time = CurrentUTCtime.getTime();
document.getElementById("CurrentUTCtime").innerHTML = time;