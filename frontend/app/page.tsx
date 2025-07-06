"use client";

import React, { useState } from "react";
import PaginaServicios from "@/componentes/PaginaServicios";
import ModalServicio from "@/componentes/ModalServicio";

import { useServicios } from "@/hooks/useServicios";
import { Servicio } from "@/modelo/servicio";

export default function TiendaServicioDashboard() {
  const [pagina, setPagina] = useState<"clientes" | "empleados" | "servicios" | "ventas">("servicios");

  // Hook de servicios
  const servicioHook = useServicios();

  // Guardar servicio
  const guardarServicio = async (servicio: Servicio | Omit<Servicio, "idServicio">) => {
    if ("idServicio" in servicio) {
      await servicioHook.registrarServicio(servicio as Servicio);
    } else {
      await servicioHook.registrarServicio(servicio);
    }
    servicioHook.setMostrarModalServicio(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* NavBar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-around">
          {/* Comentado para mostrar solo servicios por ahora */}
          {/* {["clientes", "empleados", "servicios", "ventas"].map((p) => (
            <button
              key={p}
              onClick={() => setPagina(p as any)}
              className={`px-4 py-2 rounded-md text-white font-semibold ${
                pagina === p ? "bg-blue-600" : "hover:bg-gray-600"
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))} */}

          {/* Solo botón para servicios */}
          <button
            onClick={() => setPagina("servicios")}
            className="px-4 py-2 rounded-md text-white font-semibold bg-blue-600"
          >
            Servicios
          </button>
        </div>
      </nav>

      {/* Contenido según página actual */}
      <main className="p-6">
        {pagina === "servicios" && (
          <PaginaServicios
            servicios={servicioHook.servicios}
            agregarAlCarrito={() => {}}
            eliminarServicio={servicioHook.eliminarServicio}
            setMostrarModalServicio={servicioHook.setMostrarModalServicio}
            setServicioSeleccionado={servicioHook.setServicioSeleccionado}
          />
        )}

        {/* Comentado para mostrar solo servicios */}
        {/* {pagina === "clientes" && <PaginaClientes ... />} */}
        {/* {pagina === "empleados" && <PaginaEmpleados ... />} */}
        {/* {pagina === "ventas" && <PaginaVentas />} */}
      </main>

      {/* Modales */}
      {servicioHook.mostrarModalServicio && (
        <ModalServicio
          servicio={servicioHook.servicioSeleccionado}
          cerrar={() => servicioHook.setMostrarModalServicio(false)}
          guardar={guardarServicio}
        />
      )}

      {/* Comentados para mostrar solo servicios */}
      {/* {clienteHook.mostrarModalCliente && <ModalCliente ... />} */}
      {/* {empleadoHook.mostrarModalEmpleado && <ModalEmpleado ... />} */}
    </div>
  );
}
