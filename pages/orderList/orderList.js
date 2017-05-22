Page({
    data: {
        list: [
            {
                id: '3',
                name: '杨记黄焖鸡',
                time:'2017-3-16-14:23',
                open: false,
                goods: [{'name':'大份黄焖鸡+微辣+果汁','amount':'x1'}, {'name':'小份黄焖鸡+中辣','amount':'x1'}, {'name':'金针菇','amount':'x1'}, {'name':'土豆片','amount':'x1'}]
            },
            {
                id: '2',
                name: '鲸吞咖喱屋',
                time:'2017-3-6-18:31',
                open: false,
                goods: [{'name':'照烧鸡排饭','amount':'x1'}, {'name':'台湾卤肉饭','amount':'x1'}]
            },
            {
                id: '1',
                name: '杨国福麻辣烫',
                time:'2017-3-14-23:59',
                open: false,
                goods: [{'name':'超辣麻辣烫','amount':'x1'}, {'name':'中辣麻辣烫','amount':'x1'}, {'name':'秘制骨汤麻辣烫','amount':'x1'}]
            },
            {
                id: '4',
                name: '鲸吞咖喱屋',
                time:'2017-3-6-18:31',
                open: false,
                goods: [{'name':'照烧鸡排饭','amount':'x1'}, {'name':'台湾卤肉饭','amount':'x1'}]
            },
            {
                id: '5',
                name: '鲸吞咖喱屋',
                time:'2017-3-6-18:31',
                open: false,
                goods: [{'name':'照烧鸡排饭','amount':'x1'}, {'name':'台湾卤肉饭','amount':'x1'}]
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
