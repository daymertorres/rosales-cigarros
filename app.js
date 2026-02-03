const display = document.getElementById("display");
const deleteBtn = document.getElementById("delete");

document.querySelectorAll(".keypad button").forEach(btn => {
  btn.addEventListener("click", () => {
    display.textContent += btn.childNodes[0].textContent;
    deleteBtn.style.display = "block";
  });
});

deleteBtn.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") {
    deleteBtn.style.display = "none";
  }
});