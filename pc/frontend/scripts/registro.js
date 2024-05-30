document.addEventListener("DOMContentLoaded", function () {
  const formularioRegistro = document.getElementById("formularioRegistro");

  formularioRegistro.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const formData = new FormData(formularioRegistro);
    const usuario = formData.get("usuario");
    const correo = formData.get("correo");
    const password = formData.get("password");

    fetch("http://localhost:8000/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: usuario,
        email: correo,
        password: password,
      }),
    })
      .then((response) => {
        console.log("Raw response:", response); // Agregar esta línea para depuración
        if (!response.ok) {
          return response.json().then((err) => {
            console.error("Response error:", err); // Agregar esta línea para depuración
            throw err;
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response body:", data); // Agregar esta línea para depuración
        alert("Registro exitoso");
        window.location.href = "login.html";
      })
      .catch((error) => {
        console.error("Fetch error:", error); // Agregar esta línea para depuración
        alert(
          "Error en el registro: " + (error.message || "Error desconocido")
        );
      });
  });
});
