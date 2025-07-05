import { Cliente } from "@/modelo/cliente";

const BASE_URL = process.env.API_URL;

export async function getClientes(): Promise<Cliente[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/clientes`);
  return res.json();
}

export async function crearCliente(cliente: Omit<Cliente, "id">): Promise<Cliente> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return res.json();
}

export async function actualizarCliente(cliente: Cliente): Promise<Cliente> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/clientes/${cliente.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cliente),
  });
  return res.json();
}

export async function eliminarCliente(id: number): Promise<void> {
  await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/clientes/${id}`, { method: "DELETE" });
}
