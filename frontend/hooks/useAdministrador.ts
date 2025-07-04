import { useEffect, useState } from "react";
import { Administrador } from "@/modelo/administrador";

export function useAdministradores() {
  const [administradores, setAdministradores] = useState<Administrador[]>([]);

  useEffect(() => {
    fetch("/api/administradores")
      .then((res) => res.json())
      .then(setAdministradores);
  }, []);

  return { administradores };
}
