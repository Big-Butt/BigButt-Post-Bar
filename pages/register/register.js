// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },

  getUsername(e) {
    this.setData({
      username: e.detail.value
    })
    console.log(this.data.username);
  },

  getPassword(e) {
    this.setData({
      password: e.detail.value
    })
    console.log(this.data.password);
  },

  // 注册用户
  registerUser() {
    const userInfo = { username: this.data.username, password: this.data.password }
    console.log(userInfo);
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/register',
      data: {
        username: userInfo.username,
        password: userInfo.password,
        imgUrl: 'data:image/jpeg;base64,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'
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        console.log('请求成功');
        // 弹出 注册成功
        wx.showModal({
          title: '提示',
          content: '注册成功',
          success(res) {
            if (res.confirm) { // 点击 确定
              wx.navigateTo({
                url: '/pages/login/login',
              })
            } else { // 点击 取消
              wx.navigateTo({
                url: '/pages/login/login',
              })
            }
          }
        })
      },
      fail(res) {
        console.log('请求失败');
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