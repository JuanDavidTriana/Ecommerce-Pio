const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const verfiend = jwt.verify(token, process.env.JWT_SECRET);
        res.user = verfiend;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.verifyAdmin = (req, res, next) => {
    this.verifyToken(req, res, () => {
        if (req.user.role === 'admin') next();
        else res.status(403).json({ message: 'You are not authorized' });
    });
};