import { Servicio } from "@/modelo/servicio";

const BASE_URL = process.env.API_URL;

export async function getServicios(): Promise<Servicio[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/servicios`);
  if (!res.ok) throw new Error("Error al obtener servicios");
  return res.json();
}

export async function crearServicio(servicio: Omit<Servicio, "id">): Promise<Servicio> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/servicios`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  if (!res.ok) throw new Error("Error al crear servicio");
  return res.json();
}

export async function actualizarServicio(servicio: Servicio): Promise<Servicio> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/servicios/${servicio.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  if (!res.ok) throw new Error("Error al actualizar servicio");
  return res.json();
}

export async function eliminarServicio(id: number): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/servicios/${id}`);
  if (!res.ok) throw new Error("Error al eliminar servicio");
}