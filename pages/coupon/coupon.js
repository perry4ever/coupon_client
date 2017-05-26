// Page({
//     data: {
//       list: [
//         {
//           id: '3',
//           name: '杨记黄焖鸡',
//           open: false,
//           pages: [
//             {
//               ch: '满100减10',
//               en: 'manjian'
//             },
//             {
//               ch: '满80打9折',
//               en: 'manzhe'
//             },
//             {
//               ch: '买二送一',
//               en: 'maisong'
//             },
//             {
//               ch: '代金5元',
//               en: 'daijin'
//             }
//           ]
//         },
//         {
//           id: '2',
//           name: '鲸吞咖喱屋',
//           open: false,
//           pages: [
//             {
//               ch: '满100减10',
//               en: 'manjian'
//             },
//             {
//               ch: '满80打9折',
//               en: 'manzhe'
//             },
//             {
//               ch: '买二送一',
//               en: 'maisong'
//             },
//             {
//               ch: '代金5元',
//               en: 'daijin'
//             }
//           ]
//         },
//         {
//           id: '1',
//           name: '杨国福麻辣烫',
//           open: false,
//           pages: [
//             {
//               ch: '满100减10',
//               en: 'manjian'
//             },
//             {
//               ch: '满80打9折',
//               en: 'manzhe'
//             },
//             {
//               ch: '买二送一',
//               en: 'maisong'
//             },
//             {
//               ch: '代金5元',
//               en: 'daijin'
//             }
//           ]
//         }
//       ],
//         couponList:[],
//         nameList:[]
//     },
//     onLoad: function(){
//       var customerName = wx.getStorageSync('userInfo').nickName

//       wx.request({
//         url: 'http://127.0.0.1:5000/couponClient',
//         data: {
//           customerName: customerName
//         },
//         header: {
//           'content-type': 'application/x-www-form-urlencoded'
//         },
//         method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
//         // header: {}, // 设置请求的 header
//         success: function (res) {
//           var couponList = res.data
//           var nameList = []
//           console.log(couponList)
//           for(var i=0;i<couponList.length;i+=1){
//             nameList.push(couponList[i][0].merchantName)
//             for(var j=0;j<couponList[i].length;j+=1){
//               couponList[i].splice(0, 0, false)
//             }
//           }

//           this.setData({
//             couponList: couponList,
//             nameList: nameList
//           })

//           console.log(nameList)
//           console.log(couponList)
//         },
//         fail: function (res) {
//           wx.showModal({
//             title: '网络',
//             content: '网络连接出现错误或者无法连接到网络，请检查网络！',
//             showCancel: false,
//             success: function (res) {
//               if (res.confirm) {
//                 console.log('用户点击确定')
//                 wx.switchTab({
//                   url: '../index/index',
//                 })
//               }
//             }
//           })
//         },
//         complete: function (res) {
//           // complete
//         }
//       })
//     },
//     kindToggle: function (e) {
//         var id = e.currentTarget.id, list = this.data.list;
//         for (var i = 0, len = list.length; i < len; ++i) {
//             if (list[i].id == id) {
//                 list[i].open = !list[i].open
//             } else {
//                 list[i].open = false
//             }
//         }
//         this.setData({
//             list: list
//         });
//     }
// });

Page({
  data: {
    list: [
      {
        id: '3',
        name: '杨记黄焖鸡',
        open: false,
        pages: [
          {
            ch: '满100减10',
            en: 'manjian'
          },
          {
            ch: '满80打9折',
            en: 'manzhe'
          },
          {
            ch: '买二送一',
            en: 'maisong'
          },
          {
            ch: '代金5元',
            en: 'daijin'
          }
        ]
      },
      {
        id: '2',
        name: '鲸吞咖喱屋',
        open: false,
        pages: [
          {
            ch: '满100减10',
            en: 'manjian'
          },
          {
            ch: '满80打9折',
            en: 'manzhe'
          },
          {
            ch: '买二送一',
            en: 'maisong'
          },
          {
            ch: '代金5元',
            en: 'daijin'
          }
        ]
      },
      {
        id: '1',
        name: '杨国福麻辣烫',
        open: false,
        pages: [
          {
            ch: '满100减10',
            en: 'manjian'
          },
          {
            ch: '满80打9折',
            en: 'manzhe'
          },
          {
            ch: '买二送一',
            en: 'maisong'
          },
          {
            ch: '代金5元',
            en: 'daijin'
          }
        ]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});
