import Header from "../../../components/header";
import "/styles/form.css";

export default function Login() {
  return (
    //react fragments
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoLogin.jpg"
        texto1="BIENVENIDO DE"
        texto2="NUEVO"
        cuerpoTexto="Inicie sesión para tener acceso a todas las funcionalidades de la pagina"
        estaEnLogin={true}
      />
    </>
  );
}
