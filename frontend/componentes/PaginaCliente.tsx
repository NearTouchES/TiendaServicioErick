"use client";

import { Cliente } from "@/modelo/cliente";

interface Props {
  clientes: Cliente[];
  setMostrarModalCliente: (mostrar: boolean) => void;
  setClienteSeleccionado: (cliente: Cliente | null) => void;
}

export default function PaginaCliente({ clientes, setMostrarModalCliente, setClienteSeleccionado }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setClienteSeleccionado(null);
          setMostrarModalCliente(true);
        }}
      >
        Nuevo Cliente
      </button>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Nombres</th>
            <th className="p-2">Apellidos</th>
            <th className="p-2">Correo</th>
            <th className="p-2">Teléfono</th>
            <th className="p-2">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.idCliente} className="border-t hover:bg-gray-50">
              <td className="p-2">{cliente.nombres}</td>
              <td className="p-2">{cliente.apellidos}</td>
              <td className="p-2">{cliente.correo}</td>
              <td className="p-2">{cliente.telefono}</td>
              <td className="p-2">{cliente.tipoCliente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
