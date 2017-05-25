// import polyfill from 'assets/plugins/polyfill'
// import WxValidate from 'helpers/WxValidate'
// import HttpResource from 'helpers/HttpResource'
// import HttpService from 'helpers/HttpService'
// import WxService from 'helpers/WxService'
// import Tools from 'helpers/Tools'
// import Config from 'etc/config'



App({
  onLaunch: function () {
    wx.clearStorage()

    //调用API从本地缓存中获取数据
    console.log('app launching')
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)


    var that = this;
    wx.request({
      url: 'http://127.0.0.1:5000/appClient',
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        wx.setStorageSync('merchantList', res.data)
        console.log('成功获取所有商铺列表，并存入缓存')
      },
      fail: function (res) {
        wx.showModal({
          title: '网络',
          content: '网络连接出现错误或者无法连接到网络，请检查网络！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.switchTab({
                url: '../index/index',
              })
            }
          }
        })
      },
      complete: function (res) {
        // complete
      }
    })
  },
  getUserInfo: function (cb) {
    console.log('getting userInfo')
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
              wx.setStorageSync('userInfo', res.userInfo)
              console.log(res.userInfo.nickName)
            }
          })
        }
      });
    }
  },
  globalData: {
    userInfo: null,
    currentMerchantName: ''
  }
})
