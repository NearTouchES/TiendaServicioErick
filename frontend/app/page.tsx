"use client";

import { useState } from "react";

// Páginas principales
import PaginaServicios from "@/componentes/PaginaServicios";
import PaginaCliente from "@/componentes/PaginaCliente";
import PaginaEmpleado from "@/componentes/PaginaEmpleado";
import PaginaVentas from "@/componentes/PaginaVentas";

// Modales
import ModalServicio from "@/componentes/ModalServicio";
import ModalCliente from "@/componentes/ModalCliente";
import ModalEmpleado from "@/componentes/ModalEmpleado";

// Hooks
import { useServicios } from "@/hooks/useServicios";
import { useCliente } from "@/hooks/useCliente";
import { useEmpleado } from "@/hooks/useEmpleado";

// Modelos
import { Servicio } from "@/modelo/servicio";
import { Cliente } from "@/modelo/cliente";
import { Empleado } from "@/modelo/empleado";

type Pagina = "servicios" | "clientes" | "empleados" | "ventas";

export default function Home() {
  const [paginaActual, setPaginaActual] = useState<Pagina>("servicios");

  // Servicios
  const {
    servicios,
    mostrarModalServicio,
    setMostrarServicioModal,
    servicioSeleccionado,
    setServicioSeleccionado,
    agregarServicio,
    actualizarServicio,
    eliminarServicio,
  } = useServicios();

  // Clientes
  const {
    clientes,
    grabar: grabarCliente,
    cargando: cargandoClientes,
  } = useCliente();
  const [mostrarModalCliente, setMostrarModalCliente] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null);

  // Empleados
  const {
    empleados,
    grabar: grabarEmpleado,
    cargando: cargandoEmpleados,
  } = useEmpleado();
  const [mostrarModalEmpleado, setMostrarModalEmpleado] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState<Empleado | null>(null);

  // Funciones de Servicios
  const agregarAlCarrito = (servicio: Servicio) => {
    console.log("Agregado al carrito:", servicio);
  };

  const quitarProducto = async (id: number) => {
    await eliminarServicio(id);
  };

  const grabarServicio = async (servicio: Servicio | Omit<Servicio, "id">) => {
    if ("id" in servicio) {
      await actualizarServicio(servicio);
    } else {
      await agregarServicio(servicio);
    }
    setMostrarServicioModal(false);
  };

  const grabarClienteModal = async (cliente: Cliente | Omit<Cliente, "id">) => {
    await grabarCliente(cliente);
    setMostrarModalCliente(false);
  };

  const grabarEmpleadoModal = async (empleado: Empleado | Omit<Empleado, "id">) => {
    await grabarEmpleado(empleado);
    setMostrarModalEmpleado(false);
  };

  const paginas: Pagina[] = ["servicios", "clientes", "empleados", "ventas"];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Tienda de Servicios</div>
          <div className="flex space-x-6">
            {paginas.map((pagina) => (
              <button
                key={pagina}
                onClick={() => setPaginaActual(pagina)}
                className={`px-4 py-2 rounded-md ${
                  paginaActual === pagina
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {pagina.charAt(0).toUpperCase() + pagina.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        {paginaActual === "servicios" && (
          <>
            <PaginaServicios
              productos={servicios}
              agregarAlCarrito={agregarAlCarrito}
              quitarProducto={quitarProducto}
              setMostrarModalProducto={setMostrarServicioModal}
              setProductoSeleccionado={setServicioSeleccionado}
            />
            {mostrarModalServicio && (
              <ModalServicio
                servicio={servicioSeleccionado}
                cerrar={() => setMostrarServicioModal(false)}
                grabar={grabarServicio}
              />
            )}
          </>
        )}

        {paginaActual === "clientes" && (
          <>
            <PaginaCliente
              clientes={clientes}
              setMostrarModalCliente={setMostrarModalCliente}
              setClienteSeleccionado={setClienteSeleccionado}
            />
            {mostrarModalCliente && (
              <ModalCliente
                cliente={clienteSeleccionado}
                cerrar={() => setMostrarModalCliente(false)}
                grabar={grabarClienteModal}
              />
            )}
          </>
        )}

        {paginaActual === "empleados" && (
          <>
            <PaginaEmpleado
              empleados={empleados}
              setMostrarModalEmpleado={setMostrarModalEmpleado}
              setEmpleadoSeleccionado={setEmpleadoSeleccionado}
            />
            {mostrarModalEmpleado && (
              <ModalEmpleado
                empleado={empleadoSeleccionado}
                cerrar={() => setMostrarModalEmpleado(false)}
                grabar={grabarEmpleadoModal}
              />
            )}
          </>
        )}

        {paginaActual === "ventas" && <PaginaVentas />}
      </main>
    </div>
  );
}