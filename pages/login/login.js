const App = getApp()

Page({
    data: {
    userInfo: {}
  },
    onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    App.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.request({
      url: 'https://127.0.0.1:8080',
      data: {
        testItem:1,
        testItem1:'fsadfadsfas',
        testItem2:{
          subItem:'fdsafads',
          subItem:32424
        }

      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    console.log("已经执行完request了");
  },
    btnTab: function(event) {
    	wx.switchTab ({
            url: '../index/index'
        })
    }
})