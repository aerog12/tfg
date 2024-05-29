document
  .getElementById("formularioRegistro")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("http://127.0.0.1:8000/api/registro", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        name: formData.get("name"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
          // Manejar errores de validación (puedes mostrar estos errores en el formulario)
        } else {
          console.log("Usuario registrado con éxito");
          // Redirigir al usuario a la página de inicio de sesión
          window.location.href = "login.html";
        }
      })
      .catch((error) => console.error("Error:", error));
  });
