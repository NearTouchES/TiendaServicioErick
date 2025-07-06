"use client";

import { Servicio } from "@/modelo/servicio";

interface Props {
  servicios: Servicio[];
  agregarAlCarrito: (servicio: Servicio) => void;
  eliminarServicio: (idServicio: number) => void;
  setMostrarModalServicio: (mostrar: boolean) => void;
  setServicioSeleccionado: (servicio: Servicio | null) => void;
}

export default function PaginaServicios({
  servicios,
  agregarAlCarrito,
  eliminarServicio,
  setMostrarModalServicio,
  setServicioSeleccionado,
}: Props) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Gestión de Consultorías de Salud</h1>
        <button
          onClick={() => {
            setServicioSeleccionado(null);
            setMostrarModalServicio(true);
          }}
          className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          aria-label="Agregar nuevo servicio de consultoría"
        >
          Nuevo Servicio
        </button>
      </div>

      {servicios.length === 0 ? (
        <p className="text-gray-600 text-center">No hay servicios de consultoría disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.idServicio}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{servicio.nombreServicio}</h2>
                <p className="text-sm text-gray-600 mt-2">{servicio.descripcion}</p>
                {servicio.especialidad && (
                  <p className="text-sm text-indigo-600 font-medium mt-2">
                    Especialidad: {servicio.especialidad}
                  </p>
                )}
                {servicio.duracion !== undefined && (
                  <p className="text-sm text-gray-700 mt-1">
                    Duración: {servicio.duracion} minutos
                  </p>
                )}
                {servicio.modalidad && (
                  <p className="text-sm text-gray-700 mt-1">Modalidad: {servicio.modalidad}</p>
                )}
                <p className="text-lg font-bold text-green-600 mt-4">
                  S/ {servicio.costoServicio.toFixed(2)}
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => agregarAlCarrito(servicio)}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  aria-label={`Agregar servicio ${servicio.nombreServicio} al carrito`}
                >
                  Agregar
                </button>
                <button
                  onClick={() => {
                    setServicioSeleccionado(servicio);
                    setMostrarModalServicio(true);
                  }}
                  className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  aria-label={`Editar servicio ${servicio.nombreServicio}`}
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarServicio(servicio.idServicio)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  aria-label={`Eliminar servicio ${servicio.nombreServicio}`}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
