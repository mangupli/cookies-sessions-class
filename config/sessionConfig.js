const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: 'qsUB54i3eTnK8r9',
  // пересохранять с каждым запросом
  resave: false,
  // сохранять непроинициированные сессии
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // сессия сохраняется в течении недели
    httpOnly: true,
  },
};

module.exports = sessionConfig;
