//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        grids: [
            {
                img: 'https://github.com/wawow/olapic/raw/master/icon/button.png',
                url: '/pages/btns/index',
                text: '按钮'
            }, {
                img: 'https://github.com/wawow/olapic/raw/master/icon/grids.png',
                url: '/pages/grid/index',
                text: '九宫格'
            }, {
                img: 'https://github.com/wawow/olapic/raw/master/icon/panel.png',
                url: '/pages/panel/index',
                text: '面板'
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
