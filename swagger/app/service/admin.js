const Service = require('./baseService');

class AdminService extends Service{
    constructor(ctx){
        super(ctx ,'Admin');
    }
}

module.exports = AdminService;