"use client";

import { Servicio } from "@/modelo/servicio";
import { useState, useEffect } from "react";

interface Props {
  servicio: Servicio | null;
  cerrar: () => void;
  grabar: (servicio: Omit<Servicio, "id"> | Servicio) => void;
}

export default function ModalServicio({ servicio, cerrar, grabar }: Props) {
  const [formulario, setFormulario] = useState<Omit<Servicio, "id">>({
    nombre: "",
    descripcion: "",
    costo: 0,
  });

  useEffect(() => {
    if (servicio) {
      const { id, ...resto } = servicio;
      setFormulario(resto);
    }
  }, [servicio]);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: name === "costo" ? parseFloat(value) : value,
    }));
  };

  const enviarFormulario = () => {
    grabar(servicio ? { ...formulario, id: servicio.id } : formulario);
    cerrar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{servicio ? "Editar Servicio" : "Nuevo Servicio"}</h2>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          placeholder="Nombre del servicio"
          className="w-full mb-3 p-2 border rounded"
        />
        <textarea
          name="descripcion"
          value={formulario.descripcion}
          onChange={manejarCambio}
          placeholder="Descripción"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          name="costo"
          value={formulario.costo}
          onChange={manejarCambio}
          placeholder="Costo"
          className="w-full mb-4 p-2 border rounded"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={cerrar} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancelar
          </button>
          <button onClick={enviarFormulario} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
