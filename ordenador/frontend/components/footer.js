"use client";
import { IconFacebook, IconInstagram, IconTwitter, IconYoutube } from "./icons";
import "/styles/footer.css";

export default function Footer() {
  return (
    <body>
      <footer className="footer">
        <div className="footer-container">
          <div className="row-footer">
            <div className="footer-col">
              <h4>DESTINOS</h4>
              <ul>
                <li>
                  <a href="#">Europa</a>
                </li>
                <li>
                  <a href="#">Asia</a>
                </li>
                <li>
                  <a href="#">Estados Unidos</a>
                </li>
                <li>
                  <a href="#">Europa</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>BLOG</h4>

              <ul>
                <li>
                  <a href="#">Consejos para viajar</a>
                </li>
                <li>
                  <a href="#">Best of</a>
                </li>
                <li>
                  <a href="#">Escapadas</a>
                </li>
                <li>
                  <a href="#">Viajar barato</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>COMIDAa</h4>
              <ul>
                <li>
                  <a href="#">Donde comer</a>
                </li>
                <li>
                  <a href="#">Que comer</a>
                </li>
                <li>
                  <a href="#">Comer barato</a>
                </li>
                <li>
                  <a href="#">Sitios que no puedes perderte</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>REDES SOCIALES</h4>
              <div className="social-links">
                <a href="#">
                  <IconFacebook />
                </a>
                <a href="#">
                  <IconTwitter />
                </a>
                <a href="#">
                  <IconInstagram />
                </a>
                <a href="#">
                  <IconYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
