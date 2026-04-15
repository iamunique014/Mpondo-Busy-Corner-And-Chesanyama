document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const specialBtn = document.getElementById("specialBtn");
  const specialMessage = document.getElementById("specialMessage");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (specialBtn && specialMessage) {
    specialBtn.addEventListener("click", () => {
      specialMessage.textContent = "Known for a lively atmosphere, late closing hours (2:00 AM), and a 4.6★ Google rating.";
    });
  }
});
