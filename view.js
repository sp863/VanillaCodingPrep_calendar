class CalendarView {
  #calendar = document.getElementById("calendar");
  #header = document.querySelector(".calendar-header");
  #rightButton = document.querySelector(".right-btn");
  #leftButton = document.querySelector(".left-btn");
  #datePicked = document.querySelectorAll("#td");

  // #date = document.querySelector();
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
      handler(new Date(year, month, 1));
    });
    this.#rightButton.addEventListener("click", function (e) {
      if (month === 11) {
        year += 1;
        month = 0;
      } else {
        month += 1;
      }
      handler(new Date(year, month, 1));
    });
  }

  addHandlerShowDate(handler) {
    this.#calendar = addEventListener("click", function (e) {
      const datePicked = e.target;
      if (datePicked.textContent === "") return;
      // this.#header.querySelector(".header-date").textContent =
      //   datePicked.textContent;
      console.log(datePicked.textContent);
    });
  }

  renderHeaderInfo(currentInfo) {
    const todayDate = new Date();
    const headerDay = this.#header.querySelector(".header-day");
    const headerMonth = this.#header.querySelector(".header-month");
    const headerDate = this.#header.querySelector(".header-date");

    if (
      currentInfo.year === todayDate.getFullYear() &&
      currentInfo.month === todayDate.getMonth()
    ) {
      headerDate.textContent = `${todayDate.getDate()}`;
    } else {
      headerDate.textContent = "1";
    }
    headerDay.textContent = this.#dayName[currentInfo.day];
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
