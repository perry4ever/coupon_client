const App = getApp()

Page({
    data: {
        canEdit: !1,
    },
    onLoad() {
    },
    onShow() {
        this.getCarts()
    },
    onTapEdit(e) {
        this.setData({
            canEdit: !!e.currentTarget.dataset.value
        })
    },
    tapOrder(e){
        wx.navigateTo({
          url: '../pay/pay',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})