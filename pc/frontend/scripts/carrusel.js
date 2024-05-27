fetch("components/carrusel.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("carrusel-container").innerHTML = data;
  });
