"use client";

import { useEffect, useState } from "react";
import { Cliente } from "@/modelo/cliente";
import { Servicio } from "@/modelo/servicios";
import { SolicitudServicio } from "@/modelo/solicitud";

import PaginaCliente from "@/componentes/PaginaCliente";
import PaginaServicios from "@/componentes/PaginaServicios";
import PaginaSolicitudes from "@/componentes/PaginaSolicitudes";
import ModalCliente from "@/componentes/ModalCliente";
import ModalServicio from "@/componentes/ModalServicio";
import NavBar from "@/componentes/NavBar";

import {
  getClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from "@/lib/api/cliente";

import {
  getServicios,
  crearServicio,
  actualizarServicio,
  eliminarServicio,
} from "@/lib/api/servicios";

import { getSolicitudes } from "@/lib/api/solicitudes";

export default function Page() {
  const [vista, setVista] = useState("clientes");

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [mostrarModalCliente, setMostrarModalCliente] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null);

  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [mostrarModalServicio, setMostrarModalServicio] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null);

  const [solicitudes, setSolicitudes] = useState<SolicitudServicio[]>([]);

  useEffect(() => {
    getClientes().then(setClientes).catch(console.error);
    getServicios().then(setServicios).catch(console.error);
    getSolicitudes().then(setSolicitudes).catch(console.error);
  }, []);

  const guardarCliente = async (cliente: Cliente) => {
    try {
      if (cliente.idCliente) {
        const actualizado = await actualizarCliente(cliente);
        setClientes((prev) => prev.map((c) => (c.idCliente === actualizado.idCliente ? actualizado : c)));
      } else {
        const nuevo = await crearCliente(cliente);
        setClientes((prev) => [...prev, nuevo]);
      }
    } catch (error) {
      console.error("Error al guardar cliente:", error);
    }
  };

  const guardarServicio = async (servicio: Servicio) => {
    try {
      if (servicio.idServicio) {
        const actualizado = await actualizarServicio(servicio);
        setServicios((prev) => prev.map((s) => (s.idServicio === actualizado.idServicio ? actualizado : s)));
      } else {
        const nuevo = await crearServicio(servicio);
        setServicios((prev) => [...prev, nuevo]);
      }
    } catch (error) {
      console.error("Error al guardar servicio:", error);
    }
  };

  const eliminarServicioHandler = async (id: number) => {
    try {
      await eliminarServicio(id);
      setServicios((prev) => prev.filter((s) => s.idServicio !== id));
    } catch (error) {
      console.error("Error al eliminar servicio:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar setVista={setVista} />

      {vista === "clientes" && (
        <>
          <PaginaCliente
            clientes={clientes}
            setMostrarModalCliente={setMostrarModalCliente}
            setClienteSeleccionado={setClienteSeleccionado}
          />
          {mostrarModalCliente && (
            <ModalCliente
              cliente={clienteSeleccionado}
              onGuardar={guardarCliente}
              onClose={() => setMostrarModalCliente(false)}
            />
          )}
        </>
      )}

      {vista === "servicios" && (
        <>
          <PaginaServicios
            servicios={servicios}
            agregarAlCarrito={() => {}}
            eliminarServicio={eliminarServicioHandler}
            setMostrarModalServicio={setMostrarModalServicio}
            setServicioSeleccionado={setServicioSeleccionado}
          />
          {mostrarModalServicio && (
            <ModalServicio
              servicio={servicioSeleccionado}
              onGuardar={guardarServicio}
              onClose={() => setMostrarModalServicio(false)}
            />
          )}
        </>
      )}

      {vista === "solicitudes" && <PaginaSolicitudes solicitudes={solicitudes} />}
    </main>
  );
}
