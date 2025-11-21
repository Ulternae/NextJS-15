import postgres from "postgres"
import dotenv from "dotenv"

dotenv.config()

// Check .env
if (!process.env.POSTGRESQL_ENDPOINT_TRACKER) {
  throw new Error("POSTGRESQL_ENDPOINT_TRACKER env var is not set")
}

export const sql = postgres(process.env.POSTGRESQL_ENDPOINT_TRACKER)
