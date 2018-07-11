Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:"0",
    y:"0",
    tab:'0'
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
  handletouchmove:function(event){
    var currentX = event.touches[0].pageX;
    var currentY = event.touches[0].pageY;
    // var tx = currentX - this.data.lastX;
    // var ty = currentY - this.data.lastY;
    console.log("currentX" + currentX);
    console.log("currentY" + currentY);
    console.log(event);
    // console.log(event.target.offsetTop);
    // if(event.target.offsetTop == 200)
      // this.setData({
      //   x: currentX,
      //   y: currentX,
      //   tab:"1"
      // });
    // }
  }
})