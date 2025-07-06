export interface Persona {
  id: number;               // Opcional: el backend lo genera al crear
  dni: string;               // Obligatorio
  nombres: string;           // Obligatorio
  apellidos: string;         // Obligatorio
  correo_personal: string;   // Obligatorio
}
