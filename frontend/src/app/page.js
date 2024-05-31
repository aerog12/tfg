//es como el index html
//f1+organize imports
"use client"
import Header from "../../components/header";
import "/styles/seccion-principal-index.css";
import "/styles/headerTextContainer.css";

export default function Home() {
  return (
    //react fragments
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
            <div className="card-wrapper">
              <div className="card">
                <div className="text-container">
                  <h3>la mejor comida en candem town</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="text-container">
                  <h3>barrio retro osaka</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="text-container">
                  <h3>descubre el vaticano</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="text-container">
                  <h3>museo del aire y del espacio</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="text-container">
                  <h3>japón antiguo</h3>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <div className="text-container">
                  <h3>barrio electronico tokyo</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <h1>NUESTRAS CIUDADES MÁS DESTACADAS</h1>
        <div className="line-gray"></div>
        <div className="line-purple"></div>
        <section className="consejos-container">

        <h1>CONSEJOS</h1>

        <div className="line-gray"></div>
        <div className="line-purple"></div>

        <div className="cards-container consejos">
          <div className="card-wrapper">
          <div className="card">
            <div className="text-container">
                <h3>Como viajar a japon 2024</h3>
              </div>
            </div>
            </div>

            <div className="card-wrapper">
            <div className="card">
              <div className="text-container">
                <h3>Donde comer londres</h3>
              </div>
            </div>
            </div>

            <div className="card-wrapper consejos-tres">
            <div className="card">
              <div className="text-container">
                <h3>QUE VISITAR EN KYOTO</h3>
              </div>
            </div>


        </div>
    </div>

    <div id="informationSection-container">
    </div>
    </section>
      </div>
    </>
  );
}
