// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "",
    city: "",
    country: "",
    nickname: "",
    province: "",
    list: [
      { name: "鸣人" },
      { name: "佐助" },
      { name: "小樱" },
      { name: "鹿丸" },
      { name: "小李" },
      { name: "宁次" },
      { name: "天天" },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

  }
})