


// 获取全局应用程序实例对象
var app = getApp();
var config = require('../../etc/config.js');
var inputData=''

// 创建页面实例对象
Page({
  data: {
    currentMerchant: {},
    currentCouponList: [],
    currentGoodList: [],
    currentCommentList: [],
    inputdata:''
  },
  onLoad: function () {
    var tmp = wx.getStorageSync('chosenMerchantName')
    var tmpMerchant = wx.getStorageSync(tmp)
    var tmpComList = wx.getStorageSync(config.comments+tmp)

    this.setData({
      currentMerchant: tmpMerchant
    })

    var cgl = this.data.currentMerchant.goodList
    var ccl = this.data.currentMerchant.commentList

    this.setData({
      currentGoodList: cgl
    })
    this.setData({
      currentCommentList: ccl
    })
  },
  tapToast: function () {
        wx.showToast({
            title: '成功加入购物车',
            icon: 'success',
            duration: 1000
        });
    },
    tapLoading: function () {
        wx.showToast({
            title: '数据加载中',
            icon: 'loading',
            duration: 3000
        });
    },
    tapComment: function(e){
      var merchantName = this.data.currentMerchant.merchantName
      var customerName = wx.getStorageSync('userInfo').nickName
      console.log(customerName, merchantName, inputData)
      wx.request({
        url: 'http://127.0.0.1:5000/detailClient',
        data: {
          customerName: customerName,
          merchantName: merchantName,
          content: inputData
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log(res.data)
          if (res.data=='0'){
            wx.showModal({
              title: '成功',
              content: '评论发布成功，下拉刷新即可显示！',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
          
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
    whenInput:function(e){
      inputData = e.detail.value
    }
  
})

