import { Servicio } from "@/modelo/servicio";

const BASE_URL = "/api/servicios";

export async function getServicios(): Promise<Servicio[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function crearServicio(servicio: Omit<Servicio, "id">): Promise<Servicio> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  return res.json();
}

export async function actualizarServicio(servicio: Servicio): Promise<Servicio> {
  const res = await fetch(`${BASE_URL}/${servicio.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  return res.json();
}

export async function eliminarServicio(id: number): Promise<void> {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
