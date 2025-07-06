import { useEffect, useState } from "react";
import { Persona } from "@/modelo/persona";

export function usePersonas() {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    fetch("/api/personas")
      .then((res) => res.json())
      .then(setPersonas);
  }, []);

  return { personas };
}
