"use client";

import { useEffect, useState, useCallback } from "react";
import { Empleado } from "@/modelo/empleado";
import { useMensaje } from "@/hooks/useMensaje";
import {
  obtenerEmpleados,
  agregarEmpleado,
  actualizarEmpleado,
  eliminarEmpleado as eliminarEmpleadoApi
} from "@/lib/api/empleado";

export function useEmpleado() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState<Empleado | null>(null);
  const [mostrarModalEmpleado, setMostrarModalEmpleado] = useState<boolean>(false);
  const [cargando, setCargando] = useState<boolean>(false);
  const { mostrarMensaje } = useMensaje();

  const cargarEmpleados = useCallback(async () => {
    setCargando(true);
    try {
      const data = await obtenerEmpleados();
      setEmpleados(data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
      mostrarMensaje("No se pudieron cargar los empleados.", "error");
    } finally {
      setCargando(false);
    }
  }, [mostrarMensaje]);

  useEffect(() => {
    cargarEmpleados();
  }, [cargarEmpleados]);

  const guardarEmpleado = async (empleado: Empleado | Omit<Empleado, "id">) => {
    setCargando(true);
    const esNuevo = !("id" in empleado);

    try {
      const empleadoGuardado = esNuevo
        ? await agregarEmpleado(empleado)
        : await actualizarEmpleado(empleado as Empleado);

      setEmpleados((prev) =>
        esNuevo
          ? [...prev, empleadoGuardado]
          : prev.map((e) => (e.id === empleadoGuardado.id ? empleadoGuardado : e))
      );

      mostrarMensaje(
        esNuevo
          ? "Empleado registrado exitosamente!"
          : "Empleado actualizado exitosamente!",
        "success"
      );

      setEmpleadoSeleccionado(null);
      setMostrarModalEmpleado(false);
    } catch (error) {
      console.error("Error al guardar empleado:", error);
      mostrarMensaje("No se pudo guardar el empleado.", "error");
    } finally {
      setCargando(false);
    }
  };

  const eliminarEmpleado = async (id: number) => {
    setCargando(true);
    try {
      await eliminarEmpleadoApi(id);
      setEmpleados((prev) => prev.filter((e) => e.id !== id));
      mostrarMensaje("Empleado eliminado exitosamente!", "success");
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
      mostrarMensaje("No se pudo eliminar el empleado.", "error");
    } finally {
      setCargando(false);
    }
  };

  return {
    empleados,
    empleadoSeleccionado,
    mostrarModalEmpleado,
    setEmpleadoSeleccionado,
    setMostrarModalEmpleado,
    guardarEmpleado,
    eliminarEmpleado,
    cargando,
    recargar: cargarEmpleados,
    setEmpleados,
  };
}
