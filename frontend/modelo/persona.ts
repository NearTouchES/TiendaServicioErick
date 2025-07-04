export interface Persona {
  id?: number; // ← lo haces opcional
  dni: string;
  nombres: string;
  apellidos: string;
  correo_personal: string;
}
