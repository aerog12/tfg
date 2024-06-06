"use client";
import { RefreshIcon } from "./icons";
import { useEffect, useState } from "react";
import "/styles/cuentaUsuario.css";
import "/styles/general.css";

export default function CuentaUsuario() {
  const [informacionUsuario, setInformacionUsuario] = useState({
    name: "",
    apellido1: "",
    apellido2: "",
    email: "",
    movil: "",
  });
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;

  useEffect(() => {
    const fetchInformacionUsuario = async () => {
      try {
        const respuesta = await fetch(`${sitioLaravel}/usuario`, {
          credentials: "include",
        });
        if (respuesta.ok) {
          const informacion = await respuesta.json();
          setInformacionUsuario(informacion);
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchInformacionUsuario();
  }, [sitioLaravel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformacionUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e, field) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`${sitioLaravel}/usuario/actualizar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ [field]: informacionUsuario[field] }),
      });

      if (respuesta.ok) {
        const data = await respuesta.json();
        setInformacionUsuario(data.usuario);
        alert("Datos actualizados");
      } else {
        console.error("Error updating user information:", respuesta.status);
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <form className="formularioRegistro">
      <div className="name-container">
        {["name", "apellido1", "apellido2"].map((field) => (
          <div className="name" key={field}>
            <label className="mail-text" htmlFor={field}>
              {field.toUpperCase()}
            </label>
            <div className="input-container-usuario">
              <input
                type="text"
                id={field}
                name={field}
                value={informacionUsuario[field]}
                onChange={handleChange}
                placeholder={`Introduce nuevo ${field}`}
              />
              <button
                type="submit"
                className="botonActualizar"
                onClick={(e) => handleUpdate(e, field)}
              >
                <RefreshIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="info-container">
        {["email", "movil"].map((field) => (
          <div className="name" key={field}>
            <label className="mail-text" htmlFor={field}>
              {field.toUpperCase()}
            </label>
            <div className="input-container-usuario">
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={informacionUsuario[field]}
                onChange={handleChange}
                placeholder={`Introduce nuevo ${field}`}
              />
              <button
                type="submit"
                className="botonActualizar"
                onClick={(e) => handleUpdate(e, field)}
              >
                <RefreshIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}
