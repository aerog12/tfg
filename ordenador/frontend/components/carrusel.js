
import "/styles/carrusel.css";

export default function Carrusel(){
    return (
      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item">
            <img src="images/japon/tokyo.jpg" alt="Foto 1" />

            <div class="carousel-caption">
              <div class="icon-carrusel2">2</div>
              <div class="description">
                <h4>JAPÓN</h4>
                <p>Descubre la capital nipona</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/londres2.jpg" alt="Foto 2" />
            <div class="carousel-caption">
              <div class="icon-carrusel2">2</div>
              <div class="description">
                <h4>LONDRES</h4>
                <p>Descubre la capital londinense</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/japon/osaka.jpg" alt="Foto 3" />
            <div class="carousel-caption">
              <div class="icon-carrusel2">2</div>
              <div class="description">
                <h4>OSAKA</h4>
                <p>Donde la tradición se encuentra con la modernidad</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/eeuu/newYork.jpg" alt="Foto 4" />
            <div class="carousel-caption">
              <div class="icon-carrusel2">2</div>
              <div class="description">
                <h4>NUEVA YORK</h4>
                <p>La ciudad que nunca duerme, vibrante y multicultural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}