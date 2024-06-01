import "/styles/headerTextContainer.css";

export default function HeaderTextContainer(props) {
  return (
    <div className="title-container">
      <h2 className="titulo-register">{props.texto1}</h2>
      <h2 className="titulo-register-2">{props.texto2}</h2>
      {props.texto3 && <h2 className="titulo-register">{props.texto3}</h2>}
      {props.cuerpoTexto && (
        <p class="cuerpoTexto-register">{props.cuerpoTexto}</p>
      )}
    </div>
  );
}
