const App = getApp()

Page({
    data: {
        indicatorDots: !1,
        autoplay: !1,
        current: 0,
        interval: 3000,
        duration: 1000,
        circular: !1,
    },
    onLoad() {},
    onShow() {this.goLogin},
    bindload(e) {
    	//setTimeout(App.WxService.getStorageSync('token') ? this.goIndex : this.goLogin, 3000)
        setTimeout(this.goLogin, 3000)
    },
    goIndex() {
        /*
        App.WxService.switchTab({
            url: '../index/index'
        })*/
        wx.redirectTo({
            url: '../index/index'
        })
    },
    goLogin() {
        wx.redirectTo({
            url: '../login/login'
        })
    },
})