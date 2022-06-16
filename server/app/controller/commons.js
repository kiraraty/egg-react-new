const Controller = require('egg').Controller;
const BaseController = require('./base');

class CommonsController extends BaseController {
  async citys() {
    const { ctx, app } = this;
    try {
      const result = await app.httpclient.request('https://apis.imooc.com/?icode=89773B5DA84CA283', {
        dataType: 'json'
      });
      // console.log(result)
      if (result.status === 200) {
        this.success(result.data.citys);
      } else {
        this.error('获取城市数据失败');
      }
    } catch (error) {
      this.error('获取城市数据失败');
    }
  }
}

module.exports = CommonsController;