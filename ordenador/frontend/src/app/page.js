"use client";

import { useEffect } from "react";
import Header from "../../components/header";
import Carrusel from "../../components/carrusel";
import "/styles/seccion-principal-index.css";
import "/styles/headerTextContainer.css";
import "/styles/footer.css";


const bgImages = [
  "/images/ultimosPost/ultimopostcandem.jpg",
  "/images/ultimosPost/ultimopostosaka.jpg",
  "/images/ultimosPost/ultimopostroma.jpg",
  "/images/ultimosPost/ultimoposteeuu.jpg",
  "/images/ultimosPost/ultimopostkyoto.jpg",
  "/images/ultimosPost/ultimopostakiba.jpg",
  "/images/ultimosPost/consejosjapon.jpg",
  "/images/ultimosPost/dondecomerlondres.jpg",
  "/images/ultimosPost/tourporkyoto.jpg",
];

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-index");
    cards.forEach((card, index) => {
      if (bgImages[index]) {
        card.style.backgroundImage = `url(${bgImages[index]})`;
      }
    });
  }, []);

  return (
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoPrincipal2.jpg"
        texto1="BIENVENIDOS A "
        texto2="AEROGTRAVEL"
        texto3="VIAJES EXCLUSIVOS A CUALQUIER PARTE DEL MUNDO"
      />
      <div className="principal-section">
        <section className="ultimos-post-container">
          <h1>ÚLTIMOS POST</h1>
          <div className="line-gray"></div>
          <div className="line-purple"></div>

          <div className="cards-container">
            {[
              "La mejor comida en candem town",
              "Barrio retro osaka",
              "Descubre el vaticano",
              "Museo del aire y del espacio",
              "Descubre el japón antiguo",
              "Barrio electronico tokyo",
            ].map((title, index) => (
              <div className="card-wrapper" key={index}>
                <div className="card-index">
                  <div className="text-container">
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <h1>NUESTRAS CIUDADES MÁS DESTACADAS</h1>
        <div className="line-gray"></div>
        <div className="line-purple"></div>
        <Carrusel />
        <section className="consejos-container">
          <h1>CONSEJOS</h1>

          <div className="line-gray"></div>
          <div className="line-purple"></div>

          <div className="cards-container consejos">
            {[
              "Como viajar a japon 2024",
              "Donde comer londres",
              "QUE VISITAR EN KYOTO",
            ].map((title, index) => (
              <div className="card-wrapper" key={index}>
                <div className="card-index">
                  <div className="text-container">
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="informationSection-container"></div>
        </section>
      </div>
     

    </>
  );
}
