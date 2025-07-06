"use client";

import PaginaEmpleado from "@/componentes/PaginaEmpleado";
import ModalEmpleado from "@/componentes/ModalEmpleado";
import { useEmpleado } from "@/hooks/useEmpleado";
import { useState } from "react";
import { Empleado } from "@/modelo/empleado";

export default function PaginaEmpleadosApp() {
  const { empleados, guardarEmpleado: guardar, cargando } = useEmpleado();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState<Empleado | null>(null);

  const guardarEmpleado = async (empleado: Empleado | Omit<Empleado, "id">) => {
    await guardar(empleado);
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
              guardar={guardarEmpleado}
            />
          )}
        </>
      )}
    </>
  );
}
