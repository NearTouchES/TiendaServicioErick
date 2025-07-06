"use client";

import { useEffect, useState, useCallback } from "react";
import { Servicios } from "@/modelo/servicios";
import { useMensaje } from "@/hooks/useMensaje";
import {
  getServicios,
  crearServicio,
  actualizarServicio as apiActualizarServicio,
  eliminarServicio as apiEliminarServicio,
} from "@/lib/api/servicios";

export function useServicios() {
  const [servicios, setServicios] = useState<Servicios[]>([]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicios | null>(null);
  const [mostrarModalServicio, setMostrarModalServicio] = useState<boolean>(false);
  const [cargando, setCargando] = useState<boolean>(false);
  const { mostrarMensaje } = useMensaje();

  const cargarServicios = useCallback(async () => {
    setCargando(true);
    try {
      const data = await getServicios();
      setServicios(data);
    } catch (error) {
      console.error("Error al cargar servicios:", error);
      mostrarMensaje("No se pudieron cargar los servicios.", "error");
    } finally {
      setCargando(false);
    }
  }, [mostrarMensaje]);

  useEffect(() => {
    cargarServicios();
  }, [cargarServicios]);

  const registrarServicio = async (servicio: Servicios | Omit<Servicios, "idServicio">) => {
    setCargando(true);
    const esNuevo = !("idServicio" in servicio);
    try {
      const resultado = esNuevo
        ? await crearServicio(servicio as Omit<Servicios, "idServicio">)
        : await apiActualizarServicio(servicio as Servicios);

      setServicios((prev) =>
        esNuevo
          ? [...prev, resultado]
          : prev.map((s) => (s.idServicio === resultado.idServicio ? resultado : s))
      );

      mostrarMensaje(
        esNuevo ? "Servicio agregado correctamente." : "Servicio actualizado correctamente.",
        "success"
      );

      setMostrarModalServicio(false);
      setServicioSeleccionado(null);
    } catch (error) {
      console.error("Error al guardar servicio:", error);
      mostrarMensaje("No se pudo guardar el servicio.", "error");
    } finally {
      setCargando(false);
    }
  };

  const eliminarServicioById = async (idServicio: number) => {
    setCargando(true);
    try {
      await apiEliminarServicio(idServicio);
      setServicios((prev) => prev.filter((s) => s.idServicio !== idServicio));
      mostrarMensaje("Servicio eliminado correctamente.", "success");
    } catch (error) {
      console.error("Error al eliminar servicio:", error);
      mostrarMensaje("No se pudo eliminar el servicio.", "error");
    } finally {
      setCargando(false);
    }
  };

  return {
    servicios,
    servicioSeleccionado,
    mostrarModalServicio,
    setServicioSeleccionado,
    setMostrarModalServicio,
    registrarServicio,
    eliminarServicio: eliminarServicioById,
    recargar: cargarServicios,
    cargando,
    setServicios,
  };
}
