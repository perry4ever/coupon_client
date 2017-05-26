// import polyfill from 'assets/plugins/polyfill'
// import WxValidate from 'helpers/WxValidate'
// import HttpResource from 'helpers/HttpResource'
// import HttpService from 'helpers/HttpService'
// import WxService from 'helpers/WxService'
// import Tools from 'helpers/Tools'
// import Config from 'etc/config'
var config = require('etc/config.js')


App({
  onLaunch: function () {
    // wx.clearStorage()

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

        var goodlist = res.data[2]
        for(var i=0;i<goodlist.length;i+=1){
          goodlist[i].goodUrl = config.imgUrlPre + config.good + goodlist[i].goodId + config.imgUrlSub
        }

        wx.setStorageSync('merchantList', res.data[0])
        wx.setStorageSync('couponListForIndex', res.data[1])
        wx.setStorageSync('goodList', res.data[2])
        wx.setStorageSync('commentList', res.data[3])
        
        var merchants = res.data[0]
        var coupons = res.data[1]
        var comments = res.data[3]

        for(var i=0;i<merchants.length;i+=1){
          var merchantName=merchants[i].merchantName
          var newlist=[]
          for(var j=0;j<coupons.length;j+=1){
            if(merchantName==coupons[j][0]){
              newlist.push(coupons[j])
            }
          }
          console.log(config.couponsListForFetch)
          console.log(config.imgUrlPre)
          wx.setStorageSync(config.couponsListForFetch + merchantName, newlist)
        }


        console.log('成功获取所有商铺列表和供优惠券领取页使用的优惠券列表，并存入缓存')
      },
      fail: function (res) {
        // wx.showModal({
        //   title: '网络',
        //   content: '网络连接出现错误或者无法连接到网络，请检查网络！',
        //   showCancel: false,
        //   success: function (res) {
        //     if (res.confirm) {
        //       console.log('用户点击确定')
        //       wx.switchTab({
        //         url: '../index/index',
        //       })
        //     }
        //   }
        // })
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
