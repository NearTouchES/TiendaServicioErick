"use client";

import React from "react";

export default function PaginaVentas() {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
        Gestión de Ventas
      </h1>

      <p className="text-gray-600 mb-8">
        Bienvenido al panel de gestión de ventas. Aquí podrás visualizar, registrar y administrar las ventas realizadas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Registrar Venta</h2>
          <p className="text-gray-600 text-sm">
            Agrega nuevas ventas realizadas en la tienda.
          </p>
        </div>

        <div className="border rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Filtrar por Fecha</h2>
          <p className="text-gray-600 text-sm">
            Consulta ventas por día, semana o mes.
          </p>
        </div>

        <div className="border rounded-xl p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Descargar Reportes</h2>
          <p className="text-gray-600 text-sm">
            Exporta tus datos de ventas en Excel o PDF.
          </p>
        </div>
      </div>
    </div>
  );
}