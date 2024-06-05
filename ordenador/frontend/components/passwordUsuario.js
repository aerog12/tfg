"use client";
import "/styles/cuentaUsuario.css";
import "/styles/general.css";

export default function PasswordUsuario() {
  return (
    <form className="formularioRegistro">
      <div className="name-container">
        <div class="name">
          <label class="mail-text" for="name">
            NUEVA CONTRASEÑA
          </label>
          <div className="input-container-usuario">
            <input
              type="text"
              id="name"
              name="password"
              placeholder="Introduce tu nombre"
            />
          </div>
        </div>

        <div class="name">
          <label class="mail-text" for="apellido1">
            REPITA CONTRASEÑA
          </label>
          <div className="input-container-usuario">
            <input
              type="text"
              id="name"
              name="password"
              placeholder="Introduce tu nombre"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
