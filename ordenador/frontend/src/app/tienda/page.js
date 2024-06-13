"use client";
import { useEffect } from "react";
import { Wallet, Gift, HeadSet, Dollar, Book} from "../../../components/icons";
import Header from "../../../components/header";
import GeneralBoton from "../../../components/general-boton";
import "/styles/tienda.css";

const bgImages = [
  "/images/japon/osaka.jpg",
  "/images/eeuu/newYork.jpg",
  "/images/londres2.jpg",
  "/images/Roma.jpg",
];

export default function Tienda() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-shop");
    cards.forEach((card, index) => {
      if (bgImages[index]) {
        card.style.backgroundImage = `url(${bgImages[index]})`;
      }
    });
  }, []);

  return (
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoTienda.jpg"
        texto1="NUESTRA"
        texto2="TIENDA"
        texto3="TODO LO QUE NECESITAS PARA UN VIAJE DE ENSUEÑO"
      />
      <div className="principal-section">
        <div className="btn-container">
          <a href="#">
            <div className="contrarreembolso">
              <div className="shop-links">
                <Wallet />
              </div>
              <div className="contrarreembolso-text">
                <p className="shop-title">Contrarreembolso</p>
                <p className="shop-text">100% garantía de devolución</p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="regalo">
              <div className="shop-links">
                <Gift />
              </div>
              <div className="regalo-text">
                <p className="shop-title">Tarjeta de regalo</p>
                <p className="shop-text">El regalo perfecto para el viajero</p>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="atencionCliente">
              <div className="shop-links">
                <HeadSet />
              </div>
              <div className="atencionCliente-text">
                <p className="shop-title">Atención al cliente</p>
                <p className="shop-text">¡Pregunta lo que necesites!</p>
              </div>
            </div>
          </a>
        </div>

        <h1>GUÍAS DESTACADAS</h1>
        <div className="line-gray"></div>
        <div className="line-purple"></div>

        <div className="cards-container-tienda">
          <div className="card-shop">
            <div className="text-container-tienda">
              <h3 className="text-container-titulo">OSAKA :</h3>
              <h3 className="text-container-titulo-morado">GUÍA COMPLETA</h3>
              <div className="guide-pages">
                <div className="card-guide-icons">
                  <Book />
                </div>
                <h3>PÁGINAS : 30</h3>
              </div>
              <div className="guide-price">
                <div className="card-guide-icons">
                  <Dollar />
                </div>
                <h3>PRECIO : 9.90 €</h3>
              </div>
              <p className="guide-information">
                CONOCIENDO UNA DE LAS CIUDADES MÁS POPULARES DE JAPÓN
              </p>
              <a href="/register">
                <GeneralBoton textoBotonGeneral="COMPRAR" />
              </a>
            </div>
          </div>
          <div className="card-shop">
            <div className="text-container-tienda">
              <h3 className="text-container-titulo">NUEVA YORK :</h3>
              <h3 className="text-container-titulo-morado">GUÍA COMPLETA</h3>
              <div className="guide-pages">
                <div className="card-guide-icons">
                  <Book />
                </div>
                <h3>PÁGINAS : 23</h3>
              </div>
              <div className="guide-price">
                <div className="card-guide-icons">
                  <Dollar />
                </div>
                <h3>PRECIO : 7.80 €</h3>
              </div>
              <p className="guide-information">LA CIUDAD QUE NO DUERME</p>
              <a href="/register">
                <GeneralBoton textoBotonGeneral="COMPRAR" />
              </a>
            </div>
          </div>
          <div className="card-shop">
            <div className="text-container-tienda">
              <h3 className="text-container-titulo">LONDRES :</h3>
              <h3 className="text-container-titulo-morado">GUÍA COMPLETA</h3>
              <div className="guide-pages">
                <div className="card-guide-icons">
                  <Book />
                </div>
                <h3>PÁGINAS : 45</h3>
              </div>
              <div className="guide-price">
                <div className="card-guide-icons">
                  <Dollar />
                </div>
                <h3>PRECIO : 12.90 €</h3>
              </div>
              <p className="guide-information">
                VISITA LA CIUDAD MÁS COSMOPOLITA DE EUROPA
              </p>
              <a href="/register">
                <GeneralBoton textoBotonGeneral="COMPRAR" />
              </a>
            </div>
          </div>
          <div className="card-shop">
            <div className="text-container-tienda">
              <h3 className="text-container-titulo">ROMA :</h3>
              <h3 className="text-container-titulo-morado">GUÍA COMPLETA</h3>
              <div className="guide-pages">
                <div className="card-guide-icons">
                  <Book />
                </div>
                <h3>PÁGINAS : 15</h3>
              </div>
              <div className="guide-price">
                <div className="card-guide-icons">
                  <Dollar />
                </div>
                <h3>PRECIO : 5.50 €</h3>
              </div>
              <p className="guide-information">
                DESCUBRE LA MAGIA DE LA CIUDAD ETERNA
              </p>
              <a href="/register">
                <GeneralBoton textoBotonGeneral="COMPRAR" />
              </a>
            </div>
          </div>
        </div>

        <h1>CATEGORÍAS</h1>
        <div className="line-gray"></div>
        <div className="line-purple"></div>

        <div className="cards-container-categorias">
          <a href="#" className="cards-categorias">
            <div className="contenido-categorias">
              <div className="text-container-categorias">
                <div className="text-container-background-tienda">
                  <h3>COMIDA</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="cards-categorias">
            <div className="contenido-categorias">
              <div className="text-container-categorias">
                <div className="text-container-background-tienda">
                  <h3>LUGARES</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="cards-categorias">
            <div className="contenido-categorias">
              <div className="text-container-categorias">
                <div className="text-container-background-tienda">
                  <h3>ESCAPADAS</h3>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="cards-categorias">
            <div className="contenido-categorias">
              <div className="text-container-categorias">
                <div className="text-container-background-tienda">
                  <h3>EXPLORAR</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
