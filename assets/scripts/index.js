function initialise() {
  const titleSection = document.querySelector("#Header");
  const title = document.createElement("h1");
  title.innerText = "Hello world";
  titleSection.appendChild(title);
}
initialise();
