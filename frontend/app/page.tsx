// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Aquí puedes poner lógica de decisión dinámica
    const userRol = localStorage.getItem("rol"); // Ejemplo: 'admin' o 'cliente'

    if (userRol === "admin") {
      router.replace("/admin/dashboard");
    } else if (userRol === "cliente") {
      router.replace("/servicios");
    } else {
      router.replace("/login"); // ruta por defecto
    }
  }, [router]);

  return null; // Mientras redirige, no se muestra nada
}
