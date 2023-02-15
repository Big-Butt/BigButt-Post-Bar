// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    uploadImg: '',
    username: '',
    touxiang: ''
  },

  getTitle(e) {
    this.setData({
      title: e.detail.value
    })
    console.log(this.data.title);
  },

  getContent(e) {
    this.setData({
      content: e.detail.value
    })
    console.log(this.data.content);
  },

  getArticle() {
    console.log('标题: ' + this.data.title + '\n' + '内容: ' + this.data.content);
  },
  
  // 发布
  postArticle() {
    var that = this
    const article = { title: this.data.title, content: this.data.content, user_name: getApp().globalData.userInfo.username, image: this.data.uploadImg, touxiang: getApp().globalData.userInfo.imgUrl }
    console.log(article);
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/publish',
      data: {
        title: article.title,
        content: article.content,
        user_name: article.user_name,
        imgUrl: article.image,
        touxiang: article.touxiang
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        console.log('请求成功');
        console.log(res);
        // 弹出 发布成功
        wx.showModal({
          title: '提示',
          content: '发布成功',
          success(res) {
            if (res.confirm) { // 点击 确定
              wx.switchTab({
                url: '/pages/barlist/barlist',
              })
            } else { // 点击 取消
              wx.switchTab({
                url: '/pages/barlist/barlist',
              })
            }
          }
        })
      },
      fail(err) {
        console.log('请求失败');
        console.log(err);
      }
    })
  },

  // 上传图片
  uploadImg() {
    var that = this
    wx.chooseMedia({
      count: 1,
      mediaType: ['iamge'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success(res) {
        console.log(res.tempFiles[0].tempFilePath);
        console.log(res.tempFiles.length);
        console.log(res.tempFiles[0].size);
        that.setData({
          uploadImg: res.tempFiles[0].tempFilePath
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