import { Cliente } from "./cliente";
import { Empleado } from "./empleado";

export interface Venta {
  id?: number;
  id_cliente: number;
  id_empleado: number;
  fecha: string;

  // Relaciones opcionales
  cliente?: Cliente;
  empleado?: Empleado;
}