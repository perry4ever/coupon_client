// pages/search/search.js

var WxSearch = require('../wxSearch/wxSearch.js')

var app = getApp()

Page({
   data: {
        inputShowed: false,
        inputVal: "",
        display:0,
        merchantList:[],
        merchantNameList:[]
    },
    onLoad:function(){
      console.log('onload')
      var that = this;
      wx.request({
        url: 'http://127.0.0.1:5000/searchMerchant',
        data: {
          merchantName: this.data.inputVal
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
          if (res.data != null) {
            that.setData({
              display: 1,
              merchantList: res.data
            })
          }
          else {
            that.setData({
              display: -1,
              merchantList: res.data
            })
          }
          for (var i = 0; i < that.data.merchantList.length;i+=1){
            wx.setStorage({
              key: that.data.merchantList[i][0],
              data: that.data.merchantList[i][1]
            })
            that.data.merchantNameList.push(that.data.merchantList[i][0])
            console.log(that.data.merchantNameList)
          }
          WxSearch.init(that, 43, ['aaa', 'wxNotification']);
          WxSearch.initMindKeys(that.data.merchantNameList);
          // WxSearch.initMindKeys(["a",'','']);
          // success
        },
        fail: function (res) {
          wx.showModal({
            title:'网络',
            content:'网络连接出现错误或者无法连接到网络，请检查网络！',
            showCancel:false,
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
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    wxSearchFn: function (e) {
      var that = this
      WxSearch.wxSearchAddHisKey(that);

    },
    wxSearchInput: function (e) {
      var that = this
      WxSearch.wxSearchInput(e, that);
    },
    wxSerchFocus: function (e) {
      var that = this
      WxSearch.wxSearchFocus(e, that);
    },
    wxSearchBlur: function (e) {
      var that = this
      WxSearch.wxSearchBlur(e, that);
    },
    wxSearchKeyTap: function (e) {
      var that = this
      this.setData({
        chosenMerchant: that.data.wxSearchData.mindKeys[0]
      })

      var chosenMerchantID = wx.getStorageSync(that.data.wxSearchData.mindKeys[0])
      wx.setStorageSync('chosenMerchantID', chosenmerchantID)
      wx.setStorageSync('chosenMerchantName', that.data.wxSearchData.mindKeys[0])

      wx.redirectTo({
        url: '../fetchCoupon/fetchCoupon',
      })
    },
    wxSearchDeleteKey: function (e) {
      var that = this
      WxSearch.wxSearchDeleteKey(e, that);
    },
    wxSearchDeleteAll: function (e) {
      var that = this;
      WxSearch.wxSearchDeleteAll(that);
    },
    wxSearchTap: function (e) {
      var that = this
      WxSearch.wxSearchHiddenPancel(that);
    }
})

/*
Bobs merchant
 */