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

      <div className="titulo-form-container">
        {/* TEXTO DEL HEADER */}
        <HeaderTextContainer
          texto1={props.texto1}
          texto2={props.texto2}
          texto3={props.texto3}
          cuerpoTexto={props.cuerpoTexto}
        />
        {/* FORM DEL REGISTRO */}
        {props.estaEnRegistro && (
          <div class="form-container">
            <form id="formularioRegistro">
              <div class="mail">
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
                <label class="mail-text" for="name">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  id="name"
                  name="usuario"
                  placeholder="Introduce tu nombre"
                  required
                />
              </div>
              <div class="passwd">
                <label class="passwd-text" for="password">
                  CONTRASEÑA
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="***********"
                  required
                />
              </div>

              <button type="submit" class="action-button-form">
                REGISTRATE
              </button>
              <div class="line-gray"></div>
              <div class="createAccount">
                <p class="createAccount-text">¿Tienes cuenta?</p>
                <a href="/login" class="btn-createAccount">
                  INICIA SESIÓN
                </a>
              </div>
            </form>
          </div>
        )}
        {/* FORM DEL LOGIN */}
        {props.estaEnLogin && (
          <div class="form-container-login">
            <form id="formularioRegistro">
              <div class="mail">
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

              <div class="passwd">
                <label class="passwd-text" for="password">
                  CONTRASEÑA
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="***********"
                  required
                />
              </div>

              <button type="submit" class="action-button-form">
                REGISTRATE
              </button>
              <div class="line-gray"></div>
              <div class="createAccount">
                <p class="createAccount-text">¿No tienes cuenta?</p>
                <a href="/register" class="btn-createAccount">
                  REGISTRATE
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
