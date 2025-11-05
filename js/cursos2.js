document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de cursos cargada correctamente ✅");

  const buttons = document.querySelectorAll(".btn-course");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Próximamente disponible 💻");
    });
  });
});
