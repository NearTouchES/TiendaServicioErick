"use client";

import { Cliente } from "@/modelo/cliente";
import { useState } from "react";

interface Props {
  cliente?: Cliente | null;
  onGuardar: (cliente: Cliente) => void;
  onClose: () => void;
}

export default function ModalCliente({ cliente, onGuardar, onClose }: Props) {
  const [formData, setFormData] = useState<Cliente>(
    cliente ?? {
      idCliente: 0,
      nombres: "",
      apellidos: "",
      correo: "",
      telefono: "",
      direccion: "",
      tipoCliente: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onGuardar(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Registrar Cliente</h2>
        <div className="space-y-3">
          <input
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Nombres"
            className="w-full border p-2 rounded"
          />
          <input
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Apellidos"
            className="w-full border p-2 rounded"
          />
          <input
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className="w-full border p-2 rounded"
          />
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            className="w-full border p-2 rounded"
          />
          <input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full border p-2 rounded"
          />
          <input
            name="tipoCliente"
            value={formData.tipoCliente}
            onChange={handleChange}
            placeholder="Tipo de Cliente"
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
