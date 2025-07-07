"use client";

import { Servicio } from "@/modelo/servicios";

interface Props {
  servicios: Servicio[];
  eliminarServicio: (id: number) => void;
  setMostrarModalServicio: (mostrar: boolean) => void;
  setServicioSeleccionado: (servicio: Servicio | null) => void;
  agregarAlCarrito: () => void; // opcional, para compatibilidad
}

export default function PaginaServicios({ servicios, eliminarServicio, setMostrarModalServicio, setServicioSeleccionado }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Servicios</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => {
          setServicioSeleccionado(null);
          setMostrarModalServicio(true);
        }}
      >
        Nuevo Servicio
      </button>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Costo</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((servicio) => (
            <tr key={servicio.idServicio} className="border-t hover:bg-gray-50">
              <td className="p-2">{servicio.nombreServicio}</td>
              <td className="p-2">S/ {servicio.costoServicio.toFixed(2)}</td>
              <td className="p-2 space-x-2">
                <button
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  onClick={() => {
                    setServicioSeleccionado(servicio);
                    setMostrarModalServicio(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => eliminarServicio(servicio.idServicio)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
