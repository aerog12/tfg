"use client";
import Header from "../../../components/header";
import "/styles/destinos.css";

export default function Destinos() {
  return (
    //react fragments
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoDestinos.jpg"
        texto1="NUESTROS"
        texto2="DESTINOS"
        texto3="UN MUNDO DE MARAVILLAS TE ESPERA"
      />
    <div className="principal-section">
      
      <div className="column column1">
       
        <div className="card card-column1-izq">
          <h3 className="card-column1-izq-titulo">MEJORES DESTINOS</h3>
          <div className="card-column1-izq-subtitulo">
            <h2>¿DÓNDE TE APETECE IR?</h2>
          </div>
            <div className="card-column1-izq-cuerpoTexto">
              <p>¡Bienvenidos a nuestra página de "Destinos", el portal perfecto para explorar y descubrir los lugares más increíbles a los que puedes viajar! 
                Aquí te ofrecemos una selección cuidadosamente curada de destinos que combinan cultura, historia, aventura y relajación. 
                Desde las vibrantes calles de Nueva York y el encanto histórico de Roma, hasta la serenidad de Kioto y la modernidad de Tokio,
                nuestra misión es inspirarte y ayudarte a planificar tu próximo viaje de ensueño.
                </p>
              <p>Cada destino que presentamos ha sido elegido por su singularidad y su capacidad para ofrecer experiencias inolvidables.
                Navega por nuestra página y déjate llevar por las descripciones detalladas, impresionantes fotografías y consejos prácticos que te proporcionamos.
                Ya sea que busques una escapada urbana, un retiro cultural, una aventura llena de adrenalina o un paraíso natural, aquí encontrarás el lugar perfecto que se
                adapte a tus deseos y necesidades.¡Comienza tu aventura con nosotros y descubre el mundo de manera única y emocionante!</p>
            </div>
        </div>
        
        <a href="#">
        <div className="card card-column1-der">
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">TOKYO</h2>
              <p className="text-container-subtitulo">Ultramoderna y densamente poblada, famosa por su impresionante arquitectura, 
                tecnología avanzada, cultura pop vibrante y una mezcla única de tradición y modernidad. 
              </p>
            </div>
          </div>
          
        </div>
        </a>
      </div>

      
      <div className="column column2">
        
        <a href="">
        <div className="card card-column2-izq">
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">NUEVA YORK</h2>
              <p className="text-container-subtitulo">Metrópolis vibrante y diversa, conocida por sus rascacielos icónicos, como el Empire State Building, 
                y su bulliciosa vida cultural y comercial, centrada en lugares emblemáticos como Times Square y Central Park. 
              </p>
            </div>
          </div>
        </div>
        </a>

        
        <a href="">
        <div className="card card-column2-der">
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">WASHINGTON</h2>
              <p className="text-container-subtitulo">Capital de Estados Unidos, conocida por sus monumentos históricos, 
                instituciones gubernamentales y museos de clase mundial, como el Capitolio, la Casa Blanca y el Museo Smithsonian.</p>
            </div>
          </div>
        </div>
        </a>

      </div>

      
      <div className="column column3">
        
        <a href="">
        <div className="card card-column3-izq">
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">LONDRES</h2>
              <p className="text-container-subtitulo">Ciudad cosmopolita rica en historia y cultura, conocida por sus icónicos monumentos como el Big Ben, el Palacio de Buckingham y el Támesis,
              así como por su vibrante escena artística y diversidad multicultural.
            </p>
            </div>
          </div>
        </div>
        </a>

        
        <a href="">
        <div className="card card-column3-der">
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">KYOTO</h2>
              <p className="text-container-subtitulo">Ciudad japonesa famosa por sus templos históricos, jardines zen, y tradicionales casas de té,
                que ofrecen un refugio cultural y espiritual en medio de paisajes pintorescos y milenarias tradiciones.</p>
            </div>
          </div>
        </div>
        </a>

      </div>

      
      <div className="column column4">
        
        <a href="">
        <div className="card card-column4-izq">
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">OSAKA</h2>
              <p className="text-container-subtitulo">Ciudad japonesa conocida por su vibrante vida nocturna, deliciosa gastronomía, 
                y modernos distritos comerciales, además de su rica historia y cultura que se reflejan en lugares como el Castillo de Osaka.
              </p>
            </div>
          </div>
        </div>
        </a>
        
        <div className="card card-column4-der">
          
          <div className="text-container">
            <div className="text-container-background">
              <h2 className="text-container-titulo">DESTINO</h2>
              <h2 className="text-container-titulo-morado">ROMA</h2>
              <p className="text-container-subtitulo">Ciudad eterna y fascinante, repleta de antiguas ruinas, 
              monumentos históricos como el Coliseo y el Vaticano, y una vibrante cultura que combina la grandeza del pasado con la energía del presente.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
