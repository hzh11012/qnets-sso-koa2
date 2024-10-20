const getIP = (ctx, next) => {
    let ip =
        ctx.request.header['x-forwarded-for'] ||
        ctx.request.ip ||
        ctx.request.socket.remoteAddress ||
        null;

    if (ip && ip.includes(',')) {
        // 如果通过代理，第一个IP就是客户端的IP
        ip = ip.split(',')[0];
    }

    ctx.realIp = ip;
    return next();
};

module.exports = getIP;
