# oLa grid九宫格

## 使用方法
在对应的页面json文件中引用多grid组件
```javascript
"usingComponents": {
    "oLaGrid": "/components/grid/grid"
}
```

## 代码示例
```javascript
<oLaGrid grid="{{grids}}"></oLaGrid>
```
在引用页面JS中设置data下的grids值为对象数组

### 参数 grid
类型: 数组对象
* img `显示的icon地址，图片像素在96*96以上`
* text `显示的文本内容`
* url `跳转的小程序页面地址`
* opentype `跳转类型，默认为navigate。接受值和微信小程序自带保持一致：navigate、redirect、reLaunch`
```javascript
grids: [
    {
        img: 'https://github.com/wawow/olapic/raw/master/icon/button.png',
        url: '/pages/btns/index',
        text: '按钮',
        opentype: ''
    }, {
        img: 'https://github.com/wawow/olapic/raw/master/icon/grids.png',
        url: '/pages/logs/logs',
        text: '九宫格'
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
```javascript
<oLaGrid grid="{{grids}}" num="2"></oLaGrid>
<oLaGrid grid="{{grids}}" num="3"></oLaGrid>
<oLaGrid grid="{{grids}}" num="4"></oLaGrid>
<oLaGrid grid="{{grids}}" num="5"></oLaGrid>
```

### 参数 hideBorder
类型: Boolean
```javascript
<oLaGrid grid="{{grids}}" num="2" hideBorder></oLaGrid>
```

### 属性
| 名称     | 类型    | 是否必须  | 默认  | 描述   |
|---------|---------|----------|------|-------|
| grids    | `Array`  | 否       | 空 | 显示内容数组 |
| num    | `String`  | 否       | 3 | 每行几个显示值，值有`2`、`3`、`4` 、`5` |
| hideBorder   | `Boolean` | 否       | false | 是否显示边框，默认为false |
