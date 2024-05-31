import Header from "../../../components/header";
import "/styles/headerTextContainer.css";
import "/styles/form.css";

export default function Register() {
  return (
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoLogin.jpg"
        texto1="CREAR NUEVA"
        texto2="CUENTA"
        cuerpoTexto="Cree una nueva cuenta para tener acceso a todas las funcionalidades de la pagina"
        estaEnRegistro={true}
      />
    </>
  );
}
