const board = document.querySelector("#board");
const colors = [
  "rgb(5, 109, 246)",
  "rgb(138, 5, 246)",
  "rgb(232, 76, 76)",
  "rgb(243, 141, 33)",
  "rgb(242, 249, 25)",
  "rgb(24, 248, 4)",
  "rgb(4, 236, 248)",
  "rgb(246, 5, 238)",
  "rgb(246, 5, 101)",
];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
