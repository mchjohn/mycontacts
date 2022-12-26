module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Methods', '*');
  res.setHeader('Access-Control-Headers', '*');
  res.setHeader('Access-Control-Max-Age', '10');
  next();
};
