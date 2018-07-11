Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //登录获取code
  login: function () {
    wx.login({
      success: function (res) {
        console.log(res.code);
        //发送请求
        wx.request({
          url: 'http://192.168.55.105/code.php', //仅为示例，并非真实的接口地址
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res,100);
            wx.showModal({
              title: '微信登录授权',
              content: '申请获得以下权限\r\n获得你的公开信息(昵称、头像等)',
              success:function(res){
                if(res.confirm){
                  wx.navigateTo({
                    url: '../show/show',
                  })
                }else if(res.cancel){
                  console.log('用户点击取消');
                }
              }
            })
          }
        });
      },
      fail: function () {

      }
    });
    //验证登录是否过期
    wx.checkSession({
      success: function (res) {
        console.log(res, 1);
        wx.showToast({
          title: '登录没有过期',
        })
      },
      fail: function (res) {
        console.log(res, 2);
        wx.showModal({
          title: '提示',
          content: '登录过期了，是否重新登录',
        });
        wx.login({
          success: function (res) {
            console.log(res.code);
            //发送请求
            wx.request({
              url: 'http://192.168.55.105/code.php', //仅为示例，并非真实的接口地址
              data: {
                code: res.code
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success: function (res) {
                console.log(res);
              }
            });
          },
        })
      }
    });
  },
  //验证登录是否过期
  // checksession: function () {
  //   wx.checkSession({
  //     // 成功
  //     success: function (res) {
  //       console.log(res, "登录未过期");
  //       wx.showToast({
  //         title: '登录未过期',
  //       })
  //     },
  //     // 失败
  //     fail: function (res) {
  //       console.log(res, "登录过期");
  //       wx.showModal({
  //         title: '提示',
  //         content: '你的登录信息过期了，请重新登录',
  //       })
  //       //再一次调用wx.login()
  //       wx.login({
  //         success: function (res) {
  //           console.log(res.code);
  //           //发送请求
  //           wx.request({
  //             url: 'http://192.168.55.105/code.php', //仅为示例，并非真实的接口地址
  //             data: {
  //               code: res.code
  //             },
  //             header: {
  //               'content-type': 'application/json' // 默认值
  //             },
  //             success: function (res) {
  //               console.log(res);
  //             }
  //           });
  //         },
  //       })
  //     }
  //   })
  // },
  // 获取用户的信息
  info: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = res.userInfo.avatarUrl;
        var city = res.userInfo.city;
        var country = res.userInfo.country;
        var nickname = res.userInfo.nickName;
        var province = res.userInfo.province;
        //发送数据到wxml
        that.setData({
          city: city,
          avatarUrl: avatarUrl,
          country: country,
          nickname: nickname,
          province: province
        })
      }
    })
  }
})