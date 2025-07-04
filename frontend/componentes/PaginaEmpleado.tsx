"use client";

import { Empleado } from "@/modelo/empleado";

interface Props {
  empleados: Empleado[];
  setMostrarModalEmpleado: (valor: boolean) => void;
  setEmpleadoSeleccionado: (empleado: Empleado | null) => void;
}

export default function PaginaEmpleado({
  empleados,
  setMostrarModalEmpleado,
  setEmpleadoSeleccionado,
}: Props) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-between items-center">
        Empleados
        <button
          onClick={() => {
            setEmpleadoSeleccionado(null);
            setMostrarModalEmpleado(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Nuevo Empleado
        </button>
      </h1>

      {empleados.length === 0 ? (
        <p className="text-gray-600">No hay empleados registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombres</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellidos</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puesto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {empleados.map((empleado) => (
                <tr key={empleado.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{empleado.persona?.nombres}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{empleado.persona?.apellidos}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{empleado.puesto}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => {
                        setEmpleadoSeleccionado(empleado);
                        setMostrarModalEmpleado(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}