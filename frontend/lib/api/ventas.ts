import { Venta } from "@/modelo/ventas";

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;

if (!baseUrl) {
  throw new Error("La URL base de la API no está definida");
}

export async function getVentas(): Promise<Venta[]> {
  const response = await fetch(`${baseUrl}/ventas`);
  if (!response.ok) {
    throw new Error(`Error al obtener ventas: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function crearVenta(venta: Omit<Venta, "id">): Promise<Venta> {
  const response = await fetch(`${baseUrl}/ventas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(venta),
  });

  if (!response.ok) {
    throw new Error(`Error al crear venta: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarVenta(venta: Venta): Promise<Venta> {
  const response = await fetch(`${baseUrl}/ventas/${venta.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(venta),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar venta: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarVenta(id: number): Promise<void> {
  const response = await fetch(`${baseUrl}/ventas/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar venta: ${response.status} ${response.statusText}`);
  }
}
