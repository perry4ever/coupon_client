// pages/search/search.js
Page({
   data: {
        inputShowed: false,
        inputVal: ""
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
    submit: function (e){
        console.log(this.data.inputVal);
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
    }
})