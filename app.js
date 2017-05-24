// import polyfill from 'assets/plugins/polyfill'
// import WxValidate from 'helpers/WxValidate'
// import HttpResource from 'helpers/HttpResource'
// import HttpService from 'helpers/HttpService'
// import WxService from 'helpers/WxService'
// import Tools from 'helpers/Tools'
// import Config from 'etc/config'

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
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
            }
          })
        }
      });
    }
  },
  globalData: {
    userInfo: null
  }
})

// //app.js
// App({
//   onLaunch: function () {
//     //调用API从本地缓存中获取数据
//     var logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)
//   },
//   getUserInfo:function(cb){
//     var that = this
//     if(this.globalData.userInfo){
//       typeof cb == "function" && cb(this.globalData.userInfo)
//     }else{
//       //调用登录接口
//       wx.login({
//         success: function () {
//           wx.getUserInfo({
//             success: function (res) {
//               that.globalData.userInfo = res.userInfo
//               typeof cb == "function" && cb(that.globalData.userInfo)
//             }
//           })
//         }
//       })
//     }
//   },
//   globalData:{
//     userInfo:null
//   }
// })