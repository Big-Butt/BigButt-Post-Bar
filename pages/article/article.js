// pages/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        article: {},
        showTitle: '',
        showContent: '',
        showUsername: '',
        showImg: ''
    },


    // tapAction(e) {
    //     var id = this.data.article[0];
    //     console.log('id：' + JSON.stringify(id));
    //     console.log(this.data.article);
    //     let index = e.currentTarget.id;
    //     this.setData({
    //         article: index
    //     })
    // },

    // 获取帖子内容
    getArticle() {
        var that = this;
        wx.request({
            url: 'http://127.0.0.1:3000/api/get/article',
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            success: (res) => {
                // console.log(res.data.article);
                that.setData({
                    // title: res.data.article.title,
                    // content: res.data.article.content
                    article: res.data.article
                })
                // console.log(that.data.article);
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // this.tapAction()
        console.log(options.articleId);
        var articleId = options.articleId

        var that = this;
        wx.request({
            url: 'http://127.0.0.1:3000/api/get/article',
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            },
            success: (res) => {
                // console.log(res.data.article);
                that.setData({
                    showTitle: res.data.article[articleId].title,
                    showContent: res.data.article[articleId].content,
                    showUsername: res.data.article[articleId].user_name,
                    showImg: res.data.article[articleId].imgUrl,
                    article: res.data.article
                })
                // console.log(that.data.article[0]);
                
                // 怎么拿到对象里的数据？
                // console.log(that.data.article[articleId].title);

                console.log('test ' + that.data.showTitle);
            }
        })

        // this.setData({
        //     showTitle: this.data.article[articleId].title,
        //     showContent: this.data.article[articleId].content,
        //     showUsername: this.data.article[articleId].user_name
        // })
        // console.log('xxx' + that.data.article[0]);
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
    onShareAppMessage({res, target}) {
      let myObj = {
        title: '分享测试',
        path: '/pages/article/article'
      }
      return myObj;
    }
})