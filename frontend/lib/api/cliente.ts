import { Cliente } from "@/modelo/cliente";

const BASE_URL = "/api/clientes";

export async function getClientes(): Promise<Cliente[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function crearCliente(cliente: Omit<Cliente, "id">): Promise<Cliente> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return res.json();
}

export async function actualizarCliente(cliente: Cliente): Promise<Cliente> {
  const res = await fetch(`${BASE_URL}/${cliente.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return res.json();
}

export async function eliminarCliente(id: number): Promise<void> {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
