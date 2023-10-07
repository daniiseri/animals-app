import { apiNinja } from "@/lib/api-ninja";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const name = new URL(request.url).searchParams.get('name');
  
  const { data } = await apiNinja.get(`/animals?name=${name}`, {
    headers: {
      'X-Api-Key': process.env.API_KEY,
    }
  })

  return NextResponse.json(data)
}