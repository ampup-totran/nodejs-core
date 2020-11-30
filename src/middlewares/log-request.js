import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import { printLogConsole } from 'utils/logging';

module.exports = (req, res, next) => {
  if (req.url !== '/') {
    const request = {};
    const params = isEmpty(req.params);
    const query = isEmpty(req.query);
    const headers = isEmpty(req.headers);
    const body = isEmpty(req.body);

    if (params) {
      request.params = { ...req.params };
    }

    if (query) {
      request.query = { ...req.query };
    }

    if (headers) {
      const _headers = {
        ...req.headers
      };
      delete headers.authorization;
      request.headers = _headers;

      const [ , token ] = (req.headers.authorization || '').split(' ');
      if (token) {
        const payload = jwt.decode(token);
        request.user_token = {
          user_id: payload.user_id,
          role: payload.role
        };
      }
    }

    if (body) {
      request.body = { ...req.body };
      if (request.body.password) {
        request.body.password = '<encrypted>';
      }
    }
    req.id = uuidv4();

    printLogConsole(`Request - ${req.id}`, {
      name: `${req.method} ${req.originalUrl}`,
      url: req.url,
      ...request
    });
  }

  next();
};

function isEmpty(obj) {
  return !!Object.keys(obj).length;
}