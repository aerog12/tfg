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
