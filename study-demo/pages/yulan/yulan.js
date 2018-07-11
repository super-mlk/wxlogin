// pages/yulan/yulan.js
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
  openDocument:function(){
    // wx.downloadFile({
    //   url:"https://cynthianc.github.io/images/123.pdf",
    //   success:function(res){
    //     var filePath = res.tempFilePath;
    //     console.log(filePath);
    //     wx.openDocument({
    //       filePath: filePath,
    //       success:function(res){
    //         console.log("打开文档成功");
    //       },
    //       fail:function(res){
    //         console.log(res);
    //       },
    //       complete:function(res){
    //         console.log(res);
    //       }
    //     })
    //   },
    //   fail:function(){
    //     console.log("下载失败");
    //   }
    // })
    wx.navigateTo({
      url: '../out/out',
    })
  }
})