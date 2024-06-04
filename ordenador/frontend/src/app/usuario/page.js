"use client";
import { useEffect, useState } from "react";

export default function Usuario() {
  const [informacionUsuario, setInformacionUsuario] = useState(null);
  const sitioLaravel = process.env.NEXT_PUBLIC_SITIO_LARAVEL;

  useEffect(() => {
    const fetchInformacionUsuario = async () => {
      try {
        console.log(`Fetching from: ${sitioLaravel}/usuario`);
        const respuesta = await fetch(`${sitioLaravel}/usuario`, {
          credentials: "include",
        });
        const text = await respuesta.text();
        console.log("Raw response text:", text);

        if (respuesta.ok) {
          if (text) {
            const informacion = JSON.parse(text);
            console.log("Información recibida:", informacion);
            setInformacionUsuario(informacion);
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

    fetchInformacionUsuario();
  }, [sitioLaravel]);

  return (
    <>
      <h1>hola {informacionUsuario?.email}</h1>
    </>
  );
}
