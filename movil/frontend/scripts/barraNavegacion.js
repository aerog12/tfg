fetch("components/barraNavegacion.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("barraNavegacion-container").innerHTML = data;
  });
