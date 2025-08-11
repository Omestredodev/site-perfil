// Seleciona elementos
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Adiciona evento de clique
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
