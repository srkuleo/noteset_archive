import type { Config } from "drizzle-kit";
import { env } from "./src/env.mjs";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config;
