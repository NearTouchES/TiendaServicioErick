import { Venta } from "@/modelo/ventas";

const BASE_URL = "/api/ventas";

export async function getVentas(): Promise<Venta[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}
