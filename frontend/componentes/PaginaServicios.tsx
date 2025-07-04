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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 flex justify-between items-center">
        Servicios
        <button
          onClick={() => {
            setProductoSeleccionado(null);
            setMostrarModalProducto(true);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Nuevo Servicio
        </button>
      </h1>

      {productos.length === 0 ? (
        <p className="text-gray-600">No hay servicios disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{servicio.nombre}</h3>
              <p className="text-sm text-gray-600 mt-1">{servicio.descripcion}</p>
              <p className="text-lg font-bold text-green-600 mt-2">S/ {servicio.costo.toFixed(2)}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => agregarAlCarrito(servicio)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Agregar al carrito
                </button>
                <button
                  onClick={() => {
                    setProductoSeleccionado(servicio);
                    setMostrarModalProducto(true);
                  }}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => quitarProducto(servicio.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
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