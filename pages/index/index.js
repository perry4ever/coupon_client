var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var config = require('../../etc/config.js')
const app = getApp()

Page({
    data: {
        // bannerImgUrl:[],
        // bannerName:[],
        // bannerScore:[],
        // bannerAveragePrice:[],
        // bannerAddress:[],
        // bannerCouponUrl:[],
        merchantList0:[],
        merchantList1: [],
        merchantList2: [],
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


        var tmp=wx.getStorageSync('merchantList')
        var goodlist=wx.getStorageSync('goodList')
        var commentList = wx.getStorageSync('commentList')
        var tmp0=[];
        var tmp1=[];
        var tmp2=[];

        for (var j = 0; j < commentList.length; j += 1) {
          commentList[j].avatarUrl = config.imgUrlPre + config.customer + commentList[j].customerName + config.imgUrlSub
        }

        for(var i=0;i<tmp.length;i+=1){
          tmp[i].bannerUrl=config.imgUrlPre+config.merchant+tmp[i].merchantId+config.imgUrlSub
          console.log(tmp[i].bannerUrl)
          tmp[i].goodList = []

          for(var j=0;j<goodlist.length;j+=1){
            if (goodlist[j].merchantName == tmp[i].merchantName){
              tmp[i].goodList.push(goodlist[j])
            }
          }

          tmp[i].commentList = []

          for (var j = 0; j < commentList.length; j += 1) {
            if (commentList[j].merchantName == tmp[i].merchantName) {
              tmp[i].commentList.push(commentList[j])
            }
          }


          var starStyle = 'wx-image_movielist_item_score allstar' + tmp[i].score
          tmp[i].starStyle=starStyle
          console.log(starStyle)

          if (tmp[i].hasdaijin == 1) tmp[i].hasdaijin = true
          else tmp[i].hasdaijin = false
          if (tmp[i].hasmaisong == 1) tmp[i].hasmaisong = true
          else tmp[i].hasmaisong = false
          if (tmp[i].hasmanjian == 1) tmp[i].hasmanjian = true
          else tmp[i].hasmanjian = false
          if (tmp[i].hasmanzhe == 1) tmp[i].hasmanzhe = true
          else tmp[i].hasmanzhe = false

          wx.setStorageSync(tmp[i].merchantName, tmp[i])

          if(tmp[i].merchantType=='服务'){
            tmp0.push(tmp[i])
          }
          else if(tmp[i].merchantType=='餐饮'){
            tmp1.push(tmp[i])
          }
          else{
            tmp2.push(tmp[i])
          }
        }
        console.log(tmp1)
        
        this.setData({
          merchantList0: tmp0,
          merchantList1: tmp1,
          merchantList2: tmp2,
        })
        
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
    },
    tapToFetchCoupon: function(e){
      var merchantName = e.currentTarget.id
      console.log('in tapToFetchCoupon')
      wx.setStorageSync('chosenMerchantName', merchantName)
      wx.navigateTo({
        url: '../fetchCoupon/fetchCoupon'
      })
    }
})
