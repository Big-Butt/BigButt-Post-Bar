// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",//这里放了一张灰色头像图片
    nickName: "点击获取头像和昵称",//微信用户昵称

    username: '',
    password: '',
    imgUrl: ''
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

  // 登录
  userLogin() {
    const userInfo = { username: this.data.username, password: this.data.password }
    console.log(userInfo);
    let that = this
    wx.request({
      url: 'http://127.0.0.1:3000/api/post/login',
      data: {
        username: userInfo.username,
        password: userInfo.password
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        console.log('请求成功');
        console.log(res.data);
        that.setData({
          username: res.data.username,
          password: res.data.password,
          imgUrl: res.data.imgUrl,
        })
        // console.log(res.data.userInfo.username);
        getApp().globalData.userInfo.username = res.data.username
        getApp().globalData.userInfo.password = res.data.password
        getApp().globalData.userInfo.imgUrl = res.data.imgUrl
        getApp().globalData.userInfo.id = res.data.user_id
        console.log('thisUsersID:' + res.data.user_id);
        wx.showToast({
          title: '登录成功', //弹框内容
          icon: 'success',  //弹框模式
          duration: 2000,    //弹框显示时间
          success() {
            wx.switchTab({
              url: '/pages/mine/mine'
            })
          }
        })
        
      },
      fail(res) {
        console.log('请求失败');
        wx.showToast({
          title: '账号密码错误!', //弹框内容
          icon: 'error',  //弹框模式
          duration: 2000    //弹框显示时间
        })
      }
    })
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl
        })
        console.log(res.userInfo.nickName);
        console.log(res.userInfo.avatarUrl);

        wx.setStorage({    //数据缓存方法
          key: 'nickName',   //关键字，本地缓存中指定的key
          data: res.userInfo.nickName,    //缓存微信用户公开信息，
          success(res) {      //缓存成功后，输出提示
            console.log('写入nickName缓存成功')
          },
          fail: function () {        //缓存失败后的提示
            console.log('写入nickName发生错误')
          }
        })
        wx.setStorage({    //数据缓存方法
          key: 'avatarUrl',   //关键字，本地缓存中指定的key
          data: res.userInfo.avatarUrl,    //缓存微信用户公开信息，
          success: function () {      //缓存成功后，输出提示
            console.log('写入avatarUrl缓存成功')
          },
          fail: function () {        //缓存失败后的提示
            console.log('写入avatarUrl发生错误')
          }
        })
      }
    })

  },

  // gotoWxLogin() {
  //   wx.navigateTo({
  //     url: '/pages/wx-login/wx-login',
  //   })
  // },

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