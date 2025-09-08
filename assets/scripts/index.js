const boardCont = document.querySelector("#SketchBoard");
const titleSection = document.querySelector("#Header");

function initialise() {
  const title = document.createElement("h1");
  title.innerText = "Hello world";
  titleSection.appendChild(title);
  populateBoard();
}
initialise();

function populateBoard(totalDivs = 16) {
  let boardElems = [];
  for (var i = 0; i < totalDivs; i++) {
    const div = document.createElement("div");
    //div.innerText = `I am div no${i}`;
    boardElems.push(div);
  }
  boardElems.forEach((elem) => {
    boardCont.appendChild(elem);
  });
}
