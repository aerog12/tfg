fetch("components/navBar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navBar-container").innerHTML = data;
  });
