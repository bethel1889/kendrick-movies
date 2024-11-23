document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Back-to-Top button functionality
  const backToTopButton = document.getElementById("backToTop");
  window.onscroll = function () {
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle");

  // Check if there's a saved theme in localStorage and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.textContent =
      savedTheme === "light-mode"
        ? "Switch to Dark Theme"
        : "Switch to Light Theme";
  }

  // Theme toggle click event
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    const theme = document.body.classList.contains("light-mode")
      ? "light-mode"
      : "dark-mode";
    this.textContent =
      theme === "light-mode" ? "Switch to Dark Theme" : "Switch to Light Theme";

    // Save the theme preference to localStorage
    localStorage.setItem("theme", theme);
  });
});
