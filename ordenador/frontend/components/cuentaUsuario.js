"use client";
import { RefreshIcon } from "./icons";
import { useEffect, useState } from "react";
import "/styles/cuentaUsuario.css";
import "/styles/general.css";

export default function CuentaUsuario() {
  const [informacionUsuario, setInformacionUsuario] = useState(null);
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;
  useEffect(() => {
    const fetchInformacionUsuario = async () => {
      try {
        // console.log(`Fetching from: ${sitioLaravel}/usuario`);
        const respuesta = await fetch(`${sitioLaravel}/usuario`, {
          credentials: "include",
        });
        const text = await respuesta.text();
        // console.log("Raw response text:", text);

        if (respuesta.ok) {
          if (text) {
            const informacion = JSON.parse(text);
            // console.log("Información recibida:", informacion);
            setInformacionUsuario(informacion);
          } else {
            // console.warn("La respuesta está vacía");
          }
        } else {
          // console.error("Error en la respuesta de la API:", respuesta.status);
        }
      } catch (error) {
        // console.error("Error fetching admin information:", error);
      }
    };

    fetchInformacionUsuario();
  }, [sitioLaravel]);

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
              placeholder={`${informacionUsuario?.name}`}
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
              placeholder={`${informacionUsuario?.email}`}
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
