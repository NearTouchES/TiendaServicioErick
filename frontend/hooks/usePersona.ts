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
  const [personaSeleccionada, setPersonaSeleccionada] = useState<Persona | null>(null);
  const [mostrarModalPersona, setMostrarModalPersona] = useState(false);
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

  const guardarPersona = async (persona: Persona | Omit<Persona, "id">) => {
    setCargando(true);
    const esNueva = !("id" in persona);
    try {
      const personaGuardada = esNueva
        ? await agregarPersona(persona)
        : await actualizarPersona(persona as Persona);

      setPersonas(prev =>
        esNueva
          ? [...prev, personaGuardada]
          : prev.map(p => (p.id === personaGuardada.id ? personaGuardada : p))
      );

      mostrarMensaje(
        esNueva ? "Persona registrada exitosamente!" : "Persona actualizada exitosamente!",
        "success"
      );

      setMostrarModalPersona(false);
      setPersonaSeleccionada(null);
    } catch (error) {
      console.error("Error al guardar persona:", error);
      mostrarMensaje("No se pudo guardar la persona.", "error");
    } finally {
      setCargando(false);
    }
  };

  const eliminarPersonaById = async (id: number) => {
    setCargando(true);
    try {
      await eliminarPersona(id);
      setPersonas(prev => prev.filter(p => p.id !== id));
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
    personaSeleccionada,
    mostrarModalPersona,
    setPersonas,
    setPersonaSeleccionada,
    setMostrarModalPersona,
    guardarPersona,
    eliminarPersona: eliminarPersonaById,
    recargar: cargarPersonas,
    cargando,
  };
}
