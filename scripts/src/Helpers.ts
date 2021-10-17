import appData from "./appData";

const inputValue = <HTMLInputElement>document.querySelector("#task");
const tasksContainer = <HTMLLIElement>document.querySelector(".cards");
const card = <HTMLElement>document.querySelector(".cards__card");

// from input 🍊

function renderNewCard() {
  //creating elements
  const cardContainer: HTMLDivElement = document.createElement("div");
  const cardTitle: HTMLElement = document.createElement("p");
  const cardButtonsDiv: HTMLDivElement = document.createElement("div");
  const cardStartButton: HTMLButtonElement = document.createElement("button");
  const cardFinishButton: HTMLButtonElement = document.createElement("button");
  const cardEditButton: HTMLButtonElement = document.createElement("button");
  const cardDeleteButton: HTMLButtonElement = document.createElement("button");
  const deleteIcon: HTMLImageElement = document.createElement("img");

  // appending childs to parents
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardButtonsDiv);
  cardButtonsDiv.appendChild(cardStartButton);
  cardButtonsDiv.appendChild(cardFinishButton);
  cardButtonsDiv.appendChild(cardEditButton);
  cardButtonsDiv.appendChild(cardDeleteButton);
  cardDeleteButton.appendChild(deleteIcon);

  // adding class names and attrs
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

  // adding values
  cardTitle.innerText = `${inputValue.value}🌼${cardContainer.getAttribute(
    "data-status"
  )} `;
  cardStartButton.innerText = "start";
  cardFinishButton.innerText = "done";
  deleteIcon.src = "./assets/trash.svg";
  deleteIcon.alt = "delete";

  //adding the card to parent
  tasksContainer.appendChild(cardContainer);

  const newEl: { id: any; taskStatus: string; title: string } = {
    id: cardContainer.getAttribute("id"),
    taskStatus: "todo",
    title: inputValue.value,
  };
  appData.push(newEl);
  inputValue.value = "";
}

// from appData itself 🍊

function renderAll() {
  appData.map((item) => {
    const cardContainer: HTMLDivElement = document.createElement("div");
    const cardTitle: HTMLElement = document.createElement("p");
    const cardButtonsDiv: HTMLDivElement = document.createElement("div");
    const cardStartButton: HTMLButtonElement = document.createElement("button");
    const cardFinishButton: HTMLButtonElement =
      document.createElement("button");
    const cardDeleteButton: HTMLButtonElement =
      document.createElement("button");
    const deleteIcon: HTMLImageElement = document.createElement("img");

    // appending childs to parents
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardButtonsDiv);
    cardButtonsDiv.appendChild(cardStartButton);
    cardButtonsDiv.appendChild(cardFinishButton);
    cardButtonsDiv.appendChild(cardDeleteButton);
    cardDeleteButton.appendChild(deleteIcon);

    // adding class names and attrs
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

    // adding values
    cardTitle.innerText = `${item.title}🌼${item.taskStatus}`;
    cardStartButton.innerText = "start";
    cardFinishButton.innerText = "done";
    deleteIcon.src = "./assets/trash.svg";
    deleteIcon.alt = "delete";

    //adding the card to parent
    tasksContainer.appendChild(cardContainer);
  });
}

function showAll() {
  for (let i = 0; i < tasksContainer.children.length; i++) {
    const childCard = <HTMLDivElement>tasksContainer.children[i];
    childCard.style.display = "flex";
  }
}

function renderByStatus(status: string) {
  showAll();
  for (let i = 0; tasksContainer.children.length; i++) {
    const childCard = <HTMLDivElement>tasksContainer.children[i];
    if (childCard.getAttribute("data-status") !== status) {
      childCard.style.display = "none";
    }
  }
}

function changeStatus(target: HTMLElement, newStatus: string) {
  const parent = <HTMLElement>target.parentNode?.parentNode;
  parent.setAttribute("data-status", newStatus);
  parent.style.display = "none";
}

// function statusClickStyles(targ:HTMLElement){
//   targ.parentNode.style.backgroundColor = "#000";
//   targ.style.color = "#fff";
// }

export { renderAll, renderByStatus, showAll, changeStatus, renderNewCard };
