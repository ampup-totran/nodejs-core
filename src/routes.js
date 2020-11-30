import bodyParser from 'body-parser';

import swaggerUi from 'middlewares/swagger';

import { connectMongoDB } from 'utils/db/connect';

const app = require('router')();
connectMongoDB();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('middlewares/query'));
app.use(require('middlewares/json'));
app.use(require('middlewares/cors'));
app.use(require('middlewares/send'));
app.use(require('middlewares/log-request'));

app.use('/apis', swaggerUi.serve, swaggerUi.setup);

app.get('/', require('ddd/status'));

app.use(require('middlewares/next'));

export default app;
