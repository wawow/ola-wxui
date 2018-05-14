# oLa Panel 面板

## 使用方法
在对应的页面json文件中引用Panel组件
```javascript
"usingComponents": {
    "oLaPanel": "/components/panel/panel"
}
```

## 代码示例
```javascript
<oLaPanel></oLaPanel>
```

### 参数 title
类型: String
```javascript
<oLaPanel title="面板标题">带标题的面板内容</oLaPanel>
```

### 参数 hideBorder
类型: Boolean
```javascript
<oLaPanel title="标题" hideBorder>不带上下边框的面板内容</oLaPanel>
```

### 属性
| 名称     | 类型    | 是否必须  | 默认  | 描述   |
|---------|---------|----------|------|-------|
| title    | `String`  | 否       | 空 | 面板标题 |
| hideBorder   | `Boolean` | 否       | false | 不带上下边框 |
