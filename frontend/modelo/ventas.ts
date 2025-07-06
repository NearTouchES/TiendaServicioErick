import { Cliente } from "./cliente";
import { Empleado } from "./empleado";

export interface Venta {
  id?: number;             // Opcional, lo genera el backend
  id_cliente: number;      // FK requerida
  id_empleado: number;     // FK requerida
  fecha: string;           // Obligatorio (ISO date string)

  // Relaciones opcionales para expandir info si viene del backend
  cliente?: Cliente;
  empleado?: Empleado;
}
