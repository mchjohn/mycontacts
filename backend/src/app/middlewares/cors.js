module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow', 'http://localhost:3000');
  next();
};
