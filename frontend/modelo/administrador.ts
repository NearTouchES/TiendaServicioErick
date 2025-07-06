import { Persona } from "./persona";

export interface Administrador {
  id: number; // opcional al momento de crear
  salario: number;
  correo_institucional: string;
  id_persona: number;
  persona: Persona; // opcional si no se incluye desde el backend
}
