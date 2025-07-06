"use client";

import { useEffect, useState } from "react";
import * as adminApi from "@/lib/api/administrador";
import { Administrador } from "@/modelo/administrador";
import { useMensaje } from "@/hooks/useMensaje";

export function useAdministradores() {
  const [cargando, setCargando] = useState(false);
  const [administradores, setAdministradores] = useState<Administrador[]>([]);
  const [administradorSeleccionado, setAdministradorSeleccionado] = useState<Administrador | null>(null);
  const [mostrarModalAdministrador, setMostrarModalAdministrador] = useState<boolean>(false);
  const { mostrarMensaje } = useMensaje();

  useEffect(() => {
    const cargarAdministradores = async () => {
      setCargando(true);
      try {
        const fetchedAdmins = await adminApi.getAdministradores();
        setAdministradores(fetchedAdmins);
      } catch (error) {
        mostrarMensaje("No se pudieron cargar los administradores.", "error");
        console.error("Error al cargar administradores:", error);
      } finally {
        setCargando(false);
      }
    };
    cargarAdministradores();
  }, []);

  const crearAdministrador = async (admin: Omit<Administrador, "id">) => {
    setCargando(true);
    try {
      const nuevoAdmin = await adminApi.agregarAdministrador(admin);
      setAdministradores((prev) => [...prev, nuevoAdmin]);
      mostrarMensaje("Administrador creado correctamente", "success");
      setMostrarModalAdministrador(false);
    } catch (error) {
      mostrarMensaje("No se pudo crear el administrador", "error");
      console.error("Error al crear administrador:", error);
    } finally {
      setCargando(false);
    }
  };

  const actualizarAdministrador = async (admin: Administrador) => {
    if (!admin.id) {
      mostrarMensaje("ID del administrador no especificado", "error");
      return;
    }
    setCargando(true);
    try {
      const actualizado = await adminApi.actualizarAdministrador(admin);
      setAdministradores((prev) => prev.map((a) => (a.id === actualizado.id ? actualizado : a)));
      mostrarMensaje("Administrador actualizado correctamente", "success");
      setAdministradorSeleccionado(null);
      setMostrarModalAdministrador(false);
    } catch (error) {
      mostrarMensaje("No se pudo actualizar el administrador", "error");
      console.error("Error al actualizar administrador:", error);
    } finally {
      setCargando(false);
    }
  };

  const eliminarAdministrador = async (id: number) => {
    setCargando(true);
    try {
      await adminApi.eliminarAdministrador(id);
      setAdministradores((prev) => prev.filter((a) => a.id !== id));
      mostrarMensaje("Administrador eliminado correctamente", "success");
    } catch (error) {
      mostrarMensaje("No se pudo eliminar el administrador", "error");
      console.error("Error al eliminar administrador:", error);
    } finally {
      setCargando(false);
    }
  };

  return {
    administradores,
    administradorSeleccionado,
    mostrarModalAdministrador,
    setAdministradorSeleccionado,
    setMostrarModalAdministrador,
    crearAdministrador,
    actualizarAdministrador,
    eliminarAdministrador,
    cargando,
  };
}
