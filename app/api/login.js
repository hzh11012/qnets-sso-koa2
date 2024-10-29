const Router = require('koa-router');
const {LoginValidator, PhoneValidator} = require('@validators/login');
const {LoginManager} = require('@service/login');
const {SmsManager} = require('@service/sms');
const {Resolve} = require('@lib/helper');
const basicAuth = require('basic-auth');
const {Forbidden} = require('@core/http-exception');
const jwt = require('jsonwebtoken');
const {generateToken, parseTime} = require('@core/utils');
const res = new Resolve();

const router = new Router({
    prefix: '/api/sso'
});

// sso 手机号登录（未注册时自动注册用户）
router.post('/sms_login', async ctx => {
    const parameter = LoginValidator(ctx.request.body);

    const data = await LoginManager.smsLogin({
        phone: parameter.phone,
        code: parameter.code,
        ip: ctx.realIp
    });

    ctx.cookies.set('access_token', data.access_token, {
        domain: process.env.COOKIES_DOMAIN,
        maxAge: parseTime(process.env.ACCESS_TOKEN_EXPIRES_IN),
        httpOnly: process.env.COOKIES_HTTP_ONLY,
        overwrite: process.env.COOKIES_OVERWRITE,
        secure: process.env.COOKIES_SECURE
    });
    ctx.cookies.set('refresh_token', data.refresh_token, {
        domain: process.env.COOKIES_DOMAIN,
        maxAge: parseTime(process.env.REFRESH_TOKEN_EXPIRES_IN),
        httpOnly: process.env.COOKIES_HTTP_ONLY,
        overwrite: process.env.COOKIES_OVERWRITE,
        secure: process.env.COOKIES_SECURE
    });
    ctx.response.status = 200;
    ctx.body = res.json(data, '登录成功');
});

// sso 获取短信验证码
router.post('/sms_code', ctx => {
    const parameter = PhoneValidator(ctx.request.body);

    SmsManager.sendCode(parameter.phone);

    ctx.response.status = 200;
    ctx.body = res.success('验证码发送成功');
});

// sso 更新token
router.post('/token_refresh', async ctx => {
    const ip = ctx.realIp;

    const tokenToken = basicAuth(ctx.req);
    let errMsg = '无效的refresh_token';
    if (!tokenToken || !tokenToken.name) {
        errMsg = '需要携带refresh_token';
        throw new Forbidden(errMsg);
    }

    try {
        var decode = jwt.verify(
            tokenToken.name,
            process.env.REFRESH_TOKEN_SECRET_KEY
        );
        if (decode.ip !== ip) {
            errMsg = 'refresh_token已失效';
            throw new Forbidden(errMsg);
        }

        // 生成新的access_token 和 refresh_token
        const access_token = generateToken({
            id: decode.id,
            phone: decode.phone
        });
        const refresh_token = generateToken(
            {
                id: decode.id,
                phone: decode.phone,
                ip
            },
            true
        );
        ctx.response.status = 200;
        ctx.body = res.json(
            {
                access_token,
                refresh_token
            },
            'refresh_token验证成功'
        );
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            errMsg = 'refresh_token已过期';
        }
        throw new Forbidden(errMsg);
    }
});

// sso token验证可用性
router.post('/token_check', async ctx => {
    const tokenToken = basicAuth(ctx.req);
    let errMsg = '无效的access_token';

    if (!tokenToken || !tokenToken.name) {
        errMsg = '需要携带access_token';
        throw new Forbidden(errMsg);
    }

    try {
        const decode = jwt.verify(
            tokenToken.name,
            process.env.ACCESS_TOKEN_SECRET_KEY
        );
        ctx.response.status = 200;
        ctx.body = res.json(decode, 'access_token验证成功');
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            errMsg = 'access_token已过期';
        }
        throw new Forbidden(errMsg);
    }
});

module.exports = router;
