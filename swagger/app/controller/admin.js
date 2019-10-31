const Controller = require('./baseController');
/**
 * @controller AdminService 管理员接口
*/
class AdminController extends Controller {
    /**
    * @summary 根据管理员id获取信息
    * @description 根据管理员id获取信息
    * @router get /v1/admin/getAdminById
    * @request query integer id 管理员id
    * @response 200 JsonResult 操作结果
    */
    async getAdminById() {
        const { ctx, service } = this;
        const adminId = ctx.query.id;
        const entity = await service.admin.getById(adminId);
        if(entity.isDelete) ctx.throw(500, '账号不存在');
        this.jsonBody(entity);
    }

    /**
    * @summary 新增管理员
    * @description 新增管理员
    * @router put /v1/admin/createAdmin
    * @request body createAdminDto model 图书信息
    * @response 200 JsonResult 操作结果
    */
    async createAdmin() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.createAdminDto);
        const model = ctx.request.body;
        model.CreateTime = new Date();
        const entity = await service.admin.create(model);
        this.jsonBody(entity);
    }

    /**
     * @summary 修改管理员账密
     * @description 修改管理员账密
     * @router post /v1/admin/updateAdmin
     * @request body updateAdminDto model 管理员信息
     * @response 200 JsonResult 操作结果
    */
    async updateAdmin() {
        const { ctx, service } = this;
        ctx.validate(ctx.rule.updateAdminDto);
        const model = ctx.request.body;
        if (!model.Id) ctx.throw(500, '图书不存在');
        model.UpdateTime = new Date();
        const entity = await service.admin.update(model.Id, model);
        this.jsonBody(entity);
    }

    /**
    * @summary 根据Id删除图书信息
    * @description 根据Id删除图书信息
    * @router delete /v1/admin/deleteAdminById
    * @request query integer id 图书Id
    * @response 200 JsonResult 操作结果
    */
    async deleteAdminById() {
        const { ctx, service } = this;
        const adminId = ctx.query.id;
        const entity = await service.admin.update(adminId, { isDelete: 1 });
        this.jsonBody(entity);
    }

    /**    
    * @summary 查询所有管理员  
    * @description 查询所有管理员 
    * @router get /v1/admin/getAllAdmins    
    * @request query string Account 账号查询    
    * @response 200 JsonResult 操作结果   
    **/
    async getAllAdmins() {
        const { ctx, service } = this;
        let whereSql = ' 1=1 and isDelete=0 ';
        if (ctx.query.Account) {
            whereSql += ` and Account like '%${ctx.query.Account}%' `;
        }
        const pageIndex = ctx.query.pageIndex || 1;
        const pageSize = ctx.query.pageSize || 10;
        const results = await service.admin.getDatasByPage(pageIndex, pageSize, whereSql, `Id,Account,Password,ConfirmPwd`);
        this.jsonBody(results);
    }
}

module.exports = AdminController;