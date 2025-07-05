import { Persona } from "@/modelo/persona";


export async function getPersonas(): Promise<Persona[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/personas`);
  return res.json();
}
