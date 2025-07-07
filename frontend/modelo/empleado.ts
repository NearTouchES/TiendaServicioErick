export interface Empleado {
  idEmpleado: number;
  nombres: string;
  apellidos: string;
  correoInstitucional: string;
  puesto: string;
  salario: number;
  fechaInicioEmpleado: string; // ISO string
  fechaFinEmpleado?: string;   // puede estar en null
}
