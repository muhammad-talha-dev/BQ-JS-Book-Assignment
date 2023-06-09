// Task 1
let currentDatePara = document.getElementById('currentDatePara');
let currentDate = new Date();
currentDatePara.textContent = currentDate;

// Task 2
let currentMonthPara = document.getElementById('currentMonthPara');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
const currentMonth = new Date().getMonth();
const monthName = months[currentMonth];

currentMonthPara.textContent = "Current Month: " + monthName;

// Task 3
let currentDayPara = document.getElementById('currentDayPara');
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentDay = new Date().getDay();
let dayName = days[currentDay];

currentDayPara.textContent = "Today is " + dayName;

// Task 4
let funDayPara = document.getElementById('funDayPara');
currentDay == 0 || currentDay == 6 ? funDayPara.textContent = "Its Fun day." : funDayPara.textContent = "Its " + dayName;

// Task 5
let datePara = document.getElementById('datePara');
let date = new Date().getDate();

date <= 15 ? datePara.textContent = "First fifteen days of the month." : datePara.textContent = "Last fifteen days of the month.";

// Task 7
let currentHours = new Date().getHours();
currentHours < 12 ? alert("Task 6\nIts AM") : alert("Task 6\nIts PM");

// Task 8
let laterDate = new Date(2020, 11, 31);
let laterDatePara = document.getElementById('laterDatePara');

laterDatePara.textContent = "Later Date: " + laterDate;

// Task 11
let currentDatePara2 = document.getElementById('currentDatePara2');
currentDatePara2.textContent = currentDate;
let hourAheadDatePara = document.getElementById('hourAheadDatePara');
currentDate.setHours(currentHours + 1);
hourAheadDatePara.textContent = "After 1 hour it will be: " + currentDate;

// Task 13
    const checkBirthYear = () => {
    let birthYearPara = document.getElementById('birthYearPara');
    let age = document.getElementById('userAge').value;
    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;
    birthYearPara.textContent = "Your birth year is " + birthYear;
}