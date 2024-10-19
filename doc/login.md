## 接口前缀

```shell
http://localhost:4800/api/sso/
```

# SSO模块

## 用户登录

```
POST    /sms_login
```

### 参数说明

| 参数  | 说明   | 是否必填 |
| ----- | ------ | :------: |
| phone | 手机号 |    是    |
| code  | 验证码 |    是    |

### 成功操作返回

```json
{
    "code": 200,
    "msg": "登录成功",
    "errorCode": 0,
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTE5IDE5OjA3OjQ5IiwiaWQiOjEsInBob25lIjoiMTkxMzc0Mjc3NTQiLCJ1cGRhdGVkX2F0IjoiMjAyNC0xMC0xOVQxMTowNzo0OS4wMDBaIiwiZGVsZXRlZF9hdCI6bnVsbH0sImlwIjoiMTkyLjE2OC4zMS42MiIsImlhdCI6MTcyOTMzNjQwMiwiZXhwIjoxNzI5MzQwMDAyfQ.d76daRYjjOXMMod_ftRpc9LpUXZe4Se0WPqgqP86M0Y",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNyZWF0ZWRfYXQiOiIyMDI0LTEwLTE5IDE5OjA3OjQ5IiwiaWQiOjEsInBob25lIjoiMTkxMzc0Mjc3NTQiLCJ1cGRhdGVkX2F0IjoiMjAyNC0xMC0xOVQxMTowNzo0OS4wMDBaIiwiZGVsZXRlZF9hdCI6bnVsbH0sImlwIjoiMTkyLjE2OC4zMS42MiIsImlhdCI6MTcyOTMzNjQwMiwiZXhwIjoxNzI5OTQxMjAyfQ.pwRQNGxxjfiAusL88M2cGX_1Z6YDJfYsFLpDfafPWKw"
    }
}
```

## 发送验证码

```
POST    /sms_code
```

### 参数说明

| 参数  | 说明   | 是否必填 |
| ----- | ------ | :------: |
| phone | 手机号 |    是    |

### 成功操作返回

```json
{
    "code": 200,
    "msg": "验证码发送成功",
    "errorCode": 0
}
```
