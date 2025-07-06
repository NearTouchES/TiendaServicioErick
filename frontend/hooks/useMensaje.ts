"use client";

import { useState, useRef } from "react";

type TipoMensaje = 'success' | 'error' | '';

interface Mensaje {
  text: string;
  type: TipoMensaje;
}

export function useMensaje() {
  const [mensaje, setMensaje] = useState<Mensaje>({ text: '', type: '' });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mostrarMensaje = (text: string, type: 'success' | 'error', duracion: number = 3000) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setMensaje({ text, type });

    timeoutRef.current = setTimeout(() => {
      setMensaje({ text: '', type: '' });
      timeoutRef.current = null;
    }, duracion);
  };

  return {
    mensaje,
    mostrarMensaje,
  };
}