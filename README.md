<div align="center"><a name="readme-top"></a>
<img height="180" src="https://cdn.qnets.cn/logo.svg" />
<h1 style="margin-top: 1.5rem">Qnets Auth Center</h1>

Qnets SSO Server, Based on JWT

English · [中文](./README-zh_CN.md)

</div>

## Quick Start7

### Environment Variables

<blockquote class='is-warning'>
<svg viewBox="64 64 896 896" focusable="false" data-icon="exclamation-circle" wisdth="16px" height="16px" fill="#faad14" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path></svg>
<p style="margin: 0 12px 0 8px">Incomplete environment variables will result in service unavailability. Please go to supplement</p>
</blockquote>

[Development Env](https://github.com/hzh11012/qnets-sso-koa2/tree/master/.env.development) ·
[Production Env](https://github.com/hzh11012/qnets-sso-koa2/tree/master/.env.production)

-   <code>NODE_PORT</code>：Service port, default <code>4800</code>
-   <code>DB_NAME</code>：MySQL database name, default <code>test</code>
-   <code>DB_HOST</code>：MySQL database host, default <code>localhost</code>
-   <code>DB_PORT</code>：MySQL database port, default <code>3306</code>
-   <code>DB_USER</code>：MySQL database user, default <code>root</code>
-   <code>DB_PASSWORD</code>：MySQL database password, default <code>123456</code>
-   <code>ACCESS_TOKEN_SECRET_KEY</code>：Access token secret key
-   <code>REFRESH_TOKEN_SECRET_KEY</code>：Refresh token secret key
-   <code>ACCESS_TOKEN_EXPIRES_IN</code>：Access token expiration time, default <code>1小时</code>
-   <code>REFRESH_TOKEN_EXPIRES_IN</code>：Refresh token expiration time, default <code>7天</code>
-   <code>SMS_APP_ID</code>：Tencent Cloud SMS Application ID
-   <code>SMS_SIGN_NAME</code>：Tencent Cloud SMS Signature Content
-   <code>SMS_TEMPLATE_ID</code>：Tencent Cloud SMS Template ID
-   <code>SMS_SECRET_ID</code>：Tencent Cloud SMS SecretId
-   <code>SMS_SECRET_KEY</code>：Tencent Cloud SMS SecretKey
-   <code>SMS_REGION</code>：Tencent Cloud SMS Region

### Development

```bash
$ yarn
$ yarn dev
```

### Production

```bash
$ yarn
$ yarn prd
```

### API

[API Document](https://github.com/hzh11012/qnets-sso-koa2/tree/master/doc)

### Star History

![Star History Chart](https://api.star-history.com/svg?repos=hzh11012/qnets-sso-koa2&type=Date)

### Contributors

<a href="https://github.com/hzh11012/qnets-sso-koa2/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hzh11012/qnets-sso-koa2" />
</a>

### License

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
