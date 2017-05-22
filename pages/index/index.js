var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()

Page({
    data: {
        tabs: ["服务", "餐饮", "娱乐"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0,
        open : false
    },
    tap_ch: function(e){
        if(this.data.open){
            this.setData({
            open : false
            });
        }else{
            this.setData({
            open : true
            });
        }
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    searchTab: function(event) {
    	wx.navigateTo ({
            url: '../search/search'
        })
    }
})
