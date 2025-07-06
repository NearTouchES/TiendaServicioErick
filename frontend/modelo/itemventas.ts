import { Servicio } from "./servicios";
import { Venta } from "./ventas";

export interface ItemVenta {
  id: number;
  id_venta: number;
  id_servicio: number;
  fecha_inicio: string;    // formato ISO "YYYY-MM-DD"
  fecha_fin?: string;      // opcional, puede estar en curso
  subtotal: number;

  // Relaciones opcionales si el backend las incluye
  servicio?: Servicio;
  venta?: Venta;
}
