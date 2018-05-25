//index.js
//获取应用实例
const app = getApp();
const baseUrl = 'https://www.maxappa.com/ola/';

Page({
    data: {
        grids: [
            {
                img: baseUrl + 'icon/button.png',
                url: '/pages/btns/index',
                text: '按钮'
            }, {
                img: baseUrl + 'icon/grids.png',
                url: '/pages/grid/index',
                text: '九宫格'
            }, {
                img: baseUrl + 'icon/panel.png',
                url: '/pages/panel/index',
                text: '面板'
            }, {
                img: baseUrl + 'icon/steps.png',
                url: '/pages/steps/index',
                text: '步骤条'
            }, {
                img: baseUrl + 'icon/stepper.png',
                url: '/pages/stepper/index',
                text: '步进器'
            }, {
                img: baseUrl + 'icon/footer.png',
                url: '/pages/footer/index',
                text: '页脚'
            }
        ]
    },
    onReady: function() {},
    onLoad: function() {},
    getUserInfo: function(e) {}
})
