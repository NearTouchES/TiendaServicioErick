import { Persona } from "./persona";

export interface Administrador {
  id?: number;
  salario: number;
  correo_institucional: string;
  id_persona: number;

  persona?: Persona;
}