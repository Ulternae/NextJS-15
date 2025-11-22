"use server"

import { createSession } from "@/utils/auth"
import { createHash, randomUUID } from "crypto"
import { redirect } from "next/navigation"

// Hash de nuestro secreto usando
// https://hash.online-convert.com/es/generador-sha256
const SECRET =
  "8e382375c5f55eeb6a67c0de4c8706ece3677bdbe9f4ab3969021c3be36d77cf"

export async function login(prevState: unknown, data: FormData) {
  const id = randomUUID()
  const hash = createHash("sha256")
  const password = data.get("pwd") as string

  console.log("login", { id, password })

  const hashedPassword = hash.update(password).digest("hex")

  if (hashedPassword !== SECRET) {
    return { error: "Invalid secret" }
  }

  await createSession(id)

  redirect("/auth")
}
