const display = document.getElementById("display");
const infoScreen = document.getElementById("infoScreen");
const callBtn = document.getElementById("callBtn");

// Teclas
document.querySelectorAll(".dial-pad button").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    display.textContent += value;
    navigator.vibrate?.(10);
  });
});

// Llamar
callBtn.addEventListener("click", () => {
  if (display.textContent === "*#06#") {
    infoScreen.classList.remove("hidden");
    display.textContent = "";
  }
});

// Cerrar info
function closeInfo() {
  infoScreen.classList.add("hidden");
}