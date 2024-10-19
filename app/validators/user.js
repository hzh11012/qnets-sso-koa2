const Zod = require('zod');
const {ParameterException} = require('@core/http-exception');

const PHONE_REG = /^1[3456789]\d{9}$/;
const CODE_REG = /^[0-9]{6}$/;

const LoginValidator = parameter => {
    const schema = Zod.object({
        phone: Zod.string({
            required_error: '手机号不能为空',
            invalid_type_error: '手机号类型错误'
        }).regex(PHONE_REG, {
            message: '手机号格式错误'
        }),
        code: Zod.string({
            required_error: '验证码不能为空',
            invalid_type_error: '验证码类型错误'
        }).regex(CODE_REG, {
            message: '验证码格式错误'
        })
    });
    const result = schema.safeParse(parameter);

    if (!result.success) {
        throw new ParameterException(result.error.issues[0].message);
    }
    return result.data;
};

const PhoneValidator = parameter => {
    const schema = Zod.object({
        phone: Zod.string({
            required_error: '手机号不能为空',
            invalid_type_error: '手机号类型错误'
        }).regex(PHONE_REG, {
            message: '手机号格式错误'
        })
    });

    const result = schema.safeParse(parameter);

    if (!result.success) {
        throw new ParameterException(result.error.issues[0].message);
    }
    return result.data;
};

module.exports = {
    LoginValidator,
    PhoneValidator
};
