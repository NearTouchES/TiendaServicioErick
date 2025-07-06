import { Empleado } from "@/modelo/empleado";

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;

if (!baseUrl) {
  throw new Error("La URL base de la API no está definida");
}

export async function obtenerEmpleados(): Promise<Empleado[]> {
  const response = await fetch(`${baseUrl}/empleados`);
  if (!response.ok) {
    throw new Error(`Error al obtener empleados: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function agregarEmpleado(empleado: Omit<Empleado, "id">): Promise<Empleado> {
  const response = await fetch(`${baseUrl}/empleados`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empleado),
  });

  if (!response.ok) {
    throw new Error(`Error al agregar empleado: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarEmpleado(empleado: Empleado): Promise<Empleado> {
  const response = await fetch(`${baseUrl}/empleados/${empleado.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empleado),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar empleado: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarEmpleado(id: number): Promise<void> {
  const response = await fetch(`${baseUrl}/empleados/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar empleado: ${response.status} ${response.statusText}`);
  }
}
