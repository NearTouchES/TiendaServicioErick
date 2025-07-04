"use client";

import { useState, useEffect } from "react";
import { Servicio } from "@/modelo/servicio";

export function useServicios() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarModalServicio, setMostrarServicioModal] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null);

  const obtenerServicios = async () => {
    setCargando(true);
    const res = await fetch("http://localhost:3001/servicios");
    const data = await res.json();
    setServicios(data);
    setCargando(false);
  };

  const agregarServicio = async (servicio: Omit<Servicio, "id">) => {
    const res = await fetch("http://localhost:3001/servicios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servicio),
    });
    const nuevo = await res.json();
    setServicios([...servicios, nuevo]);
  };

  const actualizarServicio = async (servicio: Servicio) => {
    await fetch(`http://localhost:3001/servicios/${servicio.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servicio),
    });
    setServicios(servicios.map((s) => (s.id === servicio.id ? servicio : s)));
  };

  const eliminarServicio = async (id: number) => {
    await fetch(`http://localhost:3001/servicios/${id}`, {
      method: "DELETE",
    });
    setServicios(servicios.filter((s) => s.id !== id));
  };

  useEffect(() => {
    obtenerServicios();
  }, []);

  return {
    servicios,
    cargando,
    mostrarModalServicio,
    setMostrarServicioModal,
    servicioSeleccionado,
    setServicioSeleccionado,
    agregarServicio,
    actualizarServicio,
    eliminarServicio,
  };
}
