document.addEventListener("DOMContentLoaded", function () {
  // Array de rutas de imágenes
  var bgImages = [
    "images/ultimosPost/ultimopostcandem.jpg",
    "images/ultimosPost/ultimopostosaka.jpg",
    "images/ultimosPost/ultimopostroma.jpg",
    "images/ultimosPost/ultimoposteeuu.jpg",
    "images/ultimosPost/ultimopostkyoto.jpg",
    "images/ultimosPost/ultimopostakiba.jpg",
    "images/ultimosPost/consejosjapon.jpg",
    "images/ultimosPost/dondecomerlondres.jpg",
    "images/ultimosPost/tourporkyoto.jpg",
  ];

  // Seleccionar todas las tarjetas
  var cards = document.querySelectorAll(".card");

  // Iterar sobre las tarjetas y asignar una imagen de fondo a cada una
  cards.forEach(function (card, index) {
    card.style.backgroundImage = "url('" + bgImages[index] + "')";
  });
});
