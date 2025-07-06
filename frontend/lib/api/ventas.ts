import { Venta } from "@/modelo/ventas";

export async function getVentas(): Promise<Venta[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/ventas`);
  return res.json();
}
