"use client";

import { Servicio } from "@/modelo/servicios";
import { useState } from "react";

interface Props {
  servicio?: Servicio | null;
  onGuardar: (servicio: Servicio) => void;
  onClose: () => void;
}

export default function ModalServicio({ servicio, onGuardar, onClose }: Props) {
  const [formData, setFormData] = useState<Servicio>(
    servicio ?? {
      idServicio: 0,
      nombreServicio: "",
      descripcion: "",
      costoServicio: 0,
      especialidad: "",
      duracion: 0,
      modalidad: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "costoServicio" || name === "duracion" ? Number(value) : value,
    });
  };

  const handleSubmit = () => {
    onGuardar(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Servicio</h2>
        <div className="space-y-3">
          <input name="nombreServicio" value={formData.nombreServicio} onChange={handleChange} placeholder="Nombre" className="w-full border p-2 rounded" />
          <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" className="w-full border p-2 rounded" />
          <input name="especialidad" value={formData.especialidad} onChange={handleChange} placeholder="Especialidad" className="w-full border p-2 rounded" />
          <input name="modalidad" value={formData.modalidad} onChange={handleChange} placeholder="Modalidad" className="w-full border p-2 rounded" />
          <input type="number" name="duracion" value={formData.duracion} onChange={handleChange} placeholder="Duración (min)" className="w-full border p-2 rounded" />
          <input type="number" step="0.01" name="costoServicio" value={formData.costoServicio} onChange={handleChange} placeholder="Costo S/." className="w-full border p-2 rounded" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Guardar</button>
        </div>
      </div>
    </div>
  );
}
