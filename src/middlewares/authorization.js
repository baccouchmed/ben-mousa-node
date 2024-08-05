const jwt = require('jsonwebtoken');

// jwt
const isAuth = (req, res, next) => {
  let { accessToken } = req.query;
  if (accessToken) {
    accessToken = `Bearer ${accessToken}`;
  }
  const authHeader = req.headers.authorization || accessToken;
  if (!authHeader) {
    return res.status(401).json({ message: 'bad token' });
  }
  const tokenSplit = authHeader.split(' ');
  if (tokenSplit.length !== 2) {
    return res.status(401).json({ message: 'bad token' });
  }
  const bearer = tokenSplit[0];
  if (bearer !== 'Bearer') {
    return res.status(401).json({ message: 'bad bearer' });
  }
  const token = tokenSplit[1];
  try {
    return jwt.verify(token, `${process.env.PRIVATE_KEY}`, (err, user) => {
      if (err) {
        console.error(err);
        return res.status(401).json({ message: '401 Unauthorized' });
      }
      req.user = user;
      req.token = token;
      return next();
    });
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: '401 Unauthorized' });
  }
}

module.exports = {
  isAuth,
};
