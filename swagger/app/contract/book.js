module.exports = {
    createBookDto: {
        BookName: { type: 'string', required: true },   // 名称
        Author: { type: 'string', required: true },   // 作者
        Price: { type: 'number', required: true },   // 单价
        Typeid: { type: 'integer', required: true }, // 类型
        Stock: { type: 'integer', required: true }, // 库存
    },

    updateBookDto: {
        Id: { type: 'integer', required: true }, // id
        BookName: { type: 'string', required: false },   // 名称
        Author: { type: 'string', required: false },   // 作者
        Price: { type: 'number', required: false },   // 单价
        Typeid: { type: 'integer', required: false }, // 类型
        Stock: { type: 'integer', required: false }, // 库存
        isSoldout: { type: 'integer', required: false }, // 图书上架状态
    }
};