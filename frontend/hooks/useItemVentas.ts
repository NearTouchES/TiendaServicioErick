import { useEffect, useState } from "react";
import { ItemVenta } from "@/modelo/itemventas";

export function useItemVentas() {
  const [items, setItems] = useState<ItemVenta[]>([]);

  useEffect(() => {
    fetch("/api/itemventas")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return { items };
}
