// Obtener los elementos de los botones
var actionButtons = document.querySelectorAll(".action-button");  

// Calcular el ancho del texto más largo
var maxWidth = Array.from(actionButtons).reduce((max, button) => {
  return Math.max(max, button.offsetWidth);
}, 0);

// Establecer el ancho del texto más largo como el ancho de todos los botones
actionButtons.forEach((button) => {
  button.style.width = maxWidth + "px";
});

const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleButton.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleButtonIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars-staggered";

};
