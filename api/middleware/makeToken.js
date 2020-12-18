const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secret');

module.exports = (user) => {
    const payload = {
        subject: user.id,
        username: user.username,
        // Password SHOULDN'T go here, right?
    };
    const options = {
        expiresIn: '200s'
    };
    return jwt.sign(payload, jwtSecret, options);
};
