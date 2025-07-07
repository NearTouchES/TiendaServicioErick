"use client";

import { useEffect, useState } from "react";
import { Servicio } from "@/modelo/servicios";

export default function useServicios() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/servicios")
      .then((res) => res.json())
      .then(setServicios)
      .finally(() => setLoading(false));
  }, []);

  const guardarServicio = async (servicio: Servicio) => {
    const metodo = servicio.idServicio ? "PUT" : "POST";
    const url = servicio.idServicio
      ? `/api/servicios/${servicio.idServicio}`
      : `/api/servicios`;

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servicio),
    });

    const data = await res.json();
    if (!servicio.idServicio) {
      setServicios((prev) => [...prev, data]);
    } else {
      setServicios((prev) =>
        prev.map((s) => (s.idServicio === data.idServicio ? data : s))
      );
    }
  };

  const eliminarServicio = async (id: number) => {
    await fetch(`/api/servicios/${id}`, { method: "DELETE" });
    setServicios((prev) => prev.filter((s) => s.idServicio !== id));
  };

  return {
    servicios,
    guardarServicio,
    eliminarServicio,
    loading,
  };
}
