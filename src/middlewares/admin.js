module.exports = async (req, res, next) => {
  if (!req.user_token) {
    return next('req is missing parameter: user_token');
  }

  if (req.user_token.role !== 'admin') {
    return next('User is not an admin');
  }

  next();
};