//app.js
App({
  onLaunch: function () {
  },
  onShow: function (op) {
    if (op && op.referrerInfo && op.referrerInfo.extraData) {
      wx.showToast({
        title: op.referrerInfo.extraData.status,
        icon: 'none',
      });
    };
  },
  globalData: {
  }
})