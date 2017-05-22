


// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  tapToast: function () {
        wx.showToast({
            title: '领取成功！',
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
    tapComment: function(){
      
    },
    gotoDetailTap: function () {
        wx.showModal({
            title: '是否跳转',
            content: '该优惠券有领取条件，是否跳转到商店页面消费以达到条件？',
            confirmText: "是",
            cancelText: "否",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    wx.navigateTo({
                      url: '../detail/detail',
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
                    console.log('用户点击主操作')
                }else{
                    console.log('用户点击辅助操作')
                }
            }
        });
    },
  
})

