const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    username: '',
    getinput: null,
    getinput2: null,
    getinput3: null,
    getinput4: null,

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
  getinput4: function (e) {//方法4
    this.data.getinput4 = e.detail.value;
  },
  yes: function () {
    if (this.data.getinput4 == null)
      wx.showModal({
        title: '房间号不能为空！',
        icon: 'false',
        duration: 2000
      })
    if (this.data.getinput4.length!=3)
      wx.showModal({
        title: '房间号应该为3位数！',
        icon: 'false',
        duration: 2000
      })
    if (this.data.getinput3 == null)
      wx.showModal({
        title: '楼号不能为空！',
        icon: 'false',
        duration: 2000
      })
    if (this.data.getinput3.length<1||this.data.getinput3.length>2)
      wx.showModal({
        title: '请输入正确的楼号！',
        icon: 'false',
        duration: 2000
      })
    if (this.data.getinput2 == null)
      wx.showModal({
        title: '手机号不能为空！',
        icon: 'false',
        duration: 2000
      })
    if (this.data.getinput2.length !=11)
      wx.showModal({
        title: '请输入正确手机号！',
        icon: 'false',
        duration: 2000
      })
    if (this.data.getinput == null)
      wx.showModal({
        title: '姓名不能为空！',
        icon: 'false',
        duration: 2000,
      })
    if (this.data.getinput != null && this.data.getinput2 != null && this.data.getinput3 != null && this.data.getinput4 != null && this.data.getinput3.length < 3 && this.data.getinput2.length == 11 && this.data.getinput4.length == 3) {

      wx.showLoading({
        title: '地址信息上传中...',
        duration: 4000

      })
      wx.request({
        url: 'https://49.235.178.249/Message/Insert',
        method: 'GET',
        data: {
          user: this.data.username,
          name: this.data.getinput,
          phone: this.data.getinput2,
          address: 'C' + this.data.getinput3 + '-' + this.data.getinput4
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading()
          wx.showToast({
            title: '资料上传成功！',
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
    }
  },
  no: function () {
    wx.showModal({
      title: '提示',
      content: '确定退出收货地址信息录入吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          wx.navigateBack({
            delta: 1
          })
        } else {//这里是点击了取消以后

        }
      }
    })
  },
  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var username = wx.getStorageSync('username')
    this.setData({
      username: username
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '添加收货地址'
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