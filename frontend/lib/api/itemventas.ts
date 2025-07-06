import { ItemVenta } from "@/modelo/itemventas";

export async function getItemVentas(): Promise<ItemVenta[]> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }
  const response = await fetch(`${baseUrl}/itemventas`);
  if (!response.ok) {
    throw new Error(`Error al obtener ítems de venta: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function agregarItemVenta(item: Omit<ItemVenta, 'id'>): Promise<ItemVenta> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/itemventas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error(`Error al agregar ítem de venta: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarItemVenta(itemActualizado: ItemVenta): Promise<ItemVenta> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/itemventas/${itemActualizado.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemActualizado),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar ítem de venta: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarItemVenta(id: number): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/itemventas/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar ítem de venta: ${response.status} ${response.statusText}`);
  }
}