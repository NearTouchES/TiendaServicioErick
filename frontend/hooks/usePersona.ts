"use client";

import { useEffect, useState, useCallback } from "react";
import { Persona } from "@/modelo/persona";
import { useMensaje } from "@/hooks/useMensaje";
import {
  getPersonas,
  agregarPersona,
  actualizarPersona,
  eliminarPersona
} from "@/lib/api/persona";

export function usePersonas() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const { mostrarMensaje } = useMensaje();

  const cargarPersonas = useCallback(async () => {
    setCargando(true);
    try {
      const data = await getPersonas();
      setPersonas(data);
    } catch (error) {
      console.error("Error al cargar personas:", error);
      mostrarMensaje("No se pudieron cargar las personas.", "error");
    } finally {
      setCargando(false);
    }
  }, [mostrarMensaje]);

  useEffect(() => {
    cargarPersonas();
  }, [cargarPersonas]);

  const grabarPersona = async (persona: Persona | Omit<Persona, "id">) => {
    setCargando(true);
    const esNueva = !("id" in persona);

    try {
      const personaGuardada = esNueva
        ? await agregarPersona(persona)
        : await actualizarPersona(persona as Persona);

      setPersonas((prev) =>
        esNueva
          ? [...prev, personaGuardada]
          : prev.map((p) => (p.id === personaGuardada.id ? personaGuardada : p))
      );

      mostrarMensaje(
        esNueva
          ? "Persona registrada exitosamente!"
          : "Persona actualizada exitosamente!",
        "success"
      );
    } catch (error) {
      console.error("Error al grabar persona:", error);
      mostrarMensaje("No se pudo guardar la persona.", "error");
    } finally {
      setCargando(false);
    }
  };

  const borrarPersona = async (id: number) => {
    setCargando(true);
    try {
      await eliminarPersona(id);
      setPersonas((prev) => prev.filter((p) => p.id !== id));
      mostrarMensaje("Persona eliminada exitosamente!", "success");
    } catch (error) {
      console.error("Error al eliminar persona:", error);
      mostrarMensaje("No se pudo eliminar la persona.", "error");
    } finally {
      setCargando(false);
    }
  };

  return {
    personas,
    cargando,
    grabarPersona,
    borrarPersona,
    recargar: cargarPersonas,
    setPersonas,
  };
}
