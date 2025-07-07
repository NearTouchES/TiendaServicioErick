"use client";

import { SolicitudServicio } from "@/modelo/solicitud";

interface Props {
  solicitudes: SolicitudServicio[];
}

export default function PaginaSolicitudes({ solicitudes }: Props) {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Solicitudes de Servicio</h1>

      {solicitudes.length === 0 ? (
        <p className="text-gray-500 text-center">No hay solicitudes registradas.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
          <table className="min-w-full text-sm text-left text-gray-800">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 font-semibold uppercase tracking-wide">Cliente</th>
                <th className="p-3 font-semibold uppercase tracking-wide">Servicio</th>
                <th className="p-3 font-semibold uppercase tracking-wide">Fecha</th>
                <th className="p-3 font-semibold uppercase tracking-wide">Estado</th>
              </tr>
            </thead>
            <tbody>
              {solicitudes.map((s) => (
                <tr key={s.idSolicitud} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3">
                    {s.cliente?.nombres ?? "Sin nombre"} {s.cliente?.apellidos ?? ""}
                  </td>
                  <td className="p-3">
                    {s.servicio?.nombreServicio ?? "Servicio desconocido"}
                  </td>
                  <td className="p-3">
                    {s.fechaSolicitud && !isNaN(Date.parse(s.fechaSolicitud))
                      ? new Date(s.fechaSolicitud).toLocaleDateString()
                      : "Sin fecha"}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        s.estado === "Pendiente"
                          ? "bg-yellow-100 text-yellow-700"
                          : s.estado === "Confirmado"
                          ? "bg-green-100 text-green-700"
                          : s.estado === "Cancelado"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {s.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
