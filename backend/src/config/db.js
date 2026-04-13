import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { ENV } from "./env.js"
import * as schema from "../db/schema.js" //Esto sería si tuvieramos más de una tabla

const sql = neon(ENV.DB_URL)
export const db = drizzle(
    sql, 
    {schema}
)