// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    avatarUrl: "/images/默认头像.png",
    username: '',
    password: '',
    imgUrl: '/images/默认头像.png'
  },

  getStorage() {
    wx.getStorage({
      key: 'nickName',
      success(res) {
        this.setData({
          nickName: res.data
        })
      }
    })
    wx.getStorage({
      key: 'avatarUrl',
      success(res) {
        this.setData({
          avatarUrl: res.data
        })
      }
    })
  },

  exit() {
    wx.showModal({
      title: '提示',
      content: '确认退出登录吗',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.showLoading({
            title: '请稍后',
          })
          setTimeout(function () {
            wx.hideLoading()
          }, 1000)
          // 退出 使 username 等信息重置
          this.setData({
            username: '',
            password: '',
            imgUrl: '/images/默认头像.png'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('我是onLoad');
    this.setData({
      username: getApp().globalData.userInfo.username,
      password: getApp().globalData.userInfo.password,
      imgUrl: getApp().globalData.userInfo.imgUrl,
      // imgUrl: '/images/默认头像.png'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('我是onShow');
    this.setData({
      username: getApp().globalData.userInfo.username,
      password: getApp().globalData.userInfo.password,
      imgUrl: getApp().globalData.userInfo.imgUrl,
    })
    console.log(this.data.username, this.data.password, this.data.imgUrl);
    console.log('password is  ' + getApp().globalData.userInfo.imgUrl);
    this.onLoad()
  },


  // goMessage 我的帖子
  goMessage() {
    wx.switchTab({
      url: '/pages/message/message',
    })
  },
  
  // goBarList 回去逛贴
  goBarList() {
    wx.switchTab({
      url: '/pages/barlist/barlist',
    })
  },
  
  // goIndex 回到首页
  goIndex() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})