import querystring from 'querystring';

module.exports = (req, res, next) => {
  const { _parsedUrl } = req;
  req.query = querystring.parse(_parsedUrl.query);
  next();
};