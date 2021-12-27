class CalendarView {
  #calendar = document.getElementById("calendar");
  #header = document.querySelector(".header-container");
  #rightButton = document.querySelector(".right-btn");
  #leftButton = document.querySelector(".left-btn");
  #dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  #monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  clearCalendar() {
    this.#calendar.innerHTML = "";
  }

  addHandlerMoveMonth(handler, currentInfo) {
    let year = currentInfo.year;
    let month = currentInfo.month;
    this.#leftButton.addEventListener("click", function (e) {
      if (month === 0) {
        year -= 1;
        month = 11;
      } else {
        month -= 1;
      }
      handler(new Date(year, month));
    });
    this.#rightButton.addEventListener("click", function (e) {
      if (month === 11) {
        year += 1;
        month = 0;
      } else {
        month += 1;
      }
      handler(new Date(year, month));
    });
  }

  addHandlerShowDate(currentInfo) {
    const headerDate = this.#header.querySelector(".header-date");
    const headerDay = this.#header.querySelector(".header-day");
    const headerMonth = this.#header.querySelector(".header-month");

    const monthName = this.#monthName.slice();
    const dayName = this.#dayName.slice();
    this.#calendar.addEventListener("click", function (e) {
      const datePicked = e.target;
      if (datePicked.tagName !== "SPAN") return;
      let year = currentInfo.year;
      let month = currentInfo.month;
      let date = +datePicked.textContent;
      if (datePicked.className === "pre-date") {
        if (month === 0) {
          year--;
          month = 11;
        } else {
          month--;
        }
      } else if (datePicked.className === "post-date") {
        if (month === 12) {
          year++;
          month = 0;
        } else {
          month++;
        }
      }
      const updatedDate = new Date(year, month, date);
      headerDay.textContent = dayName[updatedDate.getDay()];
      headerDate.textContent = updatedDate.getDate();
      headerMonth.textContent = `${
        monthName[updatedDate.getMonth()]
      } ${updatedDate.getFullYear()}`;
    });
  }

  renderHeaderInfo(currentInfo) {
    const today = currentInfo.today;
    const headerDay = this.#header.querySelector(".header-day");
    const headerMonth = this.#header.querySelector(".header-month");
    const headerDate = this.#header.querySelector(".header-date");

    if (
      currentInfo.year === today.getFullYear() &&
      currentInfo.month === today.getMonth()
    ) {
      headerDate.textContent = `${today.getDate()}`;
      headerDay.textContent = this.#dayName[today.getDay()];
    } else {
      headerDate.textContent = "1";
      headerDay.textContent = this.#dayName[currentInfo.day];
    }
    headerMonth.textContent = `${this.#monthName[currentInfo.month]} ${
      currentInfo.year
    }`;
  }

  insertCalendarEmptySpace(currentInfo) {
    const rowIdx = this.#calendar.insertRow();
    for (let i = 0; i < currentInfo.firstDayofMonth; i++) {
      const cell = rowIdx.insertCell();
    }
  }

  insertCalendarDates(currentInfo) {
    let date = 1;
    let rowCount = 0;
    let day = currentInfo.firstDayofMonth;
    while (date <= currentInfo.lastDate) {
      const cell = this.#calendar.rows[rowCount].insertCell();
      cell.innerHTML = `<span class='date-${date}'>${date}</span>`;
      this.renderTodayDate(date, currentInfo, cell);
      date++;
      day++;
      if (day > 6) {
        day = 0;
        this.#calendar.insertRow();
        rowCount++;
      }
    }
  }

  renderTodayDate(date, currentInfo, cell) {
    const isTodayDate = currentInfo.today.getDate() === date;
    const isTodayMonth = currentInfo.today.getMonth() === currentInfo.month;
    const isTodayYear = currentInfo.today.getFullYear() === currentInfo.year;
    if (!isTodayDate || !isTodayMonth || !isTodayYear) return;
    cell.firstChild.classList.add("today-effect");
  }

  insertPreMonthDates(currentInfo) {
    const firstRow = this.#calendar.rows[0];
    let dateCount = 0;
    for (let i = currentInfo.firstDayofMonth - 1; i >= 0; i--) {
      const targetDate = new Date(
        currentInfo.year,
        currentInfo.month,
        dateCount
      ).getDate();
      firstRow.cells[
        i
      ].innerHTML = `<span class='pre-date'>${targetDate}</span>`;
      dateCount--;
    }
  }

  insertPostMonthDates(currentInfo) {
    const lastRow = this.#calendar.rows[this.#calendar.rows.length - 1];
    const cellCount = 6 - currentInfo.lastDayOfMonth;
    let dateCount = 1;
    for (let i = 0; i < cellCount; i++) {
      const targetDate = new Date(
        currentInfo.year,
        currentInfo.month + 1,
        dateCount
      ).getDate();
      const cell = lastRow.insertCell();
      cell.innerHTML = `<span class='post-date'>${targetDate}</span>`;
      dateCount++;
    }
  }
}

export default new CalendarView();
