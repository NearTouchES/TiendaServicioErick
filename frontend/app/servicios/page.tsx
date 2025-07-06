"use client";

import PaginaServicios from "@/componentes/PaginaServicios";
import ModalServicio from "@/componentes/ModalServicio";
import { useServicios } from "@/hooks/useServicios";
import { Servicio } from "@/modelo/servicio";

export default function PaginaServiciosApp() {
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

  const agregarAlCarrito = (servicio: Servicio) => {
    console.log("Agregado al carrito:", servicio);
  };

  const quitarProducto = async (id: number) => {
    await eliminarServicio(id);
  };

  const guardarServicio = async (servicio: Servicio | Omit<Servicio, "id">) => {
    if ("id" in servicio) {
      await actualizarServicio(servicio);
    } else {
      await agregarServicio(servicio);
    }
    setMostrarServicioModal(false);
  };

  return (
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
          guardar={guardarServicio}
        />
      )}
    </>
  );
}
