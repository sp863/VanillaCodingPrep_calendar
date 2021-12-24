import * as model from "./model.js";
import view from "./view.js";

const init = function () {
  const dateData = new Date();
  controlCalendar(dateData);
};

const controlCalendar = function (newDateData) {
  view.clearCalendar();
  model.updateCurrentInfo(newDateData);
  view.renderHeaderInfo(model.currentInfo);
  view.insertCalendarEmptySpace(model.currentInfo);
  view.insertCalendarDates(model.currentInfo);
};

const controlShowDate = function () {};

init();
view.addHandlerMoveMonth(controlCalendar, model.currentInfo);
view.addHandlerShowDate(controlShowDate, model.currentInfo);
