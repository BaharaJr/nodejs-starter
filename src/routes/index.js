import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({ title: 'NodeJs Club is awesome' });
});

export default router;
