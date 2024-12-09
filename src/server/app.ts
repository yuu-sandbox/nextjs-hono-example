import { z } from "zod";
import { Hono } from "hono";
import { requestId } from "hono/request-id";
import { zValidator } from "@hono/zod-validator";
import { Env } from "./type";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

const app = new Hono<Env>()
  .basePath("/api")
  .use(requestId())
  .get("/hello", (c) => c.json("list books"))
  .post("/hello", zValidator("form", schema), (c) =>
    c.json("create a book", 201),
  )
  .get("/hello/:id", (c) => {
    return c.json(`get ${c.req.param("id")} ${c.get("requestId")}`);
  });

export type AppType = typeof app;
export { app };
