# oLa Footer 页脚

## 使用方法
在对应的页面json文件中引用Footer组件
```javascript
"usingComponents": {
    "oLaFooter": "/components/footer/footer"
}
```

## 代码示例
```javascript
<oLaFooter>Copyright © 2008-2019 oLa</oLaFooter>
```

### 参数 footerLink
类型: Array
```javascript
footerLink: [
    {
        url: '/pages/btns/index',
        text: '按钮组件'
    }, {
        url: '/pages/index/index',
        text: 'oLa首页'
    }, {
        url: '/pages/steps/index',
        text: '步骤条'
    }
]
```

### 参数 showLink
类型: Boolean
```javascript
<oLaFooter footerLink="{{footerLink}}" showLink>Copyright © 2008-2019 oLa</oLaFooter>
```

### 参数 fixedBottom
类型: Boolean
```javascript
<oLaFooter footerLink="{{footerLink}}" showLink fixedBottom>Copyright © 2008-2019 oLa</oLaFooter>
```

### 属性
| 名称     | 类型    | 是否必须  | 默认  | 描述   |
|---------|---------|----------|------|-------|
| footerLink    | `Array`  | 否       | 空 | 页脚上的链接数组 |
| showLink    | `Boolean`  | 否       | false | 是否显示链接数组 |
| fixedBottom   | `Boolean` | 否       | false | 固定在页面底部显示页脚 |
