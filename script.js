"use strict";

const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calendar = document.getElementById("calendar");
const currentInfo = {
  year: 0,
  month: 0,
  todayDate: 0,
  lastDate: 0,
  firstDayofMonth: 0,
};

const init = function () {
  const dateData = new Date();
  currentInfo.year = dateData.getFullYear();
  currentInfo.month = dateData.getMonth();
  currentInfo.todayDate = dateData.getDate();
  currentInfo.lastDate = new Date(
    currentInfo.year,
    currentInfo.month + 1,
    0
  ).getDate();
  currentInfo.day = dateData.getDay();
  currentInfo.firstDay = new Date(
    currentInfo.year,
    currentInfo.month,
    1
  ).getDay();
};
init();
console.log(currentInfo);

// for (let i = 0; i < 6; i++) {
//   const row = calendar.insertRow();
//   for (let j = 0; j < 7; j++) {
//     console.log(`row : ${row}`);
//     const cell = row.insertCell();
//     cell.innerHTML = "HI";
//   }
// }
