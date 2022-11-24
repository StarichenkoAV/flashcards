require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const topicsRouter = require('./routes/topicRouter');

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use('/', topicsRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
