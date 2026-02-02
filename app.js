const display = document.getElementById("display");
const keys = document.querySelectorAll("[data-key]");
const deleteBtn = document.getElementById("delete");
const info = document.getElementById("info");
const closeInfo = document.getElementById("closeInfo");

let value = "";

keys.forEach(btn => {
  btn.addEventListener("click", () => {
    value += btn.dataset.key;
    display.textContent = value;

    if (value === "*#06#") {
      setTimeout(() => {
        info.style.display = "block";
      }, 300);
    }
  });
});

deleteBtn.addEventListener("click", () => {
  value = value.slice(0, -1);
  display.textContent = value;
});

closeInfo.addEventListener("click", () => {
  info.style.display = "none";
  value = "";
  display.textContent = "";
});