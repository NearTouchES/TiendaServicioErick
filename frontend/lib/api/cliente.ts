import { Cliente } from "@/modelo/cliente";

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;

function validarBaseUrl() {
  if (!baseUrl) throw new Error("La URL base de la API no está definida");
}

export async function getClientes(): Promise<Cliente[]> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/clientes`);
  if (!response.ok) throw new Error(`Error al obtener clientes: ${response.status}`);
  return await response.json();
}

export async function crearCliente(cliente: Omit<Cliente, "idCliente">): Promise<Cliente> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  if (!response.ok) throw new Error(`Error al crear cliente: ${response.status}`);
  return await response.json();
}

export async function actualizarCliente(cliente: Cliente): Promise<Cliente> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/clientes/${cliente.idCliente}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  if (!response.ok) throw new Error(`Error al actualizar cliente: ${response.status}`);
  return await response.json();
}

export async function eliminarCliente(id: number): Promise<void> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/clientes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Error al eliminar cliente: ${response.status}`);
}
