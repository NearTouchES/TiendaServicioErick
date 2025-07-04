import { Administrador } from "@/modelo/administrador";

const BASE_URL = "/api/administradores";

export async function getAdministradores(): Promise<Administrador[]> {
  const res = await fetch(BASE_URL);
  return res.json();
}
