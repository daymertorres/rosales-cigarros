const display = document.getElementById("display");
const keys = document.querySelectorAll("[data-key]");
const deleteBtn = document.getElementById("deleteBtn");
const callBtn = document.getElementById("callBtn");
const info = document.getElementById("info");
const closeInfo = document.getElementById("closeInfo");

let value = "";

function updateDisplay() {
  display.textContent = value;
  deleteBtn.classList.toggle("hidden", value.length === 0);
  display.style.transform = value.length ? "translateY(-8px)" : "translateY(0)";
}

keys.forEach(btn => {
  btn.addEventListener("click", () => {
    value += btn.dataset.key;
    updateDisplay();

    if (value === "*#06#") {
      setTimeout(() => {
        info.style.display = "block";
      }, 250);
    }
  });
});

deleteBtn.addEventListener("click", () => {
  value = value.slice(0, -1);
  updateDisplay();
});

callBtn.addEventListener("click", () => {
  value = "";
  updateDisplay();
});

closeInfo.addEventListener("click", () => {
  info.style.display = "none";
  value = "";
  updateDisplay();
});

/* 🔥 BLOQUEO DOBLE TAP ZOOM (iOS) */
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  { passive: false }
);