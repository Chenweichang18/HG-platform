const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    username: '',
    list:[],
    book:[],
    getinput: null,
    getinput2: null,
    getinput3: null,

  },



  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var username = wx.getStorageSync('username')
    this.setData({
      username: username
    })
    var that = this;
    wx.request({
      url: 'https://49.235.178.249/Messages1/Se1?StuNa='+username,
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
          book: res.data[0]
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
      title: '收货地址'
    })
  },
  getinput: function (e) {//方法1
    this.data.getinput = e.detail.value;
  },
  getinput2: function (e) {//方法2
    this.data.getinput2 = e.detail.value;
  },
  getinput3: function (e) {//方法3
    this.data.getinput3 = e.detail.value;
  },

  bianji: function () {
    this.setData({
      'book.name':'',
      'book.phone': '',
      'book.address': '',
    })
    //删除地址信息
    wx.request({
      url: 'https://49.235.178.249/Delectmessage/book?wdchatname=' + this.data.username,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      }
    })

  },
  xiugai: function () {


    

      wx.request({
        url: 'https://49.235.178.249/Message/Insert',
        method: 'GET',
        data: {
          user: this.data.username,
          name: this.data.getinput,
          phone: this.data.getinput2,
          address: this.data.getinput3
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading()
          wx.showToast({
            title: '资料修改成功！',
            icon: 'success',
            duration: 1500
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 3
            })
          }, 1500)
        },

      })
    
  },


  /**
  
  * 生命周期函数--监听页面显示
  
  */

  onShow: function () {

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