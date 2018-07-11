// pages/expertList/expertList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/img/banner01.jpg',
      '../../assets/img/banner02.jpg',
      '../../assets/img/banner03.jpg',
      '../../assets/img/banner01.jpg',
      '../../assets/img/banner02.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 5000, //自动切换时间间隔,5s
    duration: 800, //  滑动动画时长1s
    indicatorcolor: "#ccc", //指示点颜色
    indicatoractivecolor: "#2da1dc", //指示点选中颜色,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navData: [
      {
        text: '顶层设计'
      },
      {
        text: '国资监管'
      },
      {
        text: '国资运营'
      },
      {
        text: '公司治理'
      },
      {
        text: '混合经济'
      },
      {
        text: '考核激励'
      },
      {
        text: '创新发展'
      },
      {
        text: '行业国资国企'
      },
      {
        text: '国外国企改革'
      },
      {
        text: '改革工具箱'
      }
    ],
    currentTab: 0,
    navScrollLeft: 0,
    listArray: [
      {
        id: "1",
        img: "../../assets/img/report1.jpg",
        title: "华彬讲透孙子兵法...",
        synopsis: "华彬  浙江大学与华营咨询...",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "2",
        img: "../../assets/img/report2.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "3",
        img: "../../assets/img/report3.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "4",
        img: "../../assets/img/report4.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "5",
        img: "../../assets/img/report1.jpg",
        title: "华彬讲透孙子兵法...",
        synopsis: "华彬  浙江大学与华营咨询...",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "6",
        img: "../../assets/img/report2.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "7",
        img: "../../assets/img/report3.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      },
      {
        id: "8",
        img: "../../assets/img/report4.jpg",
        title: "王立铭:生命科学5...",
        synopsis: "得到自然科学第一课",
        update: "时长: 1小时9分 / 6节课",
        extra: '1000人购买',
        money: "99$",
      }
    ]
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

  particularsBtn: function () {
    wx.navigateTo({
      url: '../sqldetails/sqldetails',
    })
  },
  switchNav(event) {
    var cur = event.currentTarget.dataset.current;
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
      navScrollLeft: (cur - 2) * singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  switchTab(event) {
    var cur = event.detail.current;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
    });
  },
  bindscroll:function(e){
    console.log(e.detail.scrollTop);
  }
})