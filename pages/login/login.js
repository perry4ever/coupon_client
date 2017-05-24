const App = getApp()

Page({
    data: {
        userInfo: {},
        nickName:0,
        avatarUrl:0,
        openId:0
    },
    onLoad: function () {
      console.log('onLoad')
      var that = this
      //调用应用实例的方法获取全局数据
      App.getUserInfo(function (userInfo) {
        //更新数据
        that.setData({
          userInfo: userInfo
        })
        that.update()
      })
    },
  onReady: function(){
    console.log(this.data.userInfo)
    wx.request({
      url: 'http://127.0.0.1:5000/CustomerLogin',
      data: {
        nickName: this.data.userInfo.nickName,
        openId: this.data.userInfo.openId,
        avatarUrl: this.data.userInfo.avatarUrl,
        // userInfo
        // nickName: 'nickName',
        // openId: '5615614651451455',
        // avatarUrl: 'this.avatarUrl'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  },
    btnTab: function(event) {
    	wx.switchTab ({
            url: '../index/index'
        })
    }
})

