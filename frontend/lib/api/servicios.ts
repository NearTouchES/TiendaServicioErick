import { Servicio } from "@/modelo/servicio";

// Usa la variable de entorno si existe, o la URL del ALB directamente como fallback
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL || "http://tienda-servicio-alb-1464369660.us-east-1.elb.amazonaws.com"}/api/servicios`;

export async function getServicios(): Promise<Servicio[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener servicios");
  return res.json();
}

export async function crearServicio(servicio: Omit<Servicio, "id">): Promise<Servicio> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  if (!res.ok) throw new Error("Error al crear servicio");
  return res.json();
}

export async function actualizarServicio(servicio: Servicio): Promise<Servicio> {
  const res = await fetch(`${BASE_URL}/${servicio.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(servicio),
  });
  if (!res.ok) throw new Error("Error al actualizar servicio");
  return res.json();
}

export async function eliminarServicio(id: number): Promise<void> {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar servicio");
}