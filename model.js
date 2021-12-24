export const currentInfo = {
  today: new Date(),
  year: 0,
  month: 0,
  lastDate: 0,
  day: 0,
  firstDayofMonth: 0,
  lastDayOfMonth: 0,
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
  currentInfo.lastDayOfMonth = new Date(
    currentInfo.year,
    currentInfo.month,
    currentInfo.lastDate
  ).getDay();

  console.log(currentInfo);
};
