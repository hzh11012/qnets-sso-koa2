class HttpException extends Error {
    constructor(msg = '服务端异常', errorCode = 10001, code = 500) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = code;
    }
}

class ParameterException extends HttpException {
    constructor(msg = '参数错误', errorCode = 10002) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = 400;
    }
}

class AuthFailed extends HttpException {
    constructor(msg = '授权失败', errorCode = 10004) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = 401;
    }
}

class Forbidden extends HttpException {
    constructor(msg = '禁止访问', errorCode = 10005) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = 403;
    }
}

class NotFound extends HttpException {
    constructor(msg = '404找不到', errorCode = 10006) {
        super();
        this.msg = msg;
        this.code = 404;
        this.errorCode = errorCode;
    }
}

class Existing extends HttpException {
    constructor(msg = '已存在', errorCode = 10007) {
        super();
        this.msg = msg;
        this.code = 412;
        this.errorCode = errorCode;
    }
}

module.exports = {
    HttpException,
    ParameterException,
    AuthFailed,
    NotFound,
    Forbidden,
    Existing
};
