// componente: PaginaEmpleado.tsx
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
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Empleados</h1>
      <button
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {
          setEmpleadoSeleccionado(null);
          setMostrarModalEmpleado(true);
        }}
      >
        Nuevo Empleado
      </button>
      <ul className="space-y-2">
        {empleados.map((empleado) => (
          <li key={empleado.id} className="p-2 bg-white border rounded shadow">
            {empleado.persona?.nombres} {empleado.persona?.apellidos} -{" "}
            {empleado.puesto}
            <button
              className="ml-4 text-blue-600 underline"
              onClick={() => {
                setEmpleadoSeleccionado(empleado);
                setMostrarModalEmpleado(true);
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
