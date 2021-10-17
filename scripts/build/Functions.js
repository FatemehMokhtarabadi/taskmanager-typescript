import { renderNewCard, changeStatus } from "./Helpers.js";
const cards = document.querySelector(".cards");
function addTaskHandler(event) {
  event.preventDefault();
  renderNewCard();
}
function startTaskHandler(target) {
  const targetParent = target.parentNode.parentNode;
  if (target.classList.contains("start-btn")) {
    if (targetParent.getAttribute("data-status") === "inProgress") {
      console.log("inProgress was clicked");
      return;
    } else if (targetParent.getAttribute("data-status") === "todo") {
      changeStatus(target, "inProgress");
    }
  }
}
function doneHandler(target) {
  const targetParent = target.parentNode.parentNode;
  if (target.classList.contains("finish-btn")) {
    targetParent.getAttribute("data-status") === "todo" ||
    targetParent.getAttribute("data-status") === "inProgress"
      ? changeStatus(target, "done")
      : null;
  }
}
function deleteTaskHandler(target) {
  console.log(cards);
  const theCardItself = target.parentNode.parentNode.parentNode;
  if (theCardItself.classList.contains("cards__card")) {
    cards.removeChild(theCardItself);
  }
}
function searchHandler() {
  let input = document.getElementById("search");
  let filter = input.value;
  let parentNodes = document.getElementsByClassName("cards__card");
  for (let i = 0; i < parentNodes.length; i++) {
    if (parentNodes[i].innerText.toLowerCase().includes(filter)) {
      parentNodes[i].style.display = "flex";
    } else {
      parentNodes[i].style.display = "none";
    }
  }
}
export {
  addTaskHandler,
  deleteTaskHandler,
  startTaskHandler,
  searchHandler,
  doneHandler,
};
//# sourceMappingURL=Functions.js.map
