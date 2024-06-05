"use client";
import { useEffect, useState } from "react";
// import { UserIcon } from "./icons";
import Header from "../../../components/header";
import CuentaUsuario from "../../../components/cuentaUsuario";
import PasswordUsuario from "../../../components/passwordUsuario";
import GeneralBoton from "../../../components/general-boton";
import Footer from "../../../components/footer";
import "/styles/usuario.css";
import "/styles/general.css";

export default function Usuario() {
  const [formularioMostrado, setFormularioMostrado] = useState("usuario");

  const cambiarAPassword = () => {
    setFormularioMostrado("password");
  };

  const cambiarAUsuario = () => {
    setFormularioMostrado("usuario");
  };

  /* ------------------------ */

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
  /*------------CERRAR SESION----------------*/;
  const cerrarSesion = async () => {
    try {
      const respuesta = await fetch(`${sitioLaravel}/cerrarSesion`, {
        method: "POST",
        credentials: "include",
      });
      if (respuesta.ok) {
        setInformacionUsuario(null);
        window.location.href = "/login"; // Cambia '/login' por la ruta deseada
      } else {
        console.error("Error al cerrar sesión:", respuesta.status);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div>
      <Header
        imagenFondo="/images/londres2.jpg"
        isAuthenticated={true}
        texto1={<span className="texto-con-letter-spacing">¡ BIENVENID@ </span>}
        texto2={
          <span className="texto-con-letter-spacing2">
            {`${informacionUsuario?.name}`} <span> !</span>
          </span>
        }
        cuerpoTexto="¡Estas a punto de comenzar tu próxima aventura! Explora el mundo con nosotros y descubre destinos inolvidables. 🌍✈️"
      />
      <div className="principal-section-usuario">
        <div className="containerUsuario">
          <div className="informacionContainer">
            <div className="linksNavegacion">
              <div className="logoUsuario">{/* <UserIcon/> */}</div>

              <a className="links" onClick={cambiarAUsuario}>
                CUENTA
              </a>
              <a className="links" onClick={cambiarAPassword}>
                PASSWORD
              </a>
              {/* <h1>hola {informacionUsuario?.name}</h1> */}
            </div>
            <div className="informacionUsuario">
              {formularioMostrado === "usuario" ? (
                <CuentaUsuario />
              ) : (
                <PasswordUsuario />
              )}
            </div>
          </div>
          {formularioMostrado === "password" && (
            <div className="containerBotones">
              <a>
                <GeneralBoton textoBotonGeneral="Actualizar" />
              </a>
              <a>
                <GeneralBoton textoBotonGeneral="Cancelar" />
              </a>
              <button>Cerrar Sesión</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
