const boardCont = document.querySelector("#SketchBoard");
const boardWidth = boardCont.offsetWidth;
const titleSection = document.querySelector("#Header");

function initialise() {
  const title = document.createElement("h1");
  title.innerText = "Hello world";
  titleSection.appendChild(title);
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
    //div.innerText = `I am div no${i}`;
    boardElems.push(div);
  }
  boardElems.forEach((elem) => {
    boardCont.appendChild(elem);
  });
}
