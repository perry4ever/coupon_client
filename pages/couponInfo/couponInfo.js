// pages/couponInfo/couponInfo.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  generateCodeTap:function(){
        wx.navigateTo({
          url: '../QRCode/QRcode?title=www.baidu.com',
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
  }
  ,
  draw: function (string, canvas, cavW, cavH, ecc) {
        ecclevel = ecc || ecclevel;
        canvas = canvas || _canvas;
        if (!canvas) {
            console.warn('No canvas provided to draw QR code in!')
            return;
        }

        var size =  Math.min(cavW, cavH);

        var frame = this.getFrame(string),
            ctx = wx.createContext(),
            px = Math.round(size / (width + 8));

        var roundedSize = px * (width + 8),
            offset = Math.floor((size - roundedSize) / 2);
        size = roundedSize;
        ctx.clearRect(0, 0, cavW, cavW);
        // ctx.setFillStyle('#ffffff');
        // ctx.rect(0, 0, size, size);
        ctx.setFillStyle('#000000');
  // ctx.setLineWidth(1);
        for (var i = 0; i < width; i++) {
              for (var j = 0; j < width; j++) {
                  if (frame[j * width + i]) {   
                      ctx.rect(px * (4 + i) + offset, px * (4 + j) + offset, px, px);
                      ctx.fill();
                  }
              }
          }
          
        wx.drawCanvas({
              canvasId: canvas,
              actions: ctx.getActions()
        });
    }
})