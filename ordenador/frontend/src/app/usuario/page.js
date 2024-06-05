"use client";
import { useEffect, useState } from "react";
import Header from "../../../components/header";
import CuentaUsuario from "../../../components/cuentaUsuario";
import PasswordUsuario from "../../../components/passwordUsuario";
import GeneralBoton from "../../../components/general-boton";
import Footer from "../../../components/footer";
import "/styles/usuario.css";
import "/styles/general.css";

export default function Usuario() {
  const [informacionUsuario, setInformacionUsuario] = useState(null);
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;

  useEffect(() => {
    const fetchInformacionUsuario = async () => {
      try {
        console.log(`Fetching from: ${sitioLaravel}/usuario`);
        const respuesta = await fetch(`${sitioLaravel}/usuario`, {
          credentials: "include",
        });
        const text = await respuesta.text();
        console.log("Raw response text:", text);

        if (respuesta.ok) {
          if (text) {
            const informacion = JSON.parse(text);
            console.log("Información recibida:", informacion);
            setInformacionUsuario(informacion);
          } else {
            console.warn("La respuesta está vacía");
          }
        } else {
          console.error("Error en la respuesta de la API:", respuesta.status);
        }
      } catch (error) {
        console.error("Error fetching admin information:", error);
      }
    };

    fetchInformacionUsuario();
  }, [sitioLaravel]);

  return (
    <div>
      <Header
        imagenFondo="/images/londres2.jpg"
        texto1="¡ BIENVENIDO A "
        texto2="AEROGTRAVEL !"
        // texto3="TODO LO QUE NECESITAS PARA UN VIAJE DE ENSUEÑO"
        cuerpoTexto="¡Estas a punto de comenzar tu próxima aventura! Explora el mundo con nosotros y descubre destinos inolvidables. 🌍✈️"
      />
      <div className="principal-section-usuario">
        <div className="containerUsuario">
          <div className="informacionContainer">
            <div className="linksNavegacion">
              <img className="logoUsuario" />
              <a className="links">CUENTA</a>
              <a className="links">
                PASSWORD
                <PasswordUsuario />
              </a>
              <h1>hola {informacionUsuario?.name}</h1>
            </div>
            <div className="informacionUsuario">
              <CuentaUsuario />
            </div>
          </div>
          <div className="containerBotones">
            <a>
              <GeneralBoton textoBotonGeneral="Actualizar" />
            </a>
            <a>
              <GeneralBoton textoBotonGeneral="Cancelar" />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
