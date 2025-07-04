import { useEffect, useState } from "react";
import { Empleado } from "@/modelo/empleado";

export function useEmpleado() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [cargando, setCargando] = useState(true);

  const obtenerEmpleados = async () => {
    setCargando(true);
    const res = await fetch("http://localhost:3001/empleados");
    const data = await res.json();
    setEmpleados(data);
    setCargando(false);
  };

  const grabar = async (empleado: Empleado | Omit<Empleado, "id">) => {
    const esNuevo = !("id" in empleado);
    const url = esNuevo
      ? "http://localhost:3001/empleados"
      : `http://localhost:3001/empleados/${empleado.id}`;
    const metodo = esNuevo ? "POST" : "PUT";

    const res = await fetch(url, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empleado),
    });

    const nuevo = await res.json();
    setEmpleados((prev) =>
      esNuevo ? [...prev, nuevo] : prev.map((e) => (e.id === nuevo.id ? nuevo : e))
    );
  };

  const eliminar = async (id: number) => {
    await fetch(`http://localhost:3001/empleados/${id}`, {
      method: "DELETE",
    });
    setEmpleados((prev) => prev.filter((e) => e.id !== id));
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  return {
    empleados,
    grabar,
    eliminar,
    cargando,
    setEmpleados,
  };
}
