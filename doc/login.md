## 接口前缀

```shell
http://localhost:4800/api/sso/
```

# SSO模块

## 用户登录

```
POST  /sms_login
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
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmUiOiIxODc0OTE0NjM4NyIsImlhdCI6MTcyOTM1ODQ5MCwiZXhwIjoxNzI5MzYyMDkwfQ.uyLAGc0WXnCMQHg6V6HIWUWu_7t4gVUEcuBY4eZGVsQ",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmUiOiIxODc0OTE0NjM4NyIsImlwIjoiOjoxIiwiaWF0IjoxNzI5MzU4NDkwLCJleHAiOjE3Mjk5NjMyOTB9.1OQ0bndFM_SgTNXTX2f9E5FDaTgE6Pvcx_8AOU5cOBA"
    }
}
```

## 发送验证码

```
POST  /sms_code
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

## 刷新access_token

```
POST  /token_refresh
```

### 参数说明

无

### 必需携带token

在 Postman 软件里选择 Authorization，Type选择Basic Auth，Username 填写上refresh_token值即可。

在代码中需要在header上携带refresh_token：

```js
// 转码 refresh_token
// 需要安装一下base64: npm install js-base64
import {Base64} from 'js-base64';
function _encode() {
    const refresh_token = localStorage.getItem('refresh_token');
    const base64 = Base64.encode(refresh_token + ':');
    return 'Basic ' + base64;
}

// 代码示例：重点看header携带 Authorization Basic + refresh_token
ajax({
    url: 'http://localhost:4800/api/sso/token_refresh',
    method: 'POST',
    success: res => {
        console.log(res.data);
    },
    header: {
        Authorization: _encode()
    }
});

// 在 axios 携带token
config.headers['Authorization'] = _encode();
```

### 成功操作返回

```json
{
    "code": 200,
    "msg": "refresh_token验证成功",
    "errorCode": 0,
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmUiOiIxODc0OTE0NjM4NyIsImlhdCI6MTcyOTM2MzY1NywiZXhwIjoxNzI5MzY3MjU3fQ.cXv1nMhvTajxkf-gR-IL--eE2lmNmIZHzTfjtCdgApU",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicGhvbmUiOiIxODc0OTE0NjM4NyIsImlwIjoiOjoxIiwiaWF0IjoxNzI5MzYzNjU3LCJleHAiOjE3Mjk5Njg0NTd9.6Y6WVT8IA2oCMBSnpo1RczwpqcNdBQ8rt9sT9SV4jWE"
    }
}
```

## 验证access_token

```
POST  /token_check
```

### 参数说明

无

### 必需携带token

在 Postman 软件里选择 Authorization，Type选择Basic Auth，Username 填写上access_token值即可。

在代码中需要在header上携带access_token：

```js
// 转码 access_token
// 需要安装一下base64: yarn add js-base64
import {Base64} from 'js-base64';
function _encode() {
    const access_token = localStorage.getItem('access_token');
    const base64 = Base64.encode(access_token + ':');
    return 'Basic ' + base64;
}

// 代码示例：重点看header携带 Authorization Basic + access_token
ajax({
    url: 'http://localhost:4800/api/sso/token_check',
    method: 'POST',
    success: res => {
        console.log(res.data);
    },
    header: {
        Authorization: _encode()
    }
});

// 在 axios 携带token
config.headers['Authorization'] = _encode();
```

### 成功操作返回

```json
{
    "code": 200,
    "msg": "access_token验证成功",
    "errorCode": 0,
    "data": {
        "id": 1,
        "phone": "xxxxxxxxxxx",
        "iat": 1729363909,
        "exp": 1729367509
    }
}
```
