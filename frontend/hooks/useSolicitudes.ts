"use client";

import { useEffect, useState } from "react";
import { SolicitudServicio } from "@/modelo/solicitud";

export default function useSolicitudes() {
  const [solicitudes, setSolicitudes] = useState<SolicitudServicio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/solicitudes")
      .then((res) => res.json())
      .then(setSolicitudes)
      .finally(() => setLoading(false));
  }, []);

  const crearSolicitud = async (nueva: SolicitudServicio) => {
    const res = await fetch("/api/solicitudes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nueva),
    });

    const data = await res.json();
    setSolicitudes((prev) => [...prev, data]);
  };

  return {
    solicitudes,
    crearSolicitud,
    loading,
  };
}
