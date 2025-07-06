export interface Servicio {
  id?: number;              // Opcional: autogenerado por el backend
  nombre: string;           // Obligatorio
  descripcion?: string;     // Opcional
  costo: number;            // Obligatorio
}
