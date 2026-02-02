let display = document.getElementById("display");
let info = document.getElementById("info-screen");

document.querySelectorAll(".keypad button").forEach(btn => {
  btn.onclick = () => display.textContent += btn.textContent;
});

document.querySelector(".call").onclick = () => {
  if (display.textContent === "*#06#") {
    info.classList.remove("hidden");
    display.textContent = "";
  }
};

function closeInfo() {
  info.classList.add("hidden");
}