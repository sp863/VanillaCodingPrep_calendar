"use strict";

const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let currentDate;

currentDate = new Date();
const currYear = currentDate.getFullYear();
const currMonth = currentDate.getMonth();
const currDate = currentDate.getDate();

const firstDate = new Date(currYear, currMonth, 1);
let year = firstDate.getFullYear(); // 2021
let month = firstDate.getMonth(); // 12
let date = firstDate.getDate(); // 1
let day = firstDate.getDay(); // 0

console.log("-----------------");
console.log(year);
console.log(month + 1);
console.log(date);
console.log(dayName[day]);

let x = day;
for (let i = 0; i < daysCount[month]; i++) {
  console.log(`${i + 1} ${dayName[x]}`);
  x++;
  if (x > 6) x = 0;
}
