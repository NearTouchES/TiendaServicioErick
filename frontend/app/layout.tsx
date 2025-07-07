import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Gestión de Servicios",
  description: "Sistema de gestión de clientes, servicios y solicitudes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
