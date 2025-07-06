"use client";

import { Servicio } from "@/modelo/servicio";

interface Props {
  productos: Servicio[];
  agregarAlCarrito: (servicio: Servicio) => void;
  quitarProducto: (id: number) => void;
  setMostrarModalProducto: (v: boolean) => void;
  setProductoSeleccionado: (servicio: Servicio | null) => void;
}

export default function PaginaServicios({
  productos,
  agregarAlCarrito,
  quitarProducto,
  setMostrarModalProducto,
  setProductoSeleccionado,
}: Props) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Gestión de Servicios</h1>
        <button
          onClick={() => {
            setProductoSeleccionado(null);
            setMostrarModalProducto(true);
          }}
          className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
        >
          Nuevo Servicio
        </button>
      </div>

      {productos.length === 0 ? (
        <p className="text-gray-600 text-center">No hay servicios disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{servicio.nombre}</h2>
              <p className="text-sm text-gray-600 mt-1">{servicio.descripcion}</p>
              <p className="text-lg font-bold text-green-600 mt-2">
                S/ {servicio.costo.toFixed(2)}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => agregarAlCarrito(servicio)}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Agregar
                </button>
                <button
                  onClick={() => {
                    setProductoSeleccionado(servicio);
                    setMostrarModalProducto(true);
                  }}
                  className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => quitarProducto(servicio.id)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
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
