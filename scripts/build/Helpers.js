import appData from "./appData.js";
const inputValue = document.querySelector("#task");
const tasksContainer = document.querySelector(".cards");
const card = document.querySelector(".cards__card");
function renderNewCard() {
  const cardContainer = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardButtonsDiv = document.createElement("div");
  const cardStartButton = document.createElement("button");
  const cardFinishButton = document.createElement("button");
  const cardEditButton = document.createElement("button");
  const cardDeleteButton = document.createElement("button");
  const deleteIcon = document.createElement("img");
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardButtonsDiv);
  cardButtonsDiv.appendChild(cardStartButton);
  cardButtonsDiv.appendChild(cardFinishButton);
  cardButtonsDiv.appendChild(cardEditButton);
  cardButtonsDiv.appendChild(cardDeleteButton);
  cardDeleteButton.appendChild(deleteIcon);
  cardContainer.classList.add("cards__card");
  cardContainer.setAttribute("id", `${appData.length}`);
  cardContainer.setAttribute("data-status", "todo");
  cardTitle.classList.add("cards__title");
  cardButtonsDiv.classList.add("cards__buttons");
  cardStartButton.classList.add("cards__btn");
  cardStartButton.classList.add("start-btn");
  cardFinishButton.classList.add("cards__btn");
  cardFinishButton.classList.add("finish-btn");
  cardDeleteButton.classList.add("cards__btn");
  cardDeleteButton.classList.add("delete");
  cardDeleteButton.classList.add("icon-btn");
  deleteIcon.classList.add("cards__icon");
  cardTitle.innerText = `${inputValue.value}🌼${cardContainer.getAttribute(
    "data-status"
  )} `;
  cardStartButton.innerText = "start";
  cardFinishButton.innerText = "done";
  deleteIcon.src = "./assets/trash.svg";
  deleteIcon.alt = "delete";
  tasksContainer.appendChild(cardContainer);
  const newEl = {
    id: cardContainer.getAttribute("id"),
    taskStatus: "todo",
    title: inputValue.value,
  };
  appData.push(newEl);
  inputValue.value = "";
}
function renderAll() {
  appData.map((item) => {
    const cardContainer = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardButtonsDiv = document.createElement("div");
    const cardStartButton = document.createElement("button");
    const cardFinishButton = document.createElement("button");
    const cardDeleteButton = document.createElement("button");
    const deleteIcon = document.createElement("img");
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardButtonsDiv);
    cardButtonsDiv.appendChild(cardStartButton);
    cardButtonsDiv.appendChild(cardFinishButton);
    cardButtonsDiv.appendChild(cardDeleteButton);
    cardDeleteButton.appendChild(deleteIcon);
    cardContainer.classList.add("cards__card");
    cardContainer.setAttribute("data-status", item.taskStatus);
    cardTitle.classList.add("cards__title");
    cardButtonsDiv.classList.add("cards__buttons");
    cardStartButton.classList.add("cards__btn");
    cardStartButton.classList.add("start-btn");
    cardFinishButton.classList.add("cards__btn");
    cardFinishButton.classList.add("finish-btn");
    cardDeleteButton.classList.add("cards__btn");
    cardDeleteButton.classList.add("delete");
    cardDeleteButton.classList.add("icon-btn");
    deleteIcon.classList.add("cards__icon");
    cardTitle.innerText = `${item.title}🌼${item.taskStatus}`;
    cardStartButton.innerText = "start";
    cardFinishButton.innerText = "done";
    deleteIcon.src = "./assets/trash.svg";
    deleteIcon.alt = "delete";
    tasksContainer.appendChild(cardContainer);
  });
}
function showAll() {
  for (let i = 0; i < tasksContainer.children.length; i++) {
    const childCard = tasksContainer.children[i];
    childCard.style.display = "flex";
  }
}
function renderByStatus(status) {
  showAll();
  for (let i = 0; tasksContainer.children.length; i++) {
    const childCard = tasksContainer.children[i];
    if (childCard.getAttribute("data-status") !== status) {
      childCard.style.display = "none";
    }
  }
}
function changeStatus(target, newStatus) {
  var _a;
  const parent =
    (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
  parent.setAttribute("data-status", newStatus);
  parent.style.display = "none";
}
export { renderAll, renderByStatus, showAll, changeStatus, renderNewCard };
//# sourceMappingURL=Helpers.js.map
