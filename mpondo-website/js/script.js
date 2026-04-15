document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const specialBtn = document.getElementById("specialBtn");
  const specialMessage = document.getElementById("specialMessage");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (specialBtn && specialMessage) {
    specialBtn.addEventListener("click", () => {
      specialMessage.textContent = "Today's special: Buy 1 Beef Ribs Plate, get free 500ml drink!";
    });
  }
});
