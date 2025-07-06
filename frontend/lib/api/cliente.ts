import { Cliente } from "@/modelo/cliente";

export async function getClientes(): Promise<Cliente[]> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }
  const response = await fetch(`${baseUrl}/clientes`);
  if (!response.ok) {
    throw new Error(`Error al obtener clientes: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function crearCliente(cliente: Omit<Cliente, "id">): Promise<Cliente> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });

  if (!response.ok) {
    throw new Error(`Error al crear cliente: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarCliente(cliente: Cliente): Promise<Cliente> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/clientes/${cliente.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar cliente: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarCliente(id: number): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/clientes/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar cliente: ${response.status} ${response.statusText}`);
  }
}
