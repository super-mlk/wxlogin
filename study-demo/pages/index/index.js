Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,//是否隐藏对话框  
    listArray:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMove();
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
  load: function () {
    const downloadTask = wx.downloadFile({
      url: 'http://my.wecah.com/test/image/00001111.gif', //仅为示例，并非真实的资源
      success: function (res) {
        console.log(res);
        wx.playVoice({
          filePath: res.tempFilePath
        })
        console.log(res.tempFilePath);
      }
    });
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  },
  openDocument:function(){
    wx.downloadFile({
      url: 'https://cynthianc.github.io/images/123.pdf',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
            console.log(res)
          },
          fail: function (res) {
            console.log('fail')
            console.log(res)
          },
          complete: function (res) {
            console.log('complete')
            console.log(res)
          }
        })
      },
      fail: function (res) {
        console.log('fail')
        console.log(res)
      },
      complete: function (res) {
        console.log('complete')
        console.log(res)
      }
    })
  },
  showModal:function(){
    wx.showModal({
      title: '确定下载',
      content: '支付界面',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
       
      },
      fail: function (res) {
        console.log("失败"+res);
      }
    })
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })
  },
  onShareAppMessage: function (res) {
    return {
      title: '测试',
      path: '/pages/index/index'
    }
  },
  //事件处理函数  
  bindViewTap: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })

  },
  //确定按钮点击事件  
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  //取消按钮点击事件  
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },  
  getMove:function(){
    var that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      data: {},
      method:'post',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data.subjects);
        that.setData({
          listArray: res.data.subjects
        });
        // console.log(res.data.subjects);
      }
    }) ;
  },
  getTitle:function(res){
    // console.log(res.currentTarget.dataset.title);
    var movieTitle = res.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../movie/movie?title=' + movieTitle,
    })
  }
})