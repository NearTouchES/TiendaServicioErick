"use client";

interface Props {
  setVista: (vista: "clientes" | "servicios" | "solicitudes" | "empleados") => void;
}

export default function Navbar({ setVista }: Props) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">TiendaServicio</h1>
        <div className="space-x-6">
          <button onClick={() => setVista("servicios")} className="hover:underline">Servicios</button>
          <button onClick={() => setVista("clientes")} className="hover:underline">Clientes</button>
          <button onClick={() => setVista("solicitudes")} className="hover:underline">Solicitudes</button>
          <button onClick={() => setVista("empleados")} className="hover:underline">Empleados</button>
        </div>
      </div>
    </nav>
  );
}
