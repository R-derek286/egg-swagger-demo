module.exports = {
    createAdminDto: {
        Account: { type: 'string', required: true },   // 账号
        Password: { type: 'string', required: true },   // 密码
        ConfirmPwd: { type: 'string', required: true },   // 确认密码
    },

    updateAdminDto: {
        Id: { type: 'integer', required: true }, // id
        Account: { type: 'string', required: false },   // 账号
        Password: { type: 'string', required: false },   // 密码
        ConfirmPwd: { type: 'string', required: false },   // 确认密码
    }
};