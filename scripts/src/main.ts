import {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
} from "./Functions";

import { renderByStatus, renderAll, showAll } from "./Helpers";

renderAll();

// D O M    E L E M E N T S 🍊

const addBtn = <HTMLButtonElement>document.querySelector(".form__btn");
const searchInput = <HTMLInputElement>document.getElementById("search");
const tasksContainer = <HTMLDivElement>document.querySelector(".cards");

// status buttons
const allStatus = <HTMLButtonElement>document.querySelector(".all");
const todoStatus = <HTMLButtonElement>document.querySelector(".todo");
const inProgressStatus = <HTMLButtonElement>(
  document.querySelector(".inProgress")
);
const doneStatus = <HTMLButtonElement>document.querySelector(".done");

// E V E N T   L I S T E N E R S 🍊

// adding new task 🍕
addBtn.addEventListener("click", addTaskHandler);

// filtering renders based on status `(todo/inProgress/done) 🍕

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

// changing task status + deleting tasks, using event delegation 🍕

tasksContainer.addEventListener("click", function (event) {
  const clickedCard = event.target;
  startTaskHandler(clickedCard);
  doneHandler(clickedCard);
  deleteTaskHandler(clickedCard);
});

// search between tasks 🍕

searchInput.addEventListener("keyup", searchHandler);
