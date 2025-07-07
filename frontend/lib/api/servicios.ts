import { Servicio } from "@/modelo/servicios";

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;

function validarBaseUrl() {
  if (!baseUrl) throw new Error("La URL base de la API no está definida");
}

export async function getServicios(): Promise<Servicio[]> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/servicios`);
  if (!response.ok) throw new Error(`Error al obtener servicios: ${response.status}`);
  return await response.json();
}

export async function crearServicio(servicio: Omit<Servicio, "idServicio">): Promise<Servicio> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/servicios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  if (!response.ok) throw new Error(`Error al crear servicio: ${response.status}`);
  return await response.json();
}

export async function actualizarServicio(servicio: Servicio): Promise<Servicio> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/servicios/${servicio.idServicio}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  if (!response.ok) throw new Error(`Error al actualizar servicio: ${response.status}`);
  return await response.json();
}

export async function eliminarServicio(id: number): Promise<void> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/servicios/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Error al eliminar servicio: ${response.status}`);
}
