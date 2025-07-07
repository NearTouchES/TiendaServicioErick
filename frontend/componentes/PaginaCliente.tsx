import { Cliente } from "@/modelo/cliente";

interface Props {
  clientes: Cliente[];
  setMostrarModalCliente: (mostrar: boolean) => void;
  setClienteSeleccionado: (cliente: Cliente) => void;
  eliminarCliente: (id: number) => void;
}

export default function PaginaCliente({
  clientes,
  setMostrarModalCliente,
  setClienteSeleccionado,
  eliminarCliente,
}: Props) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestión de Clientes</h2>

      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setClienteSeleccionado({
            idCliente: undefined,
            nombres: "",
            apellidos: "",
            correo: "",
            telefono: "",
            tipoCliente: "",
            direccion: "",
          });
          setMostrarModalCliente(true);
        }}
      >
        + Nuevo Cliente
      </button>

      <ul className="space-y-3">
        {clientes.map((cliente) => (
          <li
            key={cliente.idCliente}
            className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">
                {cliente.nombres} {cliente.apellidos}
              </p>
              <p className="text-sm text-gray-600">{cliente.correo}</p>
              <p className="text-sm text-gray-600">{cliente.telefono}</p>
              <p className="text-sm text-gray-500">{cliente.tipoCliente}</p>
              <p className="text-sm text-gray-500">{cliente.direccion}</p>
            </div>

            <div className="space-x-2">
              <button
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                onClick={() => {
                  setClienteSeleccionado(cliente);
                  setMostrarModalCliente(true);
                }}
              >
                Editar
              </button>
              <button
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => eliminarCliente(cliente.idCliente!)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
