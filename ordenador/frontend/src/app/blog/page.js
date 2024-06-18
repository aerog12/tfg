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
              ¡Bienvenidos a Japón, la tierra del contraste armónico entre lo
              tradicional y lo ultramoderno! Desde la majestuosidad serena de
              sus templos ancestrales hasta los destellantes rascacielos de
              Tokio, Japón cautiva con su rica cultura y su innovación
              tecnológica. Sus exquisitas artes culinarias, como el sushi y el
              ramen, deleitan los sentidos, mientras que sus jardines zen
              invitan a la reflexión tranquila. Sumérgete en la fascinante
              mezcla de geishas y cosplay, samuráis y robots, que hacen de este
              país una experiencia única e inolvidable para los viajeros de todo
              el mundo.
            </p>
            <image
              src="/images/japon/tokyo.jpg"
              alt="tokyo night"
              className="blog-image"
            />
          </div>
          <h1>LO MÁS BUSCADO</h1>

          <p className="cuerpoTexto">
            En el blog de AerogTravel podrás encontrar todo tipo de información
            acerca de los destinos que siempre has soñado y que siempre has
            querido visitar.
          </p>
          <div className="section">
            <image
              src="/images/japon/osaka.jpg"
              alt="shinsekai, osaka"
              className="blog-image"
            />
            <div className="section-text">
              <h2>SHINSEKAI, EL BARRIO RETRO DE OSAKA</h2>
              <p className="cuerpoTexto-blog">
                Shinsekai, ubicado en Osaka, es un vibrante barrio que evoca la
                nostalgia de la era Taisho y Showa de Japón. Con su icónica
                Torre Tsutenkaku y sus callejuelas llenas de puestos de comida
                tradicional, ofrece una experiencia única de la cultura local.
                Aquí convergen la historia y la modernidad, capturando el
                corazón de quienes buscan explorar lo auténtico en medio de la
                bulliciosa metrópolis de Osaka.
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
                Akihabara, en Tokio, es un paraíso para los entusiastas de la
                tecnología y la cultura pop japonesa. Con sus deslumbrantes
                tiendas de electrónica, arcades futuristas y cafés temáticos de
                anime, este distrito es el epicentro del fenómeno otaku.
                Akihabara mezcla lo tradicional y lo moderno con su fascinante
                oferta de maid cafés junto a santuarios antiguos, creando una
                experiencia inigualable para los visitantes curiosos de todo el
                mundo.
              </p>
              <a href="/login" className="action-button-dark">
                VER MÁS
              </a>
            </div>
            <image
              src="/images/japon/akihabra.jpg"
              alt="akihabara night"
              className="blog-image"
            />
          </div>

          <div className="section">
            <image
              src="/images/candem.jpg"
              alt="comida en candemtown"
              className="blog-image"
            />
            <div className="section-text">
              <h2>MEJORES SITIOS PARA COMER EN CAMDEN TOWN</h2>
              <p className="cuerpoTexto-blog">
                En esta sección encotrarás los mejores sitios para comer en el
                mercado más famoso de la capital londinense. Conocido por su
                diversidad gastronómica que atrae a foodies de todo el mundo.
                Desde puestos callejeros con sabores internacionales hasta
                restaurantes innovadores y mercados de alimentos orgánicos,
                Camden ofrece una experiencia culinaria única. Aquí se fusionan
                tradiciones culinarias globales con la energía creativa de la
                escena urbana londinense, convirtiéndolo en un destino
                imperdible para explorar nuevos sabores y disfrutar de una
                auténtica aventura gastronómica.
              </p>
              <a href="/login" className="action-button-dark">
                VER MÁS
              </a>
            </div>
          </div>

          <h1>OTROS POST INTERESANTES</h1>
          <p className="cuerpoTexto">
            Descubre más lecturas fascinantes en nuestros otros posts
            destacados.
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
    </>
  );
}
