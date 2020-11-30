require('dotenv').config();

const server = require('./server');

const { printLogConsole } = require('utils/logging');

const { PORT = 8080 } = process.env;

server.listen(PORT, () => {
  printLogConsole('Starting server:', { port: PORT });
});
