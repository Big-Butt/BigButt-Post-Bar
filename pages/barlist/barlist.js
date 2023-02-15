// pages/barlist/barlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    imgUrl: '/images/null.png',
    floorstatus: false,
    touxiang: ''
  },

  // 回到顶部按键的显示与隐藏
  onPageScroll(e) {
    // console.log(e);
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop(e) {  // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 500
      })
    }
  },

  // 下拉刷新 重新获取页面数据
  onPullDownRefresh() {
    //loading 提示框
    wx.showLoading({
      title: '页面加载中...',
    })
    console.log("下拉刷新啦");
    this.getBarList();
    setTimeout(function () {
      wx.hideLoading();
    }, 2000)
  },

  // 获取页面数据
  getBarList: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/api/get/article',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res.data.article);
        that.setData({
          // title: res.data.article.title,
          // content: res.data.article.content
          article: res.data.article
        })
      }
    })
  },


  // 页面加载时, 调用 getBarList 函数, 获取页面数据
  onLoad(options) {
    this.getBarList();
    console.log();
  },

    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})