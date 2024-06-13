"use client";
import Header from "../../../components/header";
import { useEffect, useState } from "react";
import "/styles/admin.css";
import "/styles/general.css";
export default function Admin() {
  const [informacionAdmin, setInformacionAdmin] = useState(null);
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;
  const [usuarios, setUsuarios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usuariosPorPagina = 5;

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

  const indiceUltimoUsuario = currentPage * usuariosPorPagina;
  const indicePrimerUsuario = indiceUltimoUsuario - usuariosPorPagina;
  const usuariosActuales = usuarios.slice(
    indicePrimerUsuario,
    indiceUltimoUsuario
  );

  const paginas = [];
  for (let i = 1; i <= Math.ceil(usuarios.length / usuariosPorPagina); i++) {
    paginas.push(i);
  }

  const cambiarPagina = (numeroPagina) => {
    setCurrentPage(numeroPagina);
  };

  return (
    <>
      <Header
        imagenFondo="/images/londres2.jpg"
        texto1={<span className="texto-con-letter-spacing">¡ BIENVENID@ </span>}
        texto2={
          <span className="texto-con-letter-spacing2">
            {informacionAdmin?.email} <span>!</span>
          </span>
        }
        cuerpoTexto="¡Estas a punto de comenzar tu próxima aventura! Explora el mundo con nosotros y descubre destinos inolvidables. 🌍✈️"
      />
      <div className="container-admin">
        <div className="background-table">
          <h2>Lista de Usuarios:</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido 1</th>
                <th>Apellido 2</th>
                <th>Email</th>
                <th>Móvil</th>
                {informacionAdmin?.email === "admin@admin" && <th>Acciones</th>}
              </tr>
            </thead>
            <tbody>
              {usuariosActuales
                .filter((usuario) => usuario.email !== informacionAdmin?.email)
                .map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.apellido1}</td>
                    <td>{usuario.apellido2}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.movil}</td>
                    {informacionAdmin?.email === "admin@admin" && (
                      <td>
                        <button onClick={() => eliminarUsuario(usuario.id)}>
                          Eliminar
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="pagination">
            {paginas.map((numero) => (
              <button
                key={numero}
                onClick={() => cambiarPagina(numero)}
                className={currentPage === numero ? "active" : ""}
              >
                {numero}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
