import { ItemVenta } from "@/modelo/itemventas";


export async function getItemVentas(): Promise<ItemVenta[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/itemventas`);
  return res.json();
}
