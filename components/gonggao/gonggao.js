// components/gonggao/gonggao.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    content: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    ready() {
      var that = this;
      wx.request({
        url: 'http://127.0.0.1:3000/api/get/gonggao',
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        success:(res) => {
          console.log(res.data.content);
          that.setData({
            content: res.data.content
          })
        }
      })
    },
  }
})
