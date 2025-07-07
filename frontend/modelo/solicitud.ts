// modelo/solicitud.ts

export interface SolicitudServicio {
  idSolicitud: number;
  idCliente: number;
  idServicio: number;
  fechaSolicitud: string; // Formato ISO: "2025-07-06T15:30:00"
  estado: "Pendiente" | "Confirmado" | "Cancelado" | string;

  // Relaciones opcionales (si se incluye JOIN desde el backend)
  cliente?: {
    nombres: string;
    apellidos: string;
  };

  servicio?: {
    nombreServicio: string;
    costoServicio: number;
  };
}
