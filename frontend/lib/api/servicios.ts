import { Servicio } from "@/modelo/servicio";

export async function getServicios(): Promise<Servicio[]> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) throw new Error("La URL base de la API no está definida");

  const response = await fetch(`${baseUrl}/servicio`);
  if (!response.ok) {
    throw new Error(`Error al obtener servicios: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function crearServicio(servicio: Omit<Servicio, "idServicio">): Promise<Servicio> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) throw new Error("La URL base de la API no está definida");

  const response = await fetch(`${baseUrl}/servicio`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });

  if (!response.ok) {
    throw new Error(`Error al crear servicio: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarServicio(servicio: Servicio): Promise<Servicio> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) throw new Error("La URL base de la API no está definida");

  const response = await fetch(`${baseUrl}/servicio/${servicio.idServicio}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar servicio: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarServicio(id: number): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) throw new Error("La URL base de la API no está definida");

  const response = await fetch(`${baseUrl}/servicio/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar servicio: ${response.status} ${response.statusText}`);
  }
}
