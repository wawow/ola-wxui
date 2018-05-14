# oLa Steps 步骤条

## 使用方法
在对应的页面json文件中引用Steps组件
```javascript
"usingComponents": {
    "oLaSteps": "/components/steps/steps"
}
```

## 代码示例
```javascript
<oLaSteps steps="{{steps}}" showDesc></oLaSteps>
```

### 参数 steps
类型: Array
```javascript
steps: [
    {
        done: true,
        text: '普通用户',
        desc: '0公里'
    }, {
        done: true,
        text: '银卡会员',
        desc: '50公里'
    }, {
        done: false,
        text: '金卡会员',
        desc: '150公里'
    }, {
        done: false,
        text: '白金会员',
        desc: '500公里'
    }, {
        done: false,
        text: '黑金会员',
        desc: '1000公里'
    }
]
```

### 参数 type
类型: String
* vertical
```javascript
<oLaSteps type="vertical" steps="{{steps}}" showDesc></oLaSteps>
```

### 参数 hideBorder
类型: showDesc
```javascript
<oLaSteps steps="{{steps}}"></oLaSteps>
```

### 属性
| 名称     | 类型    | 是否必须  | 默认  | 描述   |
|---------|---------|----------|------|-------|
| steps    | `Array`  | 是       | 空 | 步骤条内容，(最少2组，最多5组) |
| type    | `String`  | 否       | 'horizon' | 横向：`horizon`，纵向：`vertical` |
| showDesc   | `Boolean` | 否       | false | 是否显示描述信息 |
