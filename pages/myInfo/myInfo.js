const App = getApp()

Page({
	data: {
		userInfo: {},
		items: [
			{
				icon: 'http://coupon-1253611430.costj.myqcloud.com/Ui_Image_order_slcted.png',
				text: '我的订单',
				path: '/pages/orderList/orderList'
			}, 
			{
				icon: 'http://coupon-1253611430.costj.myqcloud.com/Ui_Image_addr_slcted.png',
				text: '收货地址',
				path: '/pages/address/address'
			}, 
			{
				icon: 'http://coupon-1253611430.costj.myqcloud.com/Ui_Image_kefu.png',
				text: '联系客服',
				path: '15501101582',
			}, 
			{
				icon: 'http://coupon-1253611430.costj.myqcloud.com/Ui_Image_help.png',
				text: '常见问题',
				path: '/pages/problems/problems',
			},
		],
		settings: [
			{
				icon: 'http://coupon-1253611430.costj.myqcloud.com/Ui_Image_clear.png',
				text: '清除缓存',
				path: '5956.23KB'
			}, 
			{
				icon: 'http://coupon-1253611430.costj.myqcloud.com/Ui_Image_about_slcted.png',
				text: '关于我们',
				path: '/pages/aboutUs/aboutUs'
			}, 
		]
	},
	onLoad() {

	},
	onShow() {

	}
})