"use client";

import { Servicios } from "@/modelo/servicios";
import { useState, useEffect } from "react";

interface Props {
  servicio: Servicios | null;
  cerrar: () => void;
  guardar: (servicio: Servicios | Omit<Servicios, "idServicio">) => void;
}

const modalidades = ["Presencial", "Virtual", "Mixto"];

export default function ModalServicio({ servicio, cerrar, guardar }: Props) {
  const [formulario, setFormulario] = useState<Omit<Servicios, "idServicio">>({
    nombreServicio: "",
    descripcion: "",
    costoServicio: 0,
    especialidad: "",
    duracion: 30,
    modalidad: "Presencial",
  });

  useEffect(() => {
    if (servicio) {
      const { idServicio, ...resto } = servicio;
      setFormulario(resto);
    }
  }, [servicio]);

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: name === "costoServicio" || name === "duracion" ? Number(value) : value,
    }));
  };

  const enviarFormulario = () => {
    guardar(servicio ? { ...formulario, idServicio: servicio.idServicio } : formulario);
    cerrar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {servicio ? "Editar Servicio" : "Nuevo Servicio"}
        </h2>

        <input
          type="text"
          name="nombreServicio"
          value={formulario.nombreServicio}
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
          name="costoServicio"
          value={formulario.costoServicio}
          onChange={manejarCambio}
          placeholder="Costo"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          name="especialidad"
          value={formulario.especialidad}
          onChange={manejarCambio}
          placeholder="Especialidad (ej: Nutrición, Psicología)"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="number"
          name="duracion"
          value={formulario.duracion}
          onChange={manejarCambio}
          placeholder="Duración (minutos)"
          className="w-full mb-3 p-2 border rounded"
          min={1}
        />

        <select
          name="modalidad"
          value={formulario.modalidad}
          onChange={manejarCambio}
          className="w-full mb-4 p-2 border rounded"
        >
          {modalidades.map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>

        <div className="flex justify-end space-x-2">
          <button onClick={cerrar} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Cancelar
          </button>
          <button
            onClick={enviarFormulario}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
