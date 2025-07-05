import { Administrador } from "@/modelo/administrador";

export async function getAdministradores(): Promise<Administrador[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/administradores`);
  return res.json();
}
