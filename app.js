const number = document.getElementById("number");
const deleteBtn = document.getElementById("delete");

document.querySelectorAll(".dialer button").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();
    if (value === "⌫") return;
    if (btn.classList.contains("call")) return;

    number.textContent += value;
    deleteBtn.style.display = "block";
  });
});

deleteBtn.addEventListener("click", () => {
  number.textContent = number.textContent.slice(0, -1);
  if (!number.textContent) deleteBtn.style.display = "none";
});

/* ❌ PREVENIR ZOOM DOBLE TAP iOS */
let lastTouchEnd = 0;
document.addEventListener("touchend", e => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, { passive: false });