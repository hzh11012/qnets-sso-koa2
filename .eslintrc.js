module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [],
    rules: {
        camelcase: 0 // 驼峰命名
    }
};
