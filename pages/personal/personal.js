// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    username: '',
    password: ''
  },

  // 获取新图片地址
  getNewImg(e) {
    this.setData({
      imgUrl: e.detail.value
    })
    console.log(this.data.imgUrl);
  },

  // 获取新用户名
  getNewUsername(e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username);
  },

  // 获取新密码
  getNewPassword(e) {
    this.setData({
      password: e.detail.value
    })
    console.log(this.data.password);
  },

  // 提交新值(修改个人信息)
  submit() {
    // console.log(this.data.imgUrl);
    // console.log(this.data.username);
    // console.log(this.data.password);
    var that = this
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/update',
      data: {
        id: getApp().globalData.userInfo.id,
        imgUrl: this.data.imgUrl,
        username: this.data.username,
        password: this.data.password
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        getApp().globalData.userInfo.username = that.data.username
        getApp().globalData.userInfo.password = that.data.password
        getApp().globalData.userInfo.imgUrl = that.data.imgUrl 
        console.log('444'+that.data.username);
        wx.switchTab({
          url: '/pages/mine/mine',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    this.setData({
      username: getApp().globalData.userInfo.username,
      password: getApp().globalData.userInfo.password,
      imgUrl: getApp().globalData.userInfo.imgUrl,
    })
    console.log(this.data.imgUrl);
    console.log(this.data.username);
    console.log(this.data.password);
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})