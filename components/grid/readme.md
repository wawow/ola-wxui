# oLa grid九宫格

## 使用方法
在对应的页面json文件中引用多grid组件
```
"usingComponents": {
    "oLaGrid": "/components/grid/grid"
}
```

## 代码示例
```
<oLaGrid grid="{{grids}}"></oLaGrid>
```

### 参数 grid
类型: 数组对象
* img `显示的icon地址`
* text `显示的文本内容`
* url `跳转的小程序页面地址`
* opentype `跳转类型，默认为navigate。接受值和微信小程序自带保持一致：navigate、redirect、reLaunch`
```
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
    }
]
```
### 参数 num
类型: 数字
默认: 3
* 2
* 3
* 4
* 5
```
<oLaGrid grid="{{grids}}" num="2"></oLaGrid>
<oLaGrid grid="{{grids}}" num="3"></oLaGrid>
<oLaGrid grid="{{grids}}" num="4"></oLaGrid>
<oLaGrid grid="{{grids}}" num="5"></oLaGrid>
```
