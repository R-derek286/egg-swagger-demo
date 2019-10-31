const Service = require('./baseService');

class BookService extends Service {
    constructor(cxt) {
        super(cxt, 'Book');
    }

    /**
     * 根据获取图书表的所有信息
     */
    async getAllBook() {
        const entity = await this.db.findAll({ where: { isDelete: 0 } });
        return entity;
    }

    /**
     * 分页获取数据
     * @param {*} pageIndex 页码
     * @param {*} pageSize 页容量
     * @param {*} whereSql 查询条件（无需拼接 where )
     * @param {*} columns 筛选列
     */
    async getBooks(pageIndex, pageSize, whereSql, columns) {
        whereSql = whereSql || " 1=1 ";
        columns = columns || "*";

        const [pageResults] = await this.ctx.model.query(`select * from v_book where ${whereSql};`);
        const pageCount = Math.ceil(pageResults.length / pageSize);    // 获取总页数,向上取整

        // 分页的数据
        const [results] = await this.ctx.model.query(`select ${columns} from v_book where ${whereSql} limit ${(pageIndex - 1) * pageSize},${pageSize};`);

        return {
            pageIndex: pageIndex,
            pageSize: pageSize,
            pageCount: pageCount,
            totalCount:pageResults.length,
            results: results
        };
    }
}

module.exports = BookService;