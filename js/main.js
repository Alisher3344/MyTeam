document.addEventListener("DOMContentLoaded", function () {
  const darkBtn = document.querySelector(".dark");
  if (darkBtn) {
    darkBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark_mode");
    });
  }

  const ham = document.querySelector(".ham");
  const nav = document.querySelector("nav");
  if (ham && nav) {
    ham.addEventListener("click", function () {
      nav.classList.toggle("burger");
    });
  }
});
