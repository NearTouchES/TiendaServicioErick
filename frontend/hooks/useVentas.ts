"use client";

import { useEffect, useState, useCallback } from "react";
import { Venta } from "@/modelo/ventas";
import { useMensaje } from "@/hooks/useMensaje";
import {
  getVentas,
  crearVenta,
  actualizarVenta as apiActualizarVenta,
  eliminarVenta
} from "@/lib/api/ventas";

export function useVentas() {
  const [ventas, setVentas] = useState<Venta[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const { mostrarMensaje } = useMensaje();

  const cargarVentas = useCallback(async () => {
    setCargando(true);
    try {
      const data = await getVentas();
      setVentas(data);
    } catch (error) {
      console.error("Error al cargar ventas:", error);
      mostrarMensaje("No se pudieron cargar las ventas.", "error");
    } finally {
      setCargando(false);
    }
  }, [mostrarMensaje]);

  useEffect(() => {
    cargarVentas();
  }, [cargarVentas]);

  const registrarVenta = async (venta: Omit<Venta, "id">) => {
    setCargando(true);
    try {
      const nueva = await crearVenta(venta);
      setVentas(prev => [...prev, nueva]);
      mostrarMensaje("Venta registrada correctamente.", "success");
    } catch (error) {
      console.error("Error al registrar venta:", error);
      mostrarMensaje("No se pudo registrar la venta.", "error");
    } finally {
      setCargando(false);
    }
  };

  const modificarVenta = async (venta: Venta) => {
    setCargando(true);
    try {
      const actualizada = await apiActualizarVenta(venta);
      setVentas(prev =>
        prev.map(v => (v.id === actualizada.id ? actualizada : v))
      );
      mostrarMensaje("Venta actualizada correctamente.", "success");
    } catch (error) {
      console.error("Error al actualizar venta:", error);
      mostrarMensaje("No se pudo actualizar la venta.", "error");
    } finally {
      setCargando(false);
    }
  };

  const borrarVenta = async (id: number) => {
    setCargando(true);
    try {
      await eliminarVenta(id);
      setVentas(prev => prev.filter(v => v.id !== id));
      mostrarMensaje("Venta eliminada correctamente.", "success");
    } catch (error) {
      console.error("Error al eliminar venta:", error);
      mostrarMensaje("No se pudo eliminar la venta.", "error");
    } finally {
      setCargando(false);
    }
  };

  return {
    ventas,
    cargando,
    registrarVenta,
    modificarVenta,
    borrarVenta,
    recargar: cargarVentas,
  };
}
