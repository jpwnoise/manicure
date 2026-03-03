import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nails_booking");

    await db.command({ ping: 1 });

    return NextResponse.json({
      success: true,
      message: "MongoDB conectado correctamente 🚀"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "No se pudo conectar",
      details: error
    });
  }
}