"use client";

import { useEffect, useState } from "react";
import { Cliente } from "@/modelo/cliente";
import { Persona } from "@/modelo/persona";

// ✅ Tipo personalizado para el formulario
type ClienteFormulario = {
  tipo_cliente: string;
  id_persona: number;
  persona: {
    dni: string;
    nombres: string;
    apellidos: string;
    correo_personal: string;
  };
};

interface Props {
  cliente: Cliente | null;
  cerrar: () => void;
  guardar: (cliente: Cliente | Omit<Cliente, "id">) => Promise<void>;
}

export default function ModalCliente({ cliente, cerrar, guardar }: Props) {
  const [formulario, setFormulario] = useState<ClienteFormulario>({
    tipo_cliente: "",
    id_persona: 0,
    persona: {
      dni: "",
      nombres: "",
      apellidos: "",
      correo_personal: "",
    },
  });

  useEffect(() => {
    if (cliente) {
      const { id, ...resto } = cliente;
      setFormulario(resto as ClienteFormulario);
    }
  }, [cliente]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (["dni", "nombres", "apellidos", "correo_personal"].includes(name)) {
      setFormulario((prev) => ({
        ...prev,
        persona: {
          ...prev.persona,
          [name]: value,
        },
      }));
    } else {
      setFormulario((prev) => ({ ...prev, [name]: value }));
    }
  };

  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    const datos = cliente ? { ...formulario, id: cliente.id } : formulario;
    await guardar(datos);
    cerrar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {cliente ? "Editar Cliente" : "Registrar Nuevo Cliente"}
        </h2>

        <form onSubmit={enviarFormulario} className="space-y-4">
          {[ 
            { id: "dni", label: "DNI", value: formulario.persona.dni },
            { id: "nombres", label: "Nombres", value: formulario.persona.nombres },
            { id: "apellidos", label: "Apellidos", value: formulario.persona.apellidos },
            { id: "correo_personal", label: "Correo", value: formulario.persona.correo_personal },
          ].map(({ id, label, value }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}

          <div>
            <label htmlFor="tipo_cliente" className="block text-sm font-medium text-gray-700">
              Tipo de Cliente
            </label>
            <input
              type="text"
              id="tipo_cliente"
              name="tipo_cliente"
              value={formulario.tipo_cliente}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={cerrar}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}