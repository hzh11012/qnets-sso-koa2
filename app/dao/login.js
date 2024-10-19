const {User} = require('@models/user');

class UserDao {
    // 创建用户
    static async createUser(params) {
        const {phone} = params;

        const _data = await User.findOne({
            where: {
                phone,
                deleted_at: null
            }
        });

        if (_data) return [null, _data];

        const user = new User();
        user.phone = phone;

        try {
            const data = await user.save();
            return [null, data];
        } catch (err) {
            return [err, null];
        }
    }
}

module.exports = {
    UserDao
};
