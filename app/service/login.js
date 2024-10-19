const {UserDao} = require('@dao/user');
const {generateToken} = require('@core/utils');
const {SmsManager} = require('@service/sms');
const {AuthFailed, HttpException} = require('@core/http-exception');
const ip = require('ip');

class LoginManager {
    // 短信登录（自动注册）
    static async smsLogin(params) {
        const {phone, code} = params;

        const verifyRes = SmsManager.verifyCode(phone, code);
        if (verifyRes) {
            SmsManager.delCode(phone);
            const [err, user] = await UserDao.createUser({phone});
            if (err) throw new HttpException(`用户注册失败：${err.msg}`);

            const access_token = generateToken({
                user: user.id,
                ip: ip.address()
            });
            const refresh_token = generateToken(
                {
                    user: user.id,
                    ip: ip.address()
                },
                true
            );

            const data = {
                access_token,
                refresh_token
            };
            return data;
        } else {
            throw new AuthFailed('验证码错误');
        }
    }
}

module.exports = {
    LoginManager
};
