const App = getApp()

Page({
    data: {
    	show: !0,
    	form: {
			name   : '', 
			gender : 'male', 
			tel    : '', 
			address: '', 
			is_def : !1, 
        },
        radio: [
            {
            	name: '先生', 
            	value: 'male', 
            	checked: !0, 
            },
            {
            	name: '女士', 
            	value: 'female', 
            },
        ],
    },
    onLoad() {

  },
})