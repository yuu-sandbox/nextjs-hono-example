import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Env } from "@/server/type";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

const app = new Hono<Env>();

app.get("/", (c) => c.json("list books"));
app.post("/", zValidator("form", schema), (c) => c.json("create a book", 201));
app.get("/:id", (c) => {
  return c.json(`get ${c.req.param("id")} ${c.get("requestId")}`);
});

export default app;
