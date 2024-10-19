const Router = require('koa-router');
const {LoginValidator, PhoneValidator} = require('@validators/user');
const {LoginManager} = require('@service/login');
const {SmsManager} = require('@service/sms');
const {Resolve} = require('@lib/helper');
const res = new Resolve();

const router = new Router({
    prefix: '/api/sso'
});

// sso 手机号登录（未注册时自动注册用户）
router.post('/sms_login', async ctx => {
    const parameter = LoginValidator(ctx.request.body);

    const data = await LoginManager.smsLogin({
        phone: parameter.phone,
        code: parameter.code
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
router.post('/token_refresh', async ctx => {});

// sso token验证可用性
router.get('/token_check', async ctx => {});

module.exports = router;
