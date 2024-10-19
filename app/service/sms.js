const tencentCloud = require('tencentcloud-sdk-nodejs');
const {randomNum} = require('@core/utils');
const {HttpException} = require('@core/http-exception');

const smsClient = tencentCloud.sms.v20210111.Client;

const params = {
    // 应用 ID
    SmsSdkAppId: process.env.SMS_APP_ID,
    // 短信签名内容
    SignName: process.env.SMS_SIGN_NAME,
    // 模板 ID
    TemplateId: process.env.SMS_TEMPLATE_ID
};

const config = {
    credential: {
        secretId: process.env.SMS_SECRET_ID,
        secretKey: process.env.SMS_SECRET_KEY
    },
    region: process.env.SMS_REGION
};

class SmsManager {
    client;
    codeMap;

    constructor() {
        this.client = new smsClient(config);
        this.codeMap = new Map();
    }

    delCode(phone) {
        this.codeMap.delete(phone);
    }

    setCode(phone, code, age) {
        // 设置键值对
        this.codeMap.set(phone, code);

        // 在指定的时间后，删除该键值对
        setTimeout(() => {
            this.codeMap.delete(phone);
        }, age);
    }

    verifyCode(phone, code) {
        const _code = this.codeMap.get(phone);
        return _code && _code === code;
    }

    sendCode(phone, age) {
        const code = randomNum(6);
        const maxAge = age || 5;
        const config = {
            ...params,
            TemplateParamSet: [code, String(maxAge)],
            PhoneNumberSet: [`+86${phone}`]
        };

        this.client.SendSms(config, err => {
            if (err) throw new HttpException(`验证码发送失败: ${err.msg}`);
            this.setCode(phone, code, maxAge * 60 * 1000);
        });
    }
}

module.exports = {
    SmsManager: new SmsManager()
};
