// frontend/lib/api/empleado.ts
import { Empleado } from "@/modelo/empleado";

export async function obtenerEmpleados(): Promise<Empleado[]> {
  const res = await fetch("http://localhost:3001/empleados");
  if (!res.ok) throw new Error("Error al obtener empleados");
  return res.json();
}
