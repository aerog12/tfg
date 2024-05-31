"use client"
import '/styles/footer.css';
export default function Footer(){
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
                <h4>COMIDA</h4>
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
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    );
}