const date = new Date();
const startingDate = new Date('2023-02-09T21:30:00')
console.log(startingDate);
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let getMinutes = date.getMinutes();
let getHours = date.getHours();

let sDay = startingDate.getDate();
let sMonth = startingDate.getMonth() + 1;
let sYear = startingDate.getFullYear();
let sGetMinutes = startingDate.getMinutes();
let sGetHours = startingDate.getHours();





let fullDate = `${month}.${day}.${year}`;
let timePassed = date - startingDate

const options = { style: 'decimal', maximumFractionDigits: 0, minimumFractionDigits: 0 };


let months;
if(day > sDay){
    months =  month - sMonth;
}else{
    months =  month - sMonth - 1;
}

    let years = year - sYear;
    let days = Math.floor(timePassed / (1000 * 60 * 60 * 24)); 
    console.log(days);
    let hours = Math.floor(timePassed / (1000 * 60 * 60));
    hours = hours.toLocaleString('en-US', options);
    console.log(hours);
    let minutes = Math.floor(timePassed / (1000 * 60));
    minutes = minutes.toLocaleString('en-US', options);
    console.log(minutes);
    let millisec = Math.floor(timePassed / (1000));
    console.log(millisec);


const setDate = document.querySelector('.date');
const setDays = document.querySelector('.days');
const setHours = document.querySelector('.hours');
const setMinutes = document.querySelector('.minutes');
const setMonths = document.querySelector('.months');
const setYears = document.querySelector('.years');


setDate.textContent = fullDate;
setMonths.textContent = months;
setDays.textContent = days;
setMinutes.textContent = minutes;
setHours.textContent = hours;
setYears.textContent = years;

