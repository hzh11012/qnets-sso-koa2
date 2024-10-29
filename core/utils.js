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

// 解析时间为毫秒
const parseTime = time => {
    // 如果 time 是一个数字，它表示以秒为单位的时间跨度
    if (typeof time === 'number') {
        return time * 1000; // 转换为毫秒
    }

    // 如果 time 是一个字符串，解析它来获取时间跨度和单位
    const match = time.match(/^(\d+)(d|h|m|s)$/);
    if (match) {
        const amount = parseInt(match[1], 10);
        const unit = match[2];

        switch (unit) {
            case 'd':
                return amount * 24 * 60 * 60 * 1000; // 天转换为毫秒
            case 'h':
                return amount * 60 * 60 * 1000; // 小时转换为毫秒
            case 'm':
                return amount * 60 * 1000; // 分钟转换为毫秒
            case 's':
                return amount * 1000; // 秒转换为毫秒
            default:
                throw new Error(`不支持的时间单位: ${unit}`);
        }
    }

    throw new Error(`无效的值: ${time}`);
};

module.exports = {
    generateToken,
    verifyToken,
    randomNum,
    parseTime
};
