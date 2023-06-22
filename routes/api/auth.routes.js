const express = require('express');

const router = express.Router();

const { User } = require('../../db/models');

router.post('/register', async (req, res) => {
  const { login, password } = req.body;

  /* 
  проверяем, что пароли совпадают
  if (password !== password2) {
    res.json({ success: false, message: 'Пароли не совпадают' });
    return;
  }
  */
  try {
    if (login && password) {
      /* Ищёт пользователя с таким логином в базе */
      let user = await User.findOne({ where: { login } });
      /* Если не нашёл — регистрирует */
      if (!user) {
        user = await User.create({ login, password });

        // авторизация - запоминаем пользователя
        // req.session - хранилище сессии, которое уникально для каждого браузера
        req.session.userId = user.id;
        res.locals.user = user;

        res.status(201).json({ message: 'ok' });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  // ищем пользователя в БД
  const user = await User.findOne({ where: { login } });
  if (!user || user.password !== password) {
    res.json({
      success: false,
      message: 'Нет такого пользователя либо пароли не совпадают',
    });
    return;
  }

  // авторизация - запоминаем пользователя
  req.session.userId = user.id;

  res.json({ success: true });
});

module.exports = router;
