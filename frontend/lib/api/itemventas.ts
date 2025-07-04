import { ItemVenta } from "@/modelo/itemventas";

const BASE_URL = "/api/itemventas";

export async function getItemVentas(): Promise<ItemVenta[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}
