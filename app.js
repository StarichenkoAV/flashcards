require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const app = express();

expressConfig(app);

// подключаем маршрутизацию

app.listen(3000, () =>
  console.log('Server started at http://localhost:3000/')
);
