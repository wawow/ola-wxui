//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        grids: [
            {
                img: 'https://github.com/wawow/olapic/raw/master/icon/button.png',
                url: '/pages/btns/index',
                text: '按钮',
                opentype: ''
            }, {
                img: 'https://github.com/wawow/olapic/raw/master/icon/grids.png',
                url: '/pages/logs/logs',
                text: '九宫格',
                opentype: ''
            }, {
                img: 'https://www.maxappa.com/ola/button/button-all.jpg',
                text: '按钮3'
            }, {
                img: 'https://www.maxappa.com/ola/button/button-all.jpg',
                text: '按钮'
            }, {
                img: 'https://www.maxappa.com/ola/button/button-all.jpg',
                text: '按钮2'
            }, {
                img: 'https://www.maxappa.com/ola/button/button-all.jpg',
                text: '按钮3'
            }
        ]
    },
    onReady: function() {},
    onLoad: function() {},
    getUserInfo: function(e) {}
})
