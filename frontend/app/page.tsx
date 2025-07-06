"use client";

import React, { useState } from "react";
import PaginaServicios from "@/componentes/PaginaServicios";
import ModalServicio from "@/componentes/ModalServicio";

import { useServicios } from "@/hooks/useServicios";
import { Servicio } from "@/modelo/servicio";

export default function TiendaServicioDashboard() {
  const [pagina, setPagina] = useState<"servicios">("servicios");

  const servicioHook = useServicios();

  const guardarServicio = async (servicio: Servicio | Omit<Servicio, "idServicio">) => {
    await servicioHook.registrarServicio(servicio);
    servicioHook.setMostrarModalServicio(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      {/* Encabezado */}
      <header className="bg-gray-800 py-6 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Panel de Servicios</h1>
          <button
            onClick={() => {
              setPagina("servicios");
              servicioHook.setServicioSeleccionado(null);
              servicioHook.setMostrarModalServicio(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            + Nuevo Servicio
          </button>
        </div>
      </header>

      {/* Contenido */}
      <main className="container mx-auto px-6 py-10">
        {pagina === "servicios" && (
          <PaginaServicios
            servicios={servicioHook.servicios}
            agregarAlCarrito={() => {}}
            eliminarServicio={servicioHook.eliminarServicio}
            setMostrarModalServicio={servicioHook.setMostrarModalServicio}
            setServicioSeleccionado={servicioHook.setServicioSeleccionado}
          />
        )}
      </main>

      {/* Modal de Servicio */}
      {servicioHook.mostrarModalServicio && (
        <ModalServicio
          servicio={servicioHook.servicioSeleccionado}
          cerrar={() => servicioHook.setMostrarModalServicio(false)}
          guardar={guardarServicio}
        />
      )}
    </div>
  );
}
