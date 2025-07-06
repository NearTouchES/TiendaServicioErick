import { Persona } from "./persona";

export interface Empleado {
  id: number;
  puesto: string;
  salario: number;
  correo_institucional?: string;
  fecha_inicio?: string; // formato ISO: "2025-07-06T00:00:00"
  fecha_fin?: string;
  id_persona: number;
  persona: Persona; // viene del backend si hay join
}
