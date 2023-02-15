// index.js


Page({
  data: {
    sprList: ['/images/swiper-1.gif', '/images/swiper-2.png', '/images/swiper-2.gif'],
    gonggao_index: 3,
    article: {}
  },
  


  // 页面加载
  onLoad() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/api/get/article',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success:(res) => {
        console.log(res.data.article);
        that.setData({
          // title: res.data.article.title,
          // content: res.data.article.content
          article: res.data.article.splice(0, 3)
        })
      }
    })
  },

})
