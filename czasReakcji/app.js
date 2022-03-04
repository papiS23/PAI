const colorBox = document.querySelector(".color-box");
const button = document.querySelector(".button");

button.addEventListener("click", startGame);

function startGame() {
  console.log("chuj");
  colorBox.style.background = "rgb(103, 224, 47)";
  button.innerText = "Nacisnij przycisk jak kolor zmieni sie na czerwony";

  randomSec = Math.random();
  console.log(randomSec.substring(2, 3));
}
