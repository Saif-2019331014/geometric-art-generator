const btn = document.querySelector("#btn");
const shapes = [
  "quad-circle-1",
  "quad-circle-2",
  "quad-circle-3",
  "quad-circle-4",
  "triangle-1",
  "triangle-2",
  "triangle-3",
  "triangle-4",
  "circle",
  "rhombus",
];
const colors = ["#01D2FD", "#FFC700", "#FE9F12", "#06D0C7"];
const boxes = document.querySelectorAll(".container div");

const generateArt = () => {
  boxes.forEach((box) => {
    box.className = "";
    const randomShape = Math.floor(Math.random() * shapes.length);
    const randomColor = Math.floor(Math.random() * colors.length);
    box.classList.add(shapes[randomShape]);
    box.style.backgroundColor = colors[randomColor];
  });
};

btn.addEventListener("click", generateArt);
window.addEventListener("load", generateArt);
