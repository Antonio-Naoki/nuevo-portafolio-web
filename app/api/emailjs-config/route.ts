import { NextResponse } from "next/server"

export async function GET() {
  // Proporcionamos todas las credenciales necesarias
  return NextResponse.json({
    publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  })
}
