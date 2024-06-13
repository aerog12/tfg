"use client";
import { useEffect, useState } from "react";
import "/styles/navBar.css";
import a from "next/link";
import { Menu } from "./icons.js";
import HeaderTextContainer from "./header-text-container";
import GeneralBoton from "./general-boton";
import { useRouter } from "next/navigation";

export default function Header(props) {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    (async () => {
      try {
        const respuesta = await fetch(`${sitioLaravel}/mis-datos`, {
          credentials: "include",
        });
        const contenido = await respuesta.json();
        if (contenido.email) {
          setEstaLogueado(true);
        } else {
          setEstaLogueado(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    })();
  }, [sitioLaravel]);

  const cerrarSesion = async () => {
    try {
      const respuesta = await fetch(`${sitioLaravel}/cerrarSesion`, {
        method: "POST",
        credentials: "include",
      });
      if (respuesta.ok) {
        setEstaLogueado(false);
        router.push("/"); // Redirect to home page after logout
      } else {
        console.error("Error al cerrar sesión:", respuesta.status);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header style={{ backgroundImage: `url(${props.imagenFondo})` }}>
      <div className="navBar">
        <div>
          <a href="/">
            <img
              src="/images/logos/logo pagina oscuro.png"
              alt=""
              className="logo"
            />
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="/destinos">Destinos</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/tienda">Tienda</a>
          </li>
        </ul>
        {estaLogueado ? (
          <>
            <a onClick={cerrarSesion}>
              <GeneralBoton textoBotonGeneral="Cerrar Sesión" />
            </a>
            <a href="/usuario">
              <GeneralBoton textoBotonGeneral="Mi Perfil" />
            </a>
          </>
        ) : (
          <>
            <a href="/login">
              <GeneralBoton textoBotonGeneral="Iniciar Sesión" />
            </a>
            <a href="/register">
              <GeneralBoton textoBotonGeneral="Regístrate" />
            </a>
          </>
        )}
        <div className="toggle-button">
          <Menu />
        </div>
      </div>

      <div className="titulo-form-container">
        {/* TEXTO DEL HEADER */}
        <HeaderTextContainer
          texto1={props.texto1}
          texto2={props.texto2}
          texto3={props.texto3}
          cuerpoTexto={props.cuerpoTexto}
        />
      </div>
    </header>
  );
}
