const jwtSecret = process.env.JWT_SECRET || "a clever fallback secret";

module.exports = {
    jwtSecret
};
