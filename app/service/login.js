const {UserDao} = require('@dao/login');
const {generateToken} = require('@core/utils');
const {SmsManager} = require('@service/sms');
const {AuthFailed, HttpException} = require('@core/http-exception');

class LoginManager {
    // 短信登录（自动注册）
    static async smsLogin(params) {
        const {phone, code, ip} = params;

        const verifyRes = SmsManager.verifyCode(phone, code);
        if (verifyRes) {
            SmsManager.delCode(phone);
            const [err, user] = await UserDao.createUser({phone});
            if (err) throw new HttpException(`用户注册失败：${err.msg}`);

            const access_token = generateToken({
                id: user.id,
                phone: user.phone
            });
            const refresh_token = generateToken(
                {
                    id: user.id,
                    phone: user.phone,
                    ip
                },
                true
            );

            return {
                access_token,
                refresh_token
            };
        } else {
            throw new AuthFailed('验证码错误');
        }
    }
}

module.exports = {
    LoginManager
};
