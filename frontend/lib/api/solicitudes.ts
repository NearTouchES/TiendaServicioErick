import { SolicitudServicio } from "@/modelo/solicitud";

const baseUrl = process.env.NEXT_PUBLIC_URL_BASE_API;

function validarBaseUrl() {
  if (!baseUrl) throw new Error("La URL base de la API no está definida");
}

export async function getSolicitudes(): Promise<SolicitudServicio[]> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/solicitudes`);
  if (!response.ok) throw new Error(`Error al obtener solicitudes: ${response.status}`);
  return await response.json();
}

export async function crearSolicitud(solicitud: Omit<SolicitudServicio, "idSolicitud">): Promise<SolicitudServicio> {
  validarBaseUrl();
  const response = await fetch(`${baseUrl}/solicitudes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(solicitud),
  });
  if (!response.ok) throw new Error(`Error al crear solicitud: ${response.status}`);
  return await response.json();
}
