import { printLogConsole } from 'utils/logging';
import { HTTP_STATUS_CODES } from 'utils/constanst';

module.exports = (req, res, next) => {
  res.json = (obj) => {
    res.statusCode = res.statusCode || HTTP_STATUS_CODES.OK;

    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.end(JSON.stringify(obj));

    if (req.originalUrl !== '/') {
      printLogConsole(`Response - ${req.id}`, {
        statusCode: res.statusCode,
        data: obj
      });
    }
  };
  next();
};