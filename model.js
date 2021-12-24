export const currentInfo = {
  year: 0,
  month: 0,
  // todayDate: new Date().getDate(),
  lastDate: 0,
  firstDayofMonth: 0,
};

export const updateCurrentInfo = function (dateData) {
  currentInfo.year = dateData.getFullYear();
  currentInfo.month = dateData.getMonth();
  currentInfo.lastDate = new Date(
    currentInfo.year,
    currentInfo.month + 1,
    0
  ).getDate();
  currentInfo.day = dateData.getDay();
  currentInfo.firstDayofMonth = new Date(
    currentInfo.year,
    currentInfo.month,
    1
  ).getDay();

  console.log(currentInfo);
};
