Page({
    data: {
        list: [
            {
                id: '3',
                name: '杨记黄焖鸡',
                open: false,
                pages:[
                    {
                        ch:'满100减10',
                        en:'manjian'
                    },
                    {
                        ch:'满80打9折',
                        en:'manzhe'
                    },
                    {
                        ch:'买二送一',
                        en:'maisong'
                    },
                    {
                        ch:'代金5元',
                        en:'daijin'
                    }
                ]
            },
            {
                id: '2',
                name: '鲸吞咖喱屋',
                open: false,
                pages:[
                    {
                        ch:'满100减10',
                        en:'manjian'
                    },
                    {
                        ch:'满80打9折',
                        en:'manzhe'
                    },
                    {
                        ch:'买二送一',
                        en:'maisong'
                    },
                    {
                        ch:'代金5元',
                        en:'daijin'
                    }
                ]
            },
            {
                id: '1',
                name: '杨国福麻辣烫',
                open: false,
                pages:[
                    {
                        ch:'满100减10',
                        en:'manjian'
                    },
                    {
                        ch:'满80打9折',
                        en:'manzhe'
                    },
                    {
                        ch:'买二送一',
                        en:'maisong'
                    },
                    {
                        ch:'代金5元',
                        en:'daijin'
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
