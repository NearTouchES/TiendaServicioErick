"use client";

import { useEffect, useState, useCallback } from "react";
import { Cliente } from "@/modelo/cliente";
import { useMensaje } from "@/hooks/useMensaje";
import {
  getClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} from "@/lib/api/cliente";

export function useCliente() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { mostrarMensaje } = useMensaje();

  const cargarClientes = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      const data = await getClientes();
      setClientes(data);
    } catch (err: any) {
      console.error("Error al cargar clientes:", err);
      setError(err.message || "Error al cargar clientes");
      mostrarMensaje("No se pudieron cargar los clientes", "error");
    } finally {
      setCargando(false);
    }
  }, [mostrarMensaje]);

  useEffect(() => {
    cargarClientes();
  }, [cargarClientes]);

  const registrarCliente = async (cliente: Omit<Cliente, "id"> | Cliente) => {
    setCargando(true);
    try {
      const esNuevo = !("id" in cliente);
      const resultado = esNuevo
        ? await crearCliente(cliente)
        : await actualizarCliente(cliente as Cliente);

      setClientes(prev =>
        esNuevo
          ? [...prev, resultado]
          : prev.map(c => (c.id === resultado.id ? resultado : c))
      );

      mostrarMensaje(
        esNuevo ? "Cliente registrado correctamente." : "Cliente actualizado correctamente.",
        "success"
      );
    } catch (err: any) {
      console.error("Error al guardar cliente:", err);
      setError(err.message || "Error al guardar cliente");
      mostrarMensaje("No se pudo guardar el cliente", "error");
    } finally {
      setCargando(false);
    }
  };

  const borrarCliente = async (id: number) => {
    setCargando(true);
    try {
      await eliminarCliente(id);
      setClientes(prev => prev.filter(c => c.id !== id));
      mostrarMensaje("Cliente eliminado correctamente.", "success");
    } catch (err: any) {
      console.error("Error al eliminar cliente:", err);
      mostrarMensaje("No se pudo eliminar el cliente", "error");
    } finally {
      setCargando(false);
    }
  };

  return {
    clientes,
    cargando,
    error,
    registrarCliente,
    borrarCliente,
    recargarClientes: cargarClientes,
    setClientes,
  };
}
