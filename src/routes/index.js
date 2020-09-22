import { Router } from 'express';
import db from '../database/db';

const router = Router();

/* Test Endpoint */
router.get('/test', (req, res) => {
  res.json({ title: 'NodeJs Club is awesome' });
});

/* Test Database Connection */
router.get('/connection', async (req, res) => {
  const query = 'SELECT nspname FROM pg_catalog.pg_namespace;';
  const queries = await db.query(query);
  res.json({ schema: queries });
});

export default router;
