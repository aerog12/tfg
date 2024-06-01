"use client";

import { useEffect } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import "/styles/blog.css";

const bgImages = [
  "/images/londres2.jpg",
  "/images/eeuu/newYork.jpg",
  "/images/praga.jpg",
  "/images/japon/arashiyama.jpg",
];

export default function Blog() {
  useEffect(() => {
    const cards = document.querySelectorAll(".cards-blog");
    cards.forEach((card, index) => {
      if (bgImages[index]) {
        card.style.backgroundImage = `url(${bgImages[index]})`;
      }
    });
  }, []);

  return (
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoBlog.jpg"
        texto1="BLOG DE"
        texto2="AEROGTRAVEL"
        texto3="CURIOSIDADES Y VIVENCIAS POR EL MUNDO"
      />
      <div className="principal-section">
        <div className="blog-container">
          <div className="section">
            <div className="vertical-title">EL PAÍS DEL SOL NACIENTE</div>
            <p className="cuerpoTexto-blog">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              saepe dignissimos assumenda sit ipsa possimus voluptas totam
              consequatur, inventore, ut unde eius natus incidunt cumque velit
              maxime eaque nemo a? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Adipisci dicta ad nesciunt repellat deleniti sed
              cumque voluptatibus? Qui quam laboriosam error incidunt numquam,
              repudiandae autem dolorem harum quis voluptas nihil!
            </p>
            <img src="/images/japon/tokyo.jpg" alt="" className="blog-image" />
          </div>
          <h1>LO MÁS BUSCADO</h1>

          <p className="cuerpoTexto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            saepe dignissimos assumenda sit ipsa possimus voluptas totam
            consequatur
          </p>
          <div className="section">
            <img src="/images/japon/osaka.jpg" alt="" className="blog-image" />
            <div className="section-text">
              <h2>SHINSEKAI, EL BARRIO RETRO DE OSAKA</h2>
              <p className="cuerpoTexto-blog">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident saepe dignissimos assumenda sit ipsa possimus voluptas
                totam consequatur, inventore, ut unde eius natus incidunt cumque
                velit maxime eaque nemo a? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci dicta ad nesciunt
                repellat deleniti sed cumque voluptatibus? Qui quam laboriosam
                error incidunt numquam,
              </p>
              <a href="/login" className="action-button-dark">
                VER MÁS
              </a>
            </div>
          </div>

          <div className="section">
            <div className="section-text">
              <h2>DESCUBRE AKIHABARA, EL BARRIO ELECTRÓNICO DE TOKYO</h2>
              <p className="cuerpoTexto-blog">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident saepe dignissimos assumenda sit ipsa possimus voluptas
                totam consequatur, inventore, ut unde eius natus incidunt cumque
                velit maxime eaque nemo a? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci dicta ad nesciunt
                repellat deleniti sed cumque voluptatibus? Qui quam laboriosam
                error incidunt numquam,
              </p>
              <a href="/login" className="action-button-dark">
                VER MÁS
              </a>
            </div>
            <img
              src="/images/japon/akihabra.jpg"
              alt=""
              className="blog-image"
            />
          </div>

          <div className="section">
            <img src="/images/candem.jpg" alt="" className="blog-image" />
            <div className="section-text">
              <h2>MEJORES SITIOS PARA COMER EN CAMDEN TOWN</h2>
              <p className="cuerpoTexto-blog">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident saepe dignissimos assumenda sit ipsa possimus voluptas
                totam consequatur, inventore, ut unde eius natus incidunt cumque
                velit maxime eaque nemo a? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Adipisci dicta ad nesciunt
                repellat deleniti sed cumque voluptatibus? Qui quam laboriosam
                error incidunt numquam,
              </p>
              <a href="/login" className="action-button-dark">
                VER MÁS
              </a>
            </div>
          </div>

          <h1>OTROS POST INTERESANTES</h1>
          <p className="cuerpoTexto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            saepe dignissimos assumenda sit ipsa possimus voluptas totam
            consequatur
          </p>

          <div className="section-card">
            <div className="section-card-group-1">
              <div className="cards-blog"></div>
              <p className="cards-blog-title">SITIOS OCULTOS DE LONDRES</p>
            </div>
            <div className="section-card-group-2">
              <div className="cards-blog"></div>
              <p className="cards-blog-title">QUE VER EN NEW YORK</p>
            </div>
            <div className="section-card-group-3">
              <div className="cards-blog"></div>
              <p className="cards-blog-title">¿DÓNDE COMER EN PRAGA?</p>
            </div>
            <div className="section-card-group-4">
              <div className="cards-blog"></div>
              <p className="cards-blog-title">DESCUBRE ARASHIYAMA</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
