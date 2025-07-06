import { Administrador } from "@/modelo/administrador";

export async function getAdministradores(): Promise<Administrador[]> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/administradores`);
  if (!response.ok) {
    throw new Error(`Error al obtener administradores: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function agregarAdministrador(admin: Omit<Administrador, "id">): Promise<Administrador> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/administradores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(admin)
  });

  if (!response.ok) {
    throw new Error(`Error al agregar administrador: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarAdministrador(admin: Administrador): Promise<Administrador> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/administradores/${admin.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(admin)
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar administrador: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarAdministrador(id: number): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/administradores/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar administrador: ${response.status} ${response.statusText}`);
  }
}