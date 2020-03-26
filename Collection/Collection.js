const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    list: [],
    book:[],
    username: ''
  },
quxiao: function(){
  var that = this;
  var booknum = this.data.book.book_number
  var StuNa = wx.getStorageSync('username')
  that.setData({
    StuNa: StuNa
  })
  wx.showModal({
    title: '提示',
    content: '确定取消收藏该书籍吗？',
    success: function (res) {
      if (res.confirm) {
        wx.request({
          url: 'https://49.235.178.249/Delectcollect/book?Collectbooknum=' + booknum + '&Collectbookname=' + StuNa,
          method: 'GET',
          data: {
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            wx.showToast({
              title: '已取消收藏！',
              icon: 'success',
              duration: 1500
            })
            that.onLoad()
          }
        })
      }
      else {//这里是点击了取消以后

      }
    }
  })
  },


  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var that = this;
    var StuNa = wx.getStorageSync('username')
    that.setData({
      StuNa: StuNa
    })
    wx.request({
      url: 'https://49.235.178.249/History/collect?StuName=' + StuNa,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          list: res.data,
          book:res.data[0]
        })
      }
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '我的收藏'
    })
  },



  /**
  
  * 生命周期函数--监听页面显示
  
  */

  onShow: function () {


    this.onLoad()
  },
  



  /**
  
  * 生命周期函数--监听页面隐藏
  
  */

  onHide: function () {

  },



  /**
  
  * 生命周期函数--监听页面卸载
  
  */

  onUnload: function () {

  },



  /**
  
  * 页面相关事件处理函数--监听用户下拉动作
  
  */

  onPullDownRefresh: function () {

  },



  /**
  
  * 页面上拉触底事件的处理函数
  
  */

  onReachBottom: function () {

  },



  /**
  
  * 用户点击右上角分享
  
  */

  onShareAppMessage: function () {

  }

})