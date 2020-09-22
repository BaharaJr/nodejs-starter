import { Router } from "express";
import db from "../database/db";
var router = Router();

/* Test Endpoint */
router.get("/test", function (req, res, next) {
  res.json({ title: "NodeJs Club is awesome" });
});

/* Test Database Connection */
router.get("/connection", async (req, res, next)  => {
  const query = `SELECT nspname FROM pg_catalog.pg_namespace;`;
  const queries = await db.query(query);
  console.log(queries)
  res.json({ schema: queries });
});

export default router;
