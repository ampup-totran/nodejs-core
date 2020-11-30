
import http from 'http';
import finalhandler from 'finalhandler';

import router from './routes';

const server = http.createServer((req, res) => {
  router(req, res, finalhandler(req, res));
});

module.exports = server;
