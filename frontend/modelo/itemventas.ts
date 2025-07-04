import { Servicio } from "./servicio";
import { Venta } from "./ventas";

export interface ItemVenta {
  id?: number;
  id_venta: number;
  id_servicio: number;
  fecha_inicio: string;
  fecha_fin?: string;
  subtotal: number;

  // Relaciones opcionales
  servicio?: Servicio;
  venta?: Venta;
}
