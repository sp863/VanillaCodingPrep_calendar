class CalendarView {
  #calendar = document.getElementById("calendar");
  #header = document.querySelector(".calendar-header");
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

  addHandlerShowDate(handler, currentInfo) {
    const headerDate = this.#header.querySelector(".header-date");
    const headerDay = this.#header.querySelector(".header-day");
    const dayName = this.#dayName.slice();
    this.#calendar.addEventListener("click", function (e) {
      const datePicked = e.target;
      if (datePicked.tagName !== "TD" || datePicked.textContent === "") return;
      const tempDay = new Date(
        currentInfo.year,
        currentInfo.month,
        +datePicked.textContent
      ).getDay();
      headerDate.textContent = datePicked.textContent;
      headerDay.textContent = dayName[tempDay];
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
      cell.innerHTML = date;
      cell.setAttribute("class", `date-${date}`);
      date++;
      day++;
      if (day > 6) {
        day = 0;
        this.#calendar.insertRow();
        rowCount++;
      }
    }
  }
}

export default new CalendarView();