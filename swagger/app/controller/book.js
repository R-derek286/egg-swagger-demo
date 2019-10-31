const Controller = require('./baseController');
/**
 * @controller BookService 图书接口
 */
class BookController extends Controller {
    /**
    * @summary 根据Id获取图书信息
    * @description 根据Id获取图书信息
    * @router get /v1/book/getBookById
    * @request query integer id 图书Id
    * @response 200 JsonResult 操作结果
    */
    async getBookById() {
        const { ctx, service } = this;
        const BookId = ctx.query.id;
        const book = await service.book.getById(BookId);
        ctx.body = book;
    }

    /**
    * @summary 新增图书信息
    * @description 新增图书信息
    * @router put /v1/book/createBook
    * @request body createBookDto model 图书信息
    * @response 200 JsonResult 操作结果
    */
    async createBook() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.createBookDto);
        const model = ctx.request.body;
        model.CreateTime = new Date();
        const entity = await service.book.create(model);
        ctx.body = entity;
    }

    /**
    * @summary 编辑图书信息
    * @description 编辑图书信息
    * @router post /v1/book/updateBook
    * @request body updateBookDto model 图书信息
    * @response 200 JsonResult 操作结果
    */
    async updateBook() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.updateBookDto);
        const model = ctx.request.body;
        //设置报错
        if (!model.Id) ctx.throw(500, '图书不存在');
        model.UpdateTime = new Date();
        const entity = await service.book.update(model.Id, model);
        ctx.body = entity;
    }

    /**
    * @summary 根据Id删除图书信息
    * @description 根据Id删除图书信息
    * @router delete /v1/book/deleteBookById
    * @request query integer *id 图书Id
    * @response 200 JsonResult 操作结果
    */
    async deleteBookById() {
        const { ctx, service } = this;
        const BookId = ctx.query.id;
        const book = await service.book.update(BookId, { isDelete: 1 });
        ctx.body = book;
    }

    /**    
     * @summary 查询所有图书   
     * @description 查询所有图书 
     * @router get /v1/book/getAllBooks    
     * @request query string bookname 名称查询    
     * @request query integer pageIndex 页码    
     * @request query integer pageSize 页容量
     * @response 200 JsonResult 操作结果   
     **/
    async getAllBooks() {
        const { ctx, service } = this;
        let whereSql = "";
        if (ctx.query.bookname) {
            //表字段名 like '%${ctx.query.key}%' or 表字段名 like '%${ctx.query.key}%',单独条件查询
            whereSql += ` BookName like '%${ctx.query.bookname}%' or Author like '%${ctx.query.bookname}%' or BookTypeName like '%${ctx.query.bookname}%' `;
        }

        const pageIndex = ctx.query.pageIndex || 1;
        const pageSize = ctx.query.pageSize || 10;

        const results = await service.book.getBooks(pageIndex, pageSize, whereSql);
        this.jsonBody(results);
    }
}

module.exports = BookController;