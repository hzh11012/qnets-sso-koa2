const {HttpException} = require('@core/http-exception');

module.exports = {
    json: (err, ctx) => {
        if (err instanceof HttpException) {
            // 已知异常
            let resultData = {
                msg: err.msg,
                errorCode: err.errorCode,
                request: `${ctx.method}: ${ctx.path}`
            };
            if (err.data) {
                resultData.data = err.data;
            }
            ctx.body = resultData;
            ctx.status = err.code;
        } else {
            // 未知异常
            let errMsg = (err.errors && err.errors[0]?.message) || err.message;

            ctx.body = {
                msg: errMsg,
                errorCode: 99999,
                request: `${ctx.method}: ${ctx.path}`
            };
            ctx.status = 500;
        }
    },
    accepts: function () {
        return 'json';
    }
};
