// componente: PaginaCliente.tsx
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
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>
      <button
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {
          setClienteSeleccionado(null);
          setMostrarModalCliente(true);
        }}
      >
        Nuevo Cliente
      </button>
      <ul className="space-y-2">
        {clientes.map((cliente) => (
          <li key={cliente.id} className="p-2 bg-white border rounded shadow">
            {cliente.persona?.nombres} {cliente.persona?.apellidos} -{" "}
            {cliente.tipo_cliente}
            <button
              className="ml-4 text-blue-600 underline"
              onClick={() => {
                setClienteSeleccionado(cliente);
                setMostrarModalCliente(true);
              }}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
