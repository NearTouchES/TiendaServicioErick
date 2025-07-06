"use client";

import PaginaCliente from "@/componentes/PaginaCliente";
import ModalCliente from "@/componentes/ModalCliente";
import { useCliente } from "@/hooks/useCliente";
import { useState } from "react";
import { Cliente } from "@/modelo/cliente";

export default function PaginaClientesApp() {
  const { clientes, grabar, cargando } = useCliente();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState<Cliente | null>(null);

  const grabarCliente = async (cliente: Cliente | Omit<Cliente, "id">) => {
    await grabar(cliente);
    setMostrarModal(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Clientes</h1>

      {cargando ? (
        <p className="text-gray-500">Cargando clientes...</p>
      ) : (
        <>
          <PaginaCliente
            clientes={clientes}
            setMostrarModalCliente={setMostrarModal}
            setClienteSeleccionado={setClienteSeleccionado}
          />
          {mostrarModal && (
            <ModalCliente
              cliente={clienteSeleccionado}
              cerrar={() => setMostrarModal(false)}
              grabar={grabarCliente}
            />
          )}
        </>
      )}
    </div>
  );
}
