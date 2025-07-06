import { useEffect, useState } from "react";
import { Venta } from "@/modelo/ventas";

export function useVentas() {
  const [ventas, setVentas] = useState<Venta[]>([]);

  useEffect(() => {
    fetch("/api/ventas")
      .then((res) => res.json())
      .then(setVentas);
  }, []);

  return { ventas };
}
