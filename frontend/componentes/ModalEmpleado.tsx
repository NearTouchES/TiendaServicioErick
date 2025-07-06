"use client";

import { useEffect, useState } from "react";
import { Empleado } from "@/modelo/empleado";

interface Props {
  empleado: Empleado | null;
  cerrar: () => void;
  guardar: (empleado: Empleado | Omit<Empleado, "id">) => Promise<void>;
}

export default function ModalEmpleado({ empleado, cerrar, guardar }: Props) {
  const [formulario, setFormulario] = useState<Omit<Empleado, "id">>({
    puesto: "",
    salario: 0,
    id_persona: 0,
    persona: {
      dni: "",
      nombres: "",
      apellidos: "",
      correo_personal: "",
    },
  });

  useEffect(() => {
    if (empleado) {
      const { id, ...resto } = empleado;
      // Aseguramos que persona no tenga campos undefined
      setFormulario({
        ...resto,
        persona: {
          dni: resto.persona?.dni || "",
          nombres: resto.persona?.nombres || "",
          apellidos: resto.persona?.apellidos || "",
          correo_personal: resto.persona?.correo_personal || "",
        },
      });
    }
  }, [empleado]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (["dni", "nombres", "apellidos", "correo_personal"].includes(name)) {
      setFormulario((prev) => ({
        ...prev,
        persona: {
          ...prev.persona,
          [name]: value,
        },
      }));
    } else if (name === "salario") {
      setFormulario((prev) => ({
        ...prev,
        salario: parseFloat(value) || 0,
      }));
    } else {
      setFormulario((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    const datos = empleado ? { ...formulario, id: empleado.id } : formulario;
    await guardar(datos);
    cerrar();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {empleado ? "Editar Empleado" : "Registrar Empleado"}
        </h2>

        <form onSubmit={enviarFormulario} className="space-y-4">
          {[
            { id: "dni", label: "DNI", value: formulario.persona.dni },
            { id: "nombres", label: "Nombres", value: formulario.persona.nombres },
            { id: "apellidos", label: "Apellidos", value: formulario.persona.apellidos },
            { id: "correo_personal", label: "Correo Personal", value: formulario.persona.correo_personal },
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          ))}

          <div>
            <label htmlFor="puesto" className="block text-sm font-medium text-gray-700">
              Puesto
            </label>
            <input
              type="text"
              id="puesto"
              name="puesto"
              value={formulario.puesto}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="salario" className="block text-sm font-medium text-gray-700">
              Salario (S/.)
            </label>
            <input
              type="number"
              id="salario"
              name="salario"
              value={formulario.salario}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={cerrar}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
