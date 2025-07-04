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
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Lista de Servicios</h2>
        <button
          onClick={() => {
            setProductoSeleccionado(null);
            setMostrarModalProducto(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Nuevo Servicio
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((servicio) => (
          <li
            key={servicio.id}
            className="p-4 border rounded shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{servicio.nombre}</h3>
            <p className="text-sm text-gray-600">{servicio.descripcion}</p>
            <p className="font-bold mt-2">S/. {servicio.costo}</p>

            <div className="mt-3 flex space-x-2">
              <button
                onClick={() => agregarAlCarrito(servicio)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Agregar al carrito
              </button>
              <button
                onClick={() => {
                  setProductoSeleccionado(servicio);
                  setMostrarModalProducto(true);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => quitarProducto(servicio.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
