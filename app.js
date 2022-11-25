require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const Layout = require('./views/Layout');

const topicsRouter = require('./routes/topicRouter');
const cardRouter = require('./routes/cardRouter');

const app = express();
app.use('/cards', cardRouter);

expressConfig(app);

// подключаем маршрутизацию
app.use('/', topicsRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
