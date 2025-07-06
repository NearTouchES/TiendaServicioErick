import { Persona } from "@/modelo/persona";

export async function getPersonas(): Promise<Persona[]> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }
  const response = await fetch(`${baseUrl}/personas`);
  if (!response.ok) {
    throw new Error(`Error al obtener personas: ${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function agregarPersona(persona: Omit<Persona, 'id'>): Promise<Persona> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/personas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(persona),
  });

  if (!response.ok) {
    throw new Error(`Error al agregar persona: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function actualizarPersona(personaActualizada: Persona): Promise<Persona> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/personas/${personaActualizada.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(personaActualizada),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar persona: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

export async function eliminarPersona(id: number): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;
  if (!baseUrl) {
    throw new Error("La URL base de la API no está definida");
  }

  const response = await fetch(`${baseUrl}/personas/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error al eliminar persona: ${response.status} ${response.statusText}`);
  }
}
