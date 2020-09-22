import { Router } from 'express';
import db from '../database/db'
var router = Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({ title: 'NodeJs Club is awesome' });
});

export default router;
