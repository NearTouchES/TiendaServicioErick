"use client";

import { useEffect, useState, useCallback } from "react";
import { Servicio } from "@/modelo/servicio";
import { useMensaje } from "@/hooks/useMensaje";
import {
  getServicios,
  crearServicio,
  actualizarServicio as apiActualizarServicio,
  eliminarServicio
} from "@/lib/api/servicios";

export function useServicios() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarModalServicio, setMostrarServicioModal] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null);
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

  const agregarServicio = async (servicio: Omit<Servicio, "id">) => {
    setCargando(true);
    try {
      const nuevo = await crearServicio(servicio);
      setServicios(prev => [...prev, nuevo]);
      mostrarMensaje("Servicio agregado correctamente.", "success");
      setMostrarServicioModal(false);
    } catch (error) {
      console.error("Error al agregar servicio:", error);
      mostrarMensaje("No se pudo agregar el servicio.", "error");
    } finally {
      setCargando(false);
    }
  };

  const actualizarServicio = async (servicio: Servicio) => {
    setCargando(true);
    try {
      const actualizado = await apiActualizarServicio(servicio);
      setServicios(prev =>
        prev.map(s => (s.id === actualizado.id ? actualizado : s))
      );
      mostrarMensaje("Servicio actualizado correctamente.", "success");
      setMostrarServicioModal(false);
    } catch (error) {
      console.error("Error al actualizar servicio:", error);
      mostrarMensaje("No se pudo actualizar el servicio.", "error");
    } finally {
      setCargando(false);
    }
  };

  const borrarServicio = async (id: number) => {
    setCargando(true);
    try {
      await eliminarServicio(id);
      setServicios(prev => prev.filter(s => s.id !== id));
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
    cargando,
    mostrarModalServicio,
    setMostrarServicioModal,
    servicioSeleccionado,
    setServicioSeleccionado,
    agregarServicio,
    actualizarServicio,
    borrarServicio,
    recargar: cargarServicios,
  };
}
