// index.js
Page({
  data: {
    article: {},
    imgUrl: '/images/null.png',
    touxiang: '',
    username: ''
  },

  // 获取当前用户名
  getMyUsername() {
    // const that = this
    this.setData({
      username: getApp().globalData.userInfo.username
    })
    // console.log(this.data.username);
    // wx.request({
    //   url: 'http://127.0.0.1:3000/api/post/getMyUsername',
    //   data: {
    //     // username: that.data.username
    //     username: getApp().globalData.userInfo.username
    //   },
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success(res) {
    //     that.setData({
    //       username: getApp().globalData.userInfo.username
    //     })
    //     console.log('666  ' + that.data.username);
    //   }
    // })
  },

  // 获取页面数据
  getMyBarList() {
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
        console.log('哈哈', res.data);
        that.setData({
          // title: res.data.article.title,
          // content: res.data.article.content
          article: res.data
        })
      }
    })
  },

  onLoad() {
    this.getMyUsername();
    this.getMyBarList();
  },

  onShow() {
    this.getMyUsername();
    this.getMyBarList();
  }
})
