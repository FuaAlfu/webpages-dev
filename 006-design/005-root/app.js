const dateElement = document.getElementById('date');
// const dateElement = document.getElementById('time');
dateDisplay();

function dateDisplay(){
//date
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();
const fullDate = `..:: ${currentMonth}/${currentDay}/${currentYear} ::..`
document.getElementById('date').innerText = fullDate;

//current time
// const hours = addZero(currentDate.getHours());
// const minutes = addZero(currentDate.getMinutes());
// const seconds = addZero(currentDate.getSeconds());
// const milSeconds = addZero(currentDate.getMilliseconds());

// const currentFullTime = `${hours}:${minutes}:${seconds}:${milSeconds}`

// document.getElementById('time').innerText = currentFullTime;
}

// function addZero(){
//     return number < 10 ? `0${number}` : number;
// }