import { Persona } from "./persona";

export interface Empleado {
  id: number;
  puesto: string;
  salario: number;
  correo_institucional?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  id_persona: number; // clave foránea
  persona: Persona;   // objeto anidado
}