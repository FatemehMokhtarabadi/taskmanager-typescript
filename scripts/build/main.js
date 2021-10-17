import {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
} from "./Functions.js";
import { renderByStatus, renderAll, showAll } from "./Helpers.js";
renderAll();
const addBtn = document.querySelector(".form__btn");
const searchInput = document.getElementById("search");
const tasksContainer = document.querySelector(".cards");
const allStatus = document.querySelector(".all");
const todoStatus = document.querySelector(".todo");
const inProgressStatus = document.querySelector(".inProgress");
const doneStatus = document.querySelector(".done");
addBtn.addEventListener("click", addTaskHandler);
allStatus.addEventListener("click", function (event) {
  showAll();
});
todoStatus.addEventListener("click", function (event) {
  renderByStatus("todo");
});
inProgressStatus.addEventListener("click", function (event) {
  renderByStatus("inProgress");
});
doneStatus.addEventListener("click", function (event) {
  renderByStatus("done");
});
tasksContainer.addEventListener("click", function (event) {
  const clickedCard = event.target;
  startTaskHandler(clickedCard);
  doneHandler(clickedCard);
  deleteTaskHandler(clickedCard);
});
searchInput.addEventListener("keyup", searchHandler);
//# sourceMappingURL=main.js.map
