<div align="center"><a name="readme-top"></a>
<img height="180" src="https://cdn.qnets.cn/logo.svg" />
<h1 style="margin-top: 1.5rem">Qnets 认证中心</h1>

Qnets 单点登录服务端, 基于 JWT 实现

[English](./README.md) · 中文

</div>

## 快速开始

### 环境变量

<blockquote class='is-warning'>
<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" wisdth="16px" height="16px" fill="#faad14" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>
<p style="margin: 0 12px 0 8px">环境变量不完整将会导致服务不可用, 请前往补充</p>
</blockquote>

[开发环境变量](https://github.com/hzh11012/qnets-sso-koa2/tree/master/.env.development) ·
[生产环境变量](https://github.com/hzh11012/qnets-sso-koa2/tree/master/.env.production)

-   <code>NODE_PORT</code>：服务端口，默认 <code>4800</code>
-   <code>DB_NAME</code>：MySQL数据库名，默认 <code>test</code>
-   <code>DB_HOST</code>：MySQL数据库地址，默认 <code>localhost</code>
-   <code>DB_PORT</code>：MySQL数据库端口，默认 <code>3306</code>
-   <code>DB_USER</code>：MySQL数据库用户名，默认 <code>root</code>
-   <code>DB_PASSWORD</code>：MySQL数据库密码，默认 <code>123456</code>
-   <code>ACCESS_TOKEN_SECRET_KEY</code>：访问令牌密钥
-   <code>REFRESH_TOKEN_SECRET_KEY</code>：刷新令牌密钥
-   <code>ACCESS_TOKEN_EXPIRES_IN</code>：访问令牌过期时间，默认 <code>1小时</code>
-   <code>REFRESH_TOKEN_EXPIRES_IN</code>：刷新令牌过期时间，默认 <code>7天</code>
-   <code>SMS_APP_ID</code>：腾讯云短信应用 ID
-   <code>SMS_SIGN_NAME</code>：腾讯云短信签名内容
-   <code>SMS_TEMPLATE_ID</code>：腾讯云短信模板 ID
-   <code>SMS_SECRET_ID</code>：腾讯云短信 SecretId
-   <code>SMS_SECRET_KEY</code>：腾讯云短信 SecretKey
-   <code>SMS_REGION</code>：腾讯云短信 Region

### 开发环境

```bash
$ yarn
$ yarn dev
```

### 生产环境

```bash
$ yarn
$ yarn prd
```

### 接口

[接口文档](https://github.com/hzh11012/qnets-sso-koa2/tree/master/doc)

### 星历史

![Star History Chart](https://api.star-history.com/svg?repos=hzh11012/qnets-sso-koa2&type=Date)

### 贡献者

<a href="https://github.com/hzh11012/qnets-sso-koa2/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hzh11012/qnets-sso-koa2" />
</a>

### 许可证

[MIT](https://github.com/hzh11012/qnets-sso-koa2/blob/master/LICENSE)

<style>
    .is-warning {
        width: fit-content;
        padding: 8px 12px 8px 8px;
        border-left: 0;
        border-radius: .6rem;
        font-size: 14px;
        font-weight: bold;
        display: flex;
        align-items: center;
        background-color: #fffbe6;
        color: #333;
        margin-bottom: 12px;
        line-height: 22px;
    }
    .is-warning p {
        font-size: 14px;
        margin-bottom: 0px;
    }
</style>
