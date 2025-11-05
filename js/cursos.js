// Botón de cursos
document.getElementById("btnCursos").addEventListener("click", () => {
  alert("Próximamente disponibles los cursos de HTML, CSS, JavaScript y Python 🚀");
});

// Botón para alternar tema
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

// Si ya había una preferencia guardada, la aplica
if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "🌞";
}

// Evento al hacer click en el botón
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
