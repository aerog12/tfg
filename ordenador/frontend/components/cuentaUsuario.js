"use client";
import "/styles/cuentaUsuario.css";
import "/styles/general.css";

export default function CuentaUsuario() {
  return (
    <form className="formularioRegistro">
      <div className="name-container">
        <div class="name">
          <label class="mail-text" for="name">
            NOMBRE
          </label>
          <input
            type="text"
            id="name"
            name="usuario"
            placeholder="Introduce tu nombre"
            required
          />
        </div>

        <div class="name">
          <label class="mail-text" for="apellido1">
            PRIMER APELLIDO
          </label>
          <input
            type="text"
            id="name"
            name="usuario"
            placeholder="Introduce tu nombre"
            required
          />
        </div>

        <div class="name">
          <label class="mail-text" for="apellido2">
            SEGUNDO APELLIDO
          </label>
          <input
            type="text"
            id="name"
            name="usuario"
            placeholder="Introduce tu nombre"
            required
          />
        </div>
      </div>
      <div className="info-container">
        <div class="name">
          <label class="mail-text" for="email">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="correo"
            autofocus
            placeholder="Introduce tu email"
            required
          />
        </div>

        <div class="name">
          <label class="mail-text" for="movil">
            NUMERO DE MOVIL
          </label>
          <input
            type="email"
            id="email"
            name="correo"
            autofocus
            placeholder="Introduce tu numero"
            required
          />
        </div>
      </div>
    </form>
  );
}
