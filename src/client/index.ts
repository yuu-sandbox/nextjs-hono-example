import { hc } from "hono/client";
import { AppType } from "@/server";

const url = process.env.VERCEL_URL ?? "http://localhost:3000/";

export const client = hc<AppType>(url);
