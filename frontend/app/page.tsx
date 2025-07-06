"use client";

import React, { useState } from "react";
import PaginaServicios from "@/componentes/PaginaServicios";
import ModalServicio from "@/componentes/ModalServicio";

import { useServicios } from "@/hooks/useServicios";
import { Servicios } from "@/modelo/servicios";

export default function TiendaServicioDashboard() {
  // Solo manejamos la página de "servicios"
  const [pagina, setPagina] = useState<"servicios">("servicios");

  const serviciosHook = useServicios();

  // Guardar (crear o actualizar) un servicio
  const guardarServicios = async (servicio: Servicios | Omit<Servicios, "idServicio">) => {
    await serviciosHook.registrarServicio(servicio);
    serviciosHook.setMostrarModalServicio(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      {/* Header */}
      <header className="bg-gray-800 py-6 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Panel de Servicios</h1>
          <button
            onClick={() => {
              setPagina("servicios");
              serviciosHook.setServicioSeleccionado(null);
              serviciosHook.setMostrarModalServicio(true);
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
            servicios={serviciosHook.servicios}
            agregarAlCarrito={() => {}}
            eliminarServicio={serviciosHook.eliminarServicio}
            setMostrarModalServicio={serviciosHook.setMostrarModalServicio}
            setServicioSeleccionado={serviciosHook.setServicioSeleccionado}
          />
        )}
      </main>

      {/* Modal de Servicios */}
      {serviciosHook.mostrarModalServicio && (
        <ModalServicio
          servicio={serviciosHook.servicioSeleccionado}
          cerrar={() => serviciosHook.setMostrarModalServicio(false)}
          guardar={guardarServicios}
        />
      )}
    </div>
  );
}
