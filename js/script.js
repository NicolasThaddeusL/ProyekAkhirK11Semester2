document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.querySelector(".dark-mode");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  updateDarkModeButtonText();

  if (!darkModeButton) {
    return;
  }

  darkModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateDarkModeButtonText();
  });

  function updateDarkModeButtonText() {
    if (!darkModeButton) {
      return;
    }

    if (body.classList.contains("dark-mode")) {
      darkModeButton.textContent = "Mode Terang";
      darkModeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
      darkModeButton.textContent = "Mode Gelap";
      darkModeButton.setAttribute("aria-label", "Switch to dark mode");
    }
  }
});