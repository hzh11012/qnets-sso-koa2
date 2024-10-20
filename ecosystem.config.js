module.exports = {
    apps: [
        {
            // 项目名
            name: 'qnets-sso-koa2',
            // 执行文件
            script: './app.js',
            // 是否监听文件变动然后重启
            watch: true,
            // 不用监听的文件
            ignore_watch: ['node_modules', 'logs'],
            // 正常日志文件
            out_file: './logs/success.log',
            // 错误日志文件
            error_file: './logs/error.log',
            env: {
                NODE_ENV: 'production'
            },
            env_dev: {
                NODE_ENV: 'development'
            }
        }
    ]
};
