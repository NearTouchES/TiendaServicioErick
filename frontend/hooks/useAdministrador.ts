"use client";

import { useEffect, useState } from "react";
import {
  getAdministradores,
  agregarAdministrador,
  actualizarAdministrador,
  eliminarAdministrador
} from "@/lib/api/administrador";
import { Administrador } from "@/modelo/administrador";
import { useMensaje } from "@/hooks/useMensaje";

export function useAdministradores() {
  const [administradores, setAdministradores] = useState<Administrador[]>([]);
  const [cargando, setCargando] = useState(false);
  const { mostrarMensaje } = useMensaje();

  const cargarAdministradores = async () => {
    setCargando(true);
    try {
      const data = await getAdministradores();
      setAdministradores(data);
    } catch (error) {
      console.error("Error al cargar administradores:", error);
      mostrarMensaje("Error al cargar administradores", "error");
    } finally {
      setCargando(false);
    }
  };

  const crearAdministrador = async (admin: Omit<Administrador, "id">) => {
    setCargando(true);
    try {
      const nuevo = await agregarAdministrador(admin);
      setAdministradores((prev) => [...prev, nuevo]);
      mostrarMensaje("Administrador creado correctamente", "success");
    } catch (error) {
      console.error("Error al crear administrador:", error);
      mostrarMensaje("No se pudo crear el administrador", "error");
    } finally {
      setCargando(false);
    }
  };

  const editarAdministrador = async (admin: Administrador) => {
    if (!admin.id) {
      mostrarMensaje("ID del administrador no especificado", "error");
      return;
    }

    setCargando(true);
    try {
      const actualizado = await actualizarAdministrador(admin);
      setAdministradores((prev) =>
        prev.map((a) => (a.id === actualizado.id ? actualizado : a))
      );
      mostrarMensaje("Administrador actualizado", "success");
    } catch (error) {
      console.error("Error al actualizar administrador:", error);
      mostrarMensaje("No se pudo actualizar el administrador", "error");
    } finally {
      setCargando(false);
    }
  };

  const eliminarAdministrador = async (id: number) => {
    setCargando(true);
    try {
      await eliminarAdministrador(id);
      setAdministradores((prev) => prev.filter((a) => a.id !== id));
      mostrarMensaje("Administrador eliminado", "success");
    } catch (error) {
      console.error("Error al eliminar administrador:", error);
      mostrarMensaje("No se pudo eliminar el administrador", "error");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarAdministradores();
  }, []);

  return {
    administradores,
    cargando,
    cargarAdministradores,
    crearAdministrador,
    editarAdministrador,
    eliminarAdministrador,
    setAdministradores,
  };
}
