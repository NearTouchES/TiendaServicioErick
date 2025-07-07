"use client";

import { useEffect, useState } from "react";
import { Cliente } from "@/modelo/cliente";

export default function useClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/clientes")
      .then((res) => res.json())
      .then(setClientes)
      .finally(() => setLoading(false));
  }, []);

  const crearOActualizar = async (cliente: Cliente) => {
    const metodo = cliente.idCliente ? "PUT" : "POST";
    const url = cliente.idCliente
      ? `/api/clientes/${cliente.idCliente}`
      : `/api/clientes`;

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });

    const data = await res.json();
    if (!cliente.idCliente) {
      setClientes((prev) => [...prev, data]);
    } else {
      setClientes((prev) =>
        prev.map((c) => (c.idCliente === data.idCliente ? data : c))
      );
    }
  };

  return {
    clientes,
    crearOActualizar,
    loading,
  };
}
