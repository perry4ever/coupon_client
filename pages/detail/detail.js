


// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
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
    tapComment: function(){
      
    }
  
})

