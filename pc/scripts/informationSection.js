fetch("components/informationSection.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("informationSection-container").innerHTML = data;
  });
