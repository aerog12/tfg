"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../../components/header";
import "/styles/form.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;
  const submit = async (e) => {
    e.preventDefault();

    await fetch(`${sitioLaravel}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    let paginaRedirigida;
    if (email === "admin@admin" && password === "adminadmin") {
      paginaRedirigida = "/admin";
    } else {
      paginaRedirigida = "/usuario";
    }

    router.push(paginaRedirigida);

    // router.push("/");
  };

  return (
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoLogin.jpg"
        texto1="BIENVENIDO DE"
        texto2="NUEVO"
        cuerpoTexto="Inicie sesión para tener acceso a todas las funcionalidades de la pagina"
        estaEnLogin={true}
      />

      <div className="form-container-login">
        <form id="formularioRegistro" onSubmit={submit}>
          <div className="mail">
            <label className="mail-text" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="correo"
              autoFocus
              placeholder="Introduce tu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="passwd">
            <label className="passwd-text" htmlFor="password">
              CONTRASEÑA
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="***********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="action-button-form">
            INICIAR SESIÓN
          </button>
          <div className="line-gray"></div>
          <div className="createAccount">
            <p className="createAccount-text">¿No tienes cuenta?</p>
            <a href="/register" className="btn-createAccount">
              REGISTRATE
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
