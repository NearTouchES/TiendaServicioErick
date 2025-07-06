import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
