var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var config = require('../../etc/config.js')
const app = getApp()

Page({
    data: {
        bannerImgUrl:[],
        bannerName:[],
        bannerScore:[],
        bannerAveragePrice:[],
        bannerAddress:[],
        bannerCouponUrl:[],
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

        var merchantList=wx.getStorageSync('merchantList')

        for (var i = 0; i < merchantList.length;i+=1){
            var aMerchant=merchantList[i]
            bannerImgUrl.push(config.imgUrlPre+aMerchant.merchantId+config.imgUrlSub)
            bannerName.push(aMerchant.merchantName)
            bannerAddress.push(aMerchant.address)
            bannerAveragePrice.push(aMerchant.averagePrice)
            bannerScore.push(aMerchant.score)
        }
        
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
