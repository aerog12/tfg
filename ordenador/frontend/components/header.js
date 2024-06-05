import "/styles/navBar.css";
import a from "next/link";
import { Menu } from "./icons.js";
import HeaderTextContainer from "./header-text-container";
import GeneralBoton from "./general-boton";

export default function Header(props) {
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
        {props.isAuthenticated ? (
          <>
            <a href="/login">
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
