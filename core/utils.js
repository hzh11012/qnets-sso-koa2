const jwt = require('jsonwebtoken');

// 颁布令牌
const generateToken = (info, isRefreshToken) => {
    const token = jwt.sign(
        info,
        isRefreshToken
            ? process.env.REFRESH_TOKEN_SECRET_KEY
            : process.env.ACCESS_TOKEN_SECRET_KEY,
        {
            expiresIn: isRefreshToken
                ? process.env.REFRESH_TOKEN_EXPIRES_IN
                : process.env.ACCESS_TOKEN_EXPIRES_IN
        }
    );
    return token;
};

// 验证令牌
const verifyToken = (token, isRefreshToken) => {
    const SECRET_KEY = isRefreshToken
        ? process.env.REFRESH_TOKEN_EXPIRES_IN
        : process.env.ACCESS_TOKEN_EXPIRES_IN;
    return jwt.verify(token, SECRET_KEY);
};

// 生成n位随机数
const randomNum = n => {
    const rndArr = [];
    for (let i = 0; i < n; i++) {
        rndArr.push(Math.floor(Math.random() * 10));
    }
    return rndArr.join('');
};

module.exports = {
    generateToken,
    verifyToken,
    randomNum
};
