"use client";
import {RefreshIcon} from "./icons";
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
          <div className="input-container-usuario">
            <input
              type="text"
              id="name"
              name="usuario"
              placeholder="Introduce nuevo nombre"
            />
            <button type="submit" className="botonActualizar">
              <RefreshIcon />
            </button>
          </div>
        </div>

        <div class="name">
          <label class="mail-text" for="apellido1">
            PRIMER APELLIDO
          </label>
          <div className="input-container-usuario">
            <input
              type="text"
              id="name"
              name="usuario"
              placeholder="Introduce nuevo primer apellido"
            />
            <button type="submit" className="botonActualizar">
              <RefreshIcon />
            </button>
          </div>
        </div>

        <div class="name">
          <label class="mail-text" for="apellido2">
            SEGUNDO APELLIDO
          </label>
          <div className="input-container-usuario">
            <input
              type="text"
              id="name"
              name="usuario"
              placeholder="Introduce nuevo segundo apellido"
            />
            <button type="submit" className="botonActualizar">
              <RefreshIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="info-container">
        <div class="name">
          <label class="mail-text" for="email">
            EMAIL
          </label>
          <div className="input-container-usuario">
            <input
              type="email"
              id="email"
              name="correo"
              autofocus
              placeholder="Introduce nuevo email"
            />
            <button type="submit" className="botonActualizar">
              <RefreshIcon />
            </button>
          </div>
        </div>

        <div class="name">
          <label class="mail-text" for="movil">
            NUMERO DE MOVIL
          </label>
          <div className="input-container-usuario">
            <input
              type="email"
              id="email"
              name="movil"
              autofocus
              placeholder="Introduce nuevo numero"
            />
            <button type="submit" className="botonActualizar">
              <RefreshIcon />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
