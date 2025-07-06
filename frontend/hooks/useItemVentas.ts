"use client";

import { useEffect, useState } from "react";
import { ItemVenta } from "@/modelo/itemventas";
import { useMensaje } from "@/hooks/useMensaje";
import * as itemVentasApi from "@/lib/api/itemventas"; // asegurarte de crear este archivo

export function useItemVentas() {
  const [items, setItems] = useState<ItemVenta[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const { mostrarMensaje } = useMensaje();

  const cargarItems = async () => {
    setCargando(true);
    try {
      const datos = await itemVentasApi.getItemVentas();
      setItems(datos);
    } catch (error) {
      console.error("Error al cargar item ventas:", error);
      mostrarMensaje("No se pudieron cargar los items de venta.", "error");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarItems();
  }, []);

  return {
    items,
    setItems,
    cargarItems,
    cargando,
  };
}
