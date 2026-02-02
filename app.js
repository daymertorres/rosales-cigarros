const display = document.getElementById("display");
const keys = document.querySelectorAll("[data-key]");
const deleteBtn = document.getElementById("deleteBtn");
const callBtn = document.getElementById("callBtn");
const info = document.getElementById("info");
const closeInfo = document.getElementById("closeInfo");

let value = "";

// Mostrar siempre el número escrito
function updateDisplay() {
  display.textContent = value;
  deleteBtn.classList.toggle("hidden", value.length === 0);
}

// Teclas
keys.forEach(btn => {
  btn.addEventListener("click", () => {
    value += btn.dataset.key;
    updateDisplay();

    // Código secreto iOS
    if (value === "*#06#") {
      setTimeout(() => {
        info.style.display = "block";
      }, 250);
    }
  });
});

// Borrar carácter
deleteBtn.addEventListener("click", () => {
  value = value.slice(0, -1);
  updateDisplay();
});

// Botón llamar (solo simula)
callBtn.addEventListener("click", () => {
  if (value === "*#06#") return;
  value = "";
  updateDisplay();
});

// Cerrar info
closeInfo.addEventListener("click", () => {
  info.style.display = "none";
  value = "";
  updateDisplay();
});