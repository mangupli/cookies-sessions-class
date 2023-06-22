const router = require('express').Router();

router.post('/', (req, res) => {
  res.json(req.body);
});

router.get('/remember-me', (req, res) => {
  console.log(req.cookies);

  const count = req.cookies.times ? Number(req.cookies.times) + 1 : 0;

  res.cookie('times', count);
  res.send('trying to remember');
});

module.exports = router;
