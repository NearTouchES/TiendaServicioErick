"use client";

import { Cliente } from "@/modelo/cliente";

interface Props {
  clientes: Cliente[];
  setMostrarModalCliente: (valor: boolean) => void;
  setClienteSeleccionado: (cliente: Cliente | null) => void;
}

export default function PaginaCliente({
  clientes,
  setMostrarModalCliente,
  setClienteSeleccionado,
}: Props) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Gestión de Clientes</h1>
        <button
          onClick={() => {
            setClienteSeleccionado(null);
            setMostrarModalCliente(true);
          }}
          className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Nuevo Cliente
        </button>
      </div>

      {clientes.length === 0 ? (
        <p className="text-gray-600 text-center">No hay clientes registrados.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 font-semibold uppercase tracking-wide">Nombres</th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wide">Apellidos</th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wide">Tipo de Cliente</th>
                <th className="px-6 py-3 font-semibold uppercase tracking-wide text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clientes.map((cliente) => (
                <tr key={cliente.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.persona?.nombres}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.persona?.apellidos}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.tipo_cliente}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => {
                        setClienteSeleccionado(cliente);
                        setMostrarModalCliente(true);
                      }}
                      className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
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
