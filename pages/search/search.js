// pages/search/search.js
Page({
    display: 0,
   data: {
        inputShowed: false,
        inputVal: "",
        display:0
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
        var that = this;
        wx.request({
          url: 'http://127.0.0.1:5000/searchMerchant',
          data: {
            shopName: this.data.inputVal
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
            console.log(res.data)
            if(res.data!=null){
              that.setData
            }
            else{
              display: -1
            }
            console.log(this.data.display);
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

/*
Bobs Shop
 */