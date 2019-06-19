const md5 = require('../../utils/md5.js');
const app = getApp()

Page({
  data: {
    'aid': '1',
    'name': 'XorPay测试',
    'pay_type': 'jsapi',
    'price': '0.03',
    'order_id': 'test-0001',
    'notify_url': 'https://abc.com/',
    'more': 'ojbk',
    'secret': 'xxxx',
  },
  //事件处理函数
  input_text: function (e) {
    var d = {};
    d[e.target.id] = e.detail.value;
    this.setData(d);
    console.log(this.data);
  },
  pay: function() {
    wx.navigateToMiniProgram({
      appId: 'wx6c2423928b92ca14',
      path: 'pages/index/index',
      extraData: {
        'aid': this.data.aid,
        'name': this.data.name,
        'pay_type': this.data.pay_type,
        'price': this.data.price,
        'order_id': this.data.order_id,
        'notify_url': this.data.notify_url,
        'more': this.data.more,
        'sign': md5.md5(this.data.name + this.data.pay_type + this.data.price + this.data.order_id + this.data.notify_url + this.data.secret),
      },
      //envVersion: 'develop',
      fail(res) {
        wx.showToast({
          title: res.errMsg,
          icon: 'none',
        });
      },
      success(res) {
        wx.showToast({
          title: '跳转成功',
          icon: 'none',
        });
      },
    });
  },
  onLoad: function () {
  },
})
