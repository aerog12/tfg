
// IMAGENES DEL INDEX
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
  var cards = document.querySelectorAll(".card-index ");

  // Iterar sobre las tarjetas y asignar una imagen de fondo a cada una
  cards.forEach(function (card, index) {
    card.style.backgroundImage = "url('" + bgImages[index] + "')";
  });
});
// IMAGENES TIENDA
document.addEventListener("DOMContentLoaded", function () {
  // Array de rutas de imágenes
  var bgImages = [
    "images/japon/osaka.jpg",
    "images/eeuu/new york.jpg",
    "images/londres2.jpg",
    "images/Roma.jpg",
  ];

  // Seleccionar todas las tarjetas
  var cards = document.querySelectorAll(".card-shop");

  // Iterar sobre las tarjetas y asignar una imagen de fondo a cada una
  cards.forEach(function (card, index) {
    card.style.backgroundImage = "url('" + bgImages[index] + "')";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Array de rutas de imágenes
  var bgImages = [
    "images/comida.jpg",
    "images/praga.jpg",
    "images/santorini.jpg",
    "images/explorar.jpg",
  ];

  // Seleccionar todas las tarjetas
  var cards = document.querySelectorAll(".contenido-categorias");

  // Iterar sobre las tarjetas y asignar una imagen de fondo a cada una
  cards.forEach(function (card, index) {
    card.style.backgroundImage = "url('" + bgImages[index] + "')";
  });
});

// IMAGENES BLOG

document.addEventListener("DOMContentLoaded", function () {
  // Array de rutas de imágenes
  var bgImages = [
    "images/londres2.jpg",
    "images/eeuu/new york.jpg",
    "images/praga.jpg",
    "images/japon/arashiyama.jpg",
  ];

  // Seleccionar todas las tarjetas
  var cards = document.querySelectorAll(".cards-blog");

  // Iterar sobre las tarjetas y asignar una imagen de fondo a cada una
  cards.forEach(function (card, index) {
    card.style.backgroundImage = "url('" + bgImages[index] + "')";
  });
});



