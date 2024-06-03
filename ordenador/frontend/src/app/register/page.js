"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../../../components/header";
import "/styles/headerTextContainer.css";
import "/styles/form.css";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("sitioLaravel:", sitioLaravel);

      const registerResponse = await fetch(`${sitioLaravel}/registro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });

      if (registerResponse.ok) {
        const loginResponse = await fetch(`${sitioLaravel}/login`, {
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

        if (loginResponse.ok) {
          router.push("/destinos");
        } else {
          // Handle login error
          console.error("Login failed");
        }
      } else {
        // Handle registration error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header
        imagenFondo="/images/fondosNavbar/fondoLogin.jpg"
        texto1="CREAR NUEVA"
        texto2="CUENTA"
        cuerpoTexto="Cree una nueva cuenta para tener acceso a todas las funcionalidades de la pagina"
        estaEnRegistro={true}
      />
      <div className="form-container">
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
              disabled={isSubmitting}
            />
          </div>
          <div className="name">
            <label className="mail-text" htmlFor="name">
              NOMBRE COMPLETO
            </label>
            <input
              type="text"
              id="name"
              name="usuario"
              placeholder="Introduce tu nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          <button type="submit" className="action-button-form" disabled={isSubmitting}>
            REGISTRATE
          </button>
          <div className="line-gray"></div>
          <div className="createAccount">
            <p className="createAccount-text">¿Tienes cuenta?</p>
            <a href="/login" className="btn-createAccount">
              INICIA SESIÓN
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
