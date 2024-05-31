import "/styles/navBar.css";
import a from "next/link";

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
        <a href="/login">
          <GeneralBoton textoBotonGeneral="LOGIN" />
        </a>

        <a href="/register">
          <GeneralBoton textoBotonGeneral="REGISTRATE" />
        </a>
        <div className="toggle-button">
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </div>
      {/* TEXTO DEL HEADER */}
      <HeaderTextContainer
        texto1={props.texto1}
        texto2={props.texto2}
        texto3={props.texto3}
      />
    </header>
  );
}
