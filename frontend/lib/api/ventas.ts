import { Venta } from "@/modelo/ventas";

const BASE_URL = process.env.API_URL;

export async function getVentas(): Promise<Venta[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/ventas`);
  return res.json();
}
