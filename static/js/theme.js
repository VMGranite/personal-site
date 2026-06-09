// Persist dark/light theme preference
(function () {
  const stored = localStorage.getItem("theme");
  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const theme = stored || preferred;
  document.documentElement.setAttribute("data-theme", theme);

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("themeToggle");
    const icon = btn && btn.querySelector(".theme-icon");

    function updateIcon() {
      const t = document.documentElement.getAttribute("data-theme");
      if (icon) icon.textContent = t === "dark" ? "☀" : "☾";
    }

    updateIcon();

    if (btn) {
      btn.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        updateIcon();
      });
    }
  });
})();
