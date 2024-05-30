
import '/styles/navBar.css'

export default function Header() {
    return (
      <header>
        <div className="navBar">
          <div>
            <a href="#">
              <img
                src="/images/logos/logo pagina oscuro.png"
                alt=""
                className="logo"
              />
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="#">Destinos</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Tienda</a>
            </li>
          </ul>
          <a href="#" className="action-button">
            LOGIN
          </a>
          
          <a href="#" className="action-button">
            REGISTRATE
          </a>
          <div className="toggle-button">
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
        <div className="title-container">
          <h2 className="titulo-register">BIENVENIDOS A </h2>
          <h2 className="titulo-register-2">AEROGTRAVEL</h2>
          <h2 className="titulo-register">
            VIAJES EXCLUSIVOS A CUALQUIER PARTE DEL MUNDO
          </h2>
        </div>
      </header>
    );
}