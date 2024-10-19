const {sequelize} = require('@core/db');
const {Model, DataTypes} = require('sequelize');
const moment = require('moment');

// 用户表模型
class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            comment: '用户ID'
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            comment: '登录手机号'
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '创建时间',
            get() {
                return moment(this.getDataValue('created_at')).format(
                    'YYYY-MM-DD HH:mm:ss'
                );
            }
        }
    },
    {
        sequelize,
        modelName: 'user',
        tableName: 'user'
    }
);

module.exports = {
    User
};
