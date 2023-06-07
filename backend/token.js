const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(405).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            console.log(token);
            return res.status(410).json({ message: 'Invalid token' });
        }

        req.username = decoded.username;
        next();
    });
};

module.exports = verifyToken;