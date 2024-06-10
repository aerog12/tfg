"use client";
import Header from "../../../components/header";
import { useEffect, useState } from "react";
import "/styles/admin.css";
import "/styles/general.css";
export default function Admin() {
  const [informacionAdmin, setInformacionAdmin] = useState(null);
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    const fetchInformacionAdmin = async () => {
      try {
        const respuesta = await fetch(`${sitioLaravel}/usuario`, {
          credentials: "include",
        });
        if (respuesta.ok) {
          const text = await respuesta.text();
          if (text) {
            const informacion = JSON.parse(text);
            setInformacionAdmin(informacion);
          } else {
            console.warn("La respuesta está vacía");
          }
        } else {
          console.error("Error en la respuesta de la API:", respuesta.status);
        }
      } catch (error) {
        console.error("Error fetching admin information:", error);
      }
    };

    const fetchUsuarios = async () => {
      try {
        const respuesta = await fetch(`${sitioLaravel}/usuarios`, {
          credentials: "include",
        });
        if (respuesta.ok) {
          const text = await respuesta.text();
          if (text) {
            const usuarios = JSON.parse(text);
            setUsuarios(usuarios);
          } else {
            console.warn("La respuesta está vacía");
          }
        } else {
          console.error("Error en la respuesta de la API:", respuesta.status);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchInformacionAdmin();
    fetchUsuarios();
  }, [sitioLaravel]);

  const eliminarUsuario = async (userId) => {
    try {
      const respuesta = await fetch(`${sitioLaravel}/usuario/${userId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (respuesta.ok) {
        setUsuarios(usuarios.filter((usuario) => usuario.id !== userId));
      } else {
        console.error("Error al eliminar el usuario:", respuesta.status);
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  return (
    <>
      <Header
        imagenFondo="/images/londres2.jpg"
        // isAuthenticated={estaLogueado}
        texto1={<span className="texto-con-letter-spacing">¡ BIENVENID@ </span>}
        texto2={
          <span className="texto-con-letter-spacing2">
            {/* {`${informacionUsuario?.name}`} <span> !</span> */}
          </span>
        }
        cuerpoTexto="¡Estas a punto de comenzar tu próxima aventura! Explora el mundo con nosotros y descubre destinos inolvidables. 🌍✈️"
      />
      <div className="container-admin">
        <h1>Hola {informacionAdmin?.email}</h1>
        <h2>Lista de Usuarios:</h2>

        <ul>
          {usuarios
            .filter((usuario) => usuario.email !== informacionAdmin?.email) // Filtrar el administrador
            .map((usuario) => (
              <li key={usuario.id}>
                {usuario.name} - {usuario.apellido1} - {usuario.apellido2} - -{" "}
                {usuario.movil} - {usuario.email} -
                {informacionAdmin?.email === "admin@admin" && (
                  <button onClick={() => eliminarUsuario(usuario.id)}>
                    Eliminar
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
