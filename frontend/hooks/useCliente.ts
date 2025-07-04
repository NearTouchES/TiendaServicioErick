import { useEffect, useState, useCallback } from "react";
import { Cliente } from "@/modelo/cliente";

export function useCliente() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener todos los clientes
  const cargarClientes = useCallback(async () => {
    try {
      setCargando(true);
      const res = await fetch("http://localhost:3001/clientes"); // o el endpoint real en AWS
      if (!res.ok) throw new Error("Error al cargar los clientes.");
      const data = await res.json();
      setClientes(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error desconocido");
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargarClientes();
  }, [cargarClientes]);

  // Agregar o actualizar cliente
  const grabar = async (cliente: Cliente | Omit<Cliente, "id">) => {
    try {
      const esNuevo = !("id" in cliente);
      const metodo = esNuevo ? "POST" : "PUT";
      const url = esNuevo
        ? "/api/clientes"
        : `/api/clientes/${cliente.id}`;

      const res = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente),
      });

      if (!res.ok) throw new Error("Error al guardar el cliente.");
      const nuevoCliente = await res.json();

      setClientes((prev) =>
        esNuevo
          ? [...prev, nuevoCliente]
          : prev.map((c) => (c.id === nuevoCliente.id ? nuevoCliente : c))
      );
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error desconocido");
    }
  };

  return {
    clientes,
    cargando,
    error,
    grabar,
    recargar: cargarClientes,
    setClientes,
  };
}