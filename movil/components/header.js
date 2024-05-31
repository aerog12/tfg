import "/styles/navBar.css";
import Link from "next/link";

export default function Header(props) {
  return (
    <header>
      <div className="navBar">
        <div>
          <Link href="/">
            <img
              src="/images/logos/logo pagina oscuro.png"
              alt=""
              className="logo"
            />
          </Link>
        </div>
        <ul className="links">
          <li>
            <Link href="#">Destinos</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="#">Tienda</Link>
          </li>
        </ul>
        <Link href="#" className="action-button">
          LOGIN
        </Link>

        <Link href="#" className="action-button">
          REGISTRATE
        </Link>
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
