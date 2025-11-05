// Script base de DevSyntax Academy

document.addEventListener("DOMContentLoaded", () => {
  console.log("DevSyntax Academy cargado correctamente ✅");

  const btnCursos = document.querySelector(".btn-primary");
  if (btnCursos) {
    btnCursos.addEventListener("click", () => {
      window.location.href = "pages/cursos.html";
    });
  }
});
