// frontend/lib/api/empleado.ts
import { Empleado } from "@/modelo/empleado";

export async function obtenerEmpleados(): Promise<Empleado[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/empleados`);
  if (!res.ok) throw new Error("Error al obtener empleados");
  return res.json();
}
