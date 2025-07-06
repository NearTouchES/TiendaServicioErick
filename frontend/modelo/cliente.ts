import { Persona } from "./persona";

export interface Cliente {
  id: number;
  tipo_cliente: string;
  id_persona: number;
  persona: Persona; // no opcional si siempre viene del backend
}
