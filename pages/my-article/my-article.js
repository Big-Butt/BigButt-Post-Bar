// pages/my-article/my-article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    articleId: '',
    showTitle: '',
    showContent: '',
    showUsername: '',
    showImg: ''
  },

  // 获取帖子内容
  getArticle() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/myArticle',
      method: 'POST',
      data: {
        // username: that.data.username
        username: getApp().globalData.userInfo.username
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        // console.log(res.data.article);
        that.setData({
          // title: res.data.article.title,
          // content: res.data.article.content
          article: res.data
        })
        console.log('ga' + that.data.article);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.articleId);
    var articleId = options.articleId

    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/myArticle',
      method: 'POST',
      data: {
        // username: that.data.username
        username: getApp().globalData.userInfo.username
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log(res.data);
        that.setData({
          showTitle: res.data[articleId].title,
          showContent: res.data[articleId].content,
          showUsername: res.data[articleId].user_name,
          showImg: res.data[articleId].imgUrl,
          article: res.data,
          articleId: res.data[articleId].article_id
        })
        // console.log(that.data.article[0]);

        // 怎么拿到对象里的数据？
        // console.log(that.data.article[articleId].title);

        console.log('test ' + that.data.showTitle);
      }
    })
  },

  // 删除
  delete() {
    console.log(this.data.articleId);
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/delete',
      method: 'POST',
      data: {
        articleId: this.data.articleId
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        wx.showModal({
          title: '提示',
          content: '删除成功',
          showCancel: false,
          success(res) {
            wx.switchTab({
              url: '/pages/message/message'
            })
          }
        })
      }
    })
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