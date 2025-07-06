"use client";

import PaginaEmpleado from "@/componentes/PaginaEmpleado";
import ModalEmpleado from "@/componentes/ModalEmpleado";
import { useEmpleado } from "@/hooks/useEmpleado";
import { useState } from "react";
import { Empleado } from "@/modelo/empleado";

export default function PaginaEmpleadosApp() {
  const { empleados, grabar, cargando } = useEmpleado();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState<Empleado | null>(null);

  const grabarEmpleado = async (empleado: Empleado | Omit<Empleado, "id">) => {
    await grabar(empleado);
    setMostrarModal(false);
  };

  return (
    <>
      {cargando ? (
        <p className="text-center text-gray-500">Cargando empleados...</p>
      ) : (
        <>
          <PaginaEmpleado
            empleados={empleados}
            setMostrarModalEmpleado={setMostrarModal}
            setEmpleadoSeleccionado={setEmpleadoSeleccionado}
          />
          {mostrarModal && (
            <ModalEmpleado
              empleado={empleadoSeleccionado}
              cerrar={() => setMostrarModal(false)}
              grabar={grabarEmpleado}
            />
          )}
        </>
      )}
    </>
  );
}
