export interface Cliente {
  idCliente: number;
  tipoCliente: string;

  // Datos del cliente directamente sin relación a persona
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  direccion: string;
}
