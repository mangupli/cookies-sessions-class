const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const cookiesRouter = require('./api/cookies.routes');
const authApiRouter = require('./api/auth.routes');
const authRouter = require('./views/auth.routes');

router.use('/', mainRouter);
router.use('/api/cookies', cookiesRouter);
router.use('/api/auth', authApiRouter);
router.use('/auth', authRouter);

module.exports = router;
