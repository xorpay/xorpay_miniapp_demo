# xorpay_miniapp_demo

- xorpay 小程序支付 demo
- 先联系管理员开通你账号的跳转权限
- 直接用 微信开发者工具 导入项目运行即可，记得修改自己的 aid 和 app secret

跳转 XorPay 收银台小程序 appid: wx6eeed4ca124a1abf

在 app.json 中添加:

```
    "navigateToMiniProgramAppIdList": [
        "wx6eeed4ca124a1abf"
    ]
```

小程序跳转代码:

```
    wx.navigateToMiniProgram({
        appId: 'wx6eeed4ca124a1abf',
        path: 'pages/index/index',
        extraData: {
            'aid': '1',  #aid
            'name': 'XorPay充值',
            'pay_type': 'jsapi',
            'price': '0.02',
            'order_id': 'm-5',
            'notify_url': 'https://abc.com/notify',
            'sign': md5.hexMD5('XorPay充值' + 'jsapi' + '0.02' + 'm-5' + 'https://abc.com/notify' + 'app secret'),
        },
        envVersion: 'develop',
        fail(res) {
            wx.showToast({
                title: res.errMsg,
                icon: 'none',
            });
        },
        success(res) {
            wx.showToast({
                title: 'ok',
                icon: 'none',
            });
        },
    });
```

支付成功或者取消，会跳回你的小程序，并携带参数:

支付成功
```
extraData: {
    status: 'success'
}
```

支付取消
```
extraData: {
    status: 'cancel'
}
```
