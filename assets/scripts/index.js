const boardCont = document.querySelector("#SketchBoard");
const boardWidth = boardCont.offsetWidth;
const titleSection = document.querySelector("#Header");

function initialise() {
  populateBoard();
}
initialise();

function populateBoard(divsPerSide = 16) {
  let boardElems = [];
  let divWidth = boardWidth / divsPerSide;
  const totalDivs = divsPerSide * divsPerSide;
  for (var i = 0; i < totalDivs; i++) {
    const div = document.createElement("div");
    div.style.width = divWidth + "px";
    div.style.height = divWidth + "px";
    div.addEventListener(
      "mouseover",
      () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        //div.classList.add("drawn");
        div.style.backgroundColor = "#" + randomColor;
      },
      { once: true },
    );
    div.addEventListener("mouseover", () => {
      let opacity = window.getComputedStyle(div).getPropertyValue("opacity");
      if (opacity > 0 && opacity <= 1) {
        opacity = opacity - 0.1;
      }
      div.style.opacity = opacity;
    });
    //div.innerText = `I am div no${i}`;
    boardElems.push(div);
  }
  boardElems.forEach((elem) => {
    boardCont.appendChild(elem);
  });
}
function deleteBoard() {
  boardCont.innerHTML = "";
}

function getUserBoardWidth() {
  let boardChoice = parseInt(
    prompt(
      "Enter your number of grid squares for a side, between 0 and 100",
      "16",
    ),
  );
  validateUserChoice(boardChoice);
}

function validateUserChoice(choice) {
  if (Number.isInteger(choice) && choice > 0 && choice < 100) {
    console.log(choice);
    deleteBoard();
    populateBoard(choice);
  } else {
    getUserBoardWidth();
  }
}
