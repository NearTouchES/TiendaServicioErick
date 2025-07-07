"use client";

interface Empleado {
  idEmpleado: number;
  nombres: string;
  apellidos: string;
  correoInstitucional: string;
  puesto: string;
}

const empleadosMock: Empleado[] = [
  {
    idEmpleado: 1,
    nombres: "Carlos",
    apellidos: "Ramírez",
    correoInstitucional: "carlos.ramirez@empresa.com",
    puesto: "Fisioterapeuta",
  },
  {
    idEmpleado: 2,
    nombres: "Lucía",
    apellidos: "Gonzales",
    correoInstitucional: "lucia.gonzales@empresa.com",
    puesto: "Nutricionista",
  },
];

export default function PaginaEmpleados() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Nuestros Empleados</h1>
      <div className="grid gap-6">
        {empleadosMock.map((emp) => (
          <div key={emp.idEmpleado} className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-xl font-semibold">{emp.nombres} {emp.apellidos}</h2>
            <p className="text-gray-600">{emp.puesto}</p>
            <p className="text-sm text-gray-500">{emp.correoInstitucional}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
