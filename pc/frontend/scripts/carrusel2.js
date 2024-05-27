fetch("components/carrusel2.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("carrusel2-container").innerHTML = data;
  });
