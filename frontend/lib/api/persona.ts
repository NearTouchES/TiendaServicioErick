import { Persona } from "@/modelo/persona";

const BASE_URL = process.env.API_URL;

export async function getPersonas(): Promise<Persona[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE_API}/personas`);
  return res.json();
}
