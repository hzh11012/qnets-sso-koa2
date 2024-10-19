const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoadRoutes();
    }

    static initLoadRoutes() {
        // 获取根目录下的routes目录
        const routeDirectory = `${process.cwd()}/app/api`;
        // 迭代routes目录下的每个文件
        requireDirectory(module, routeDirectory, {
            visit: whenLoadModule
        });

        function whenLoadModule(obj) {
            // 如果是Router的实例
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes(), obj.allowedMethods());
            }
        }
    }
}

module.exports = InitManager;
