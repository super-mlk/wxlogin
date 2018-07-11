Page({
  data: {
    flag: '敬请期待…',
    code: null
  },
  pay: function () {
    var that = this;
    //登录获取code  
    wx.login({
      success: function (res) {
        if (res.code) {
          that.code = res.code;
          //统一下单  
          wx.request({
            url: 'https://baoyanmall.cn:8443/pay/paySign',//自己的https服务器  
            data: {
              code: that.code
            },
            method: 'post',
            success: function (res) {
              console.log(res.data);
              var data = res.data;
              //调用微信支付  
              wx.requestPayment({
                'timeStamp': data.timeStamp,
                'nonceStr': data.nonceStr,
                'package': data.package,
                'signType': 'MD5',
                'paySign': data.paySign,
                'success': function (res) {
                  console.log("支付成功");
                },
                'fail': function (res) {
                  console.log("支付失败");
                }
              })
            },
            'fail': function (res) {
              console.log("获取信息失败");
            }
          })
        } else {
          console.log("无法登录");
        }
      },
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
  },
  onReady: function () {
    // 页面渲染完成  
  },
  onShow: function () {
    // 页面显示  
  },
  onHide: function () {
    // 页面隐藏  
  },
  onUnload: function () {
    // 页面关闭  
  }
})  