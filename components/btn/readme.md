# oLa button按钮

## 使用方法
在对应的页面json文件中引用button组件
```javascript
"usingComponents": {
    "oLaBtn": "/components/btn/btn"
}
```
## 代码示例
### 整体按钮效果展示
![button-all](https://github.com/wawow/olapic/raw/master/button/button-all.jpg)
### 默认按钮
```javascript
<oLaBtn>这是一个按钮</oLaBtn>
```
### 按钮类型
type 参数
* primary
* warn
* danger
```javascript
<oLaBtn>普通按钮</oLaBtn>
<oLaBtn type="primary">标准按钮</oLaBtn>
<oLaBtn type="warn">警告按钮</oLaBtn>
<oLaBtn type="danger">错误按钮</oLaBtn>
```

### 按钮大小
size 参数
* md
* sm
* xs
```javascript
<oLaBtn size="md">大按钮</oLaBtn>
<oLaBtn type="sm">中按钮</oLaBtn>
<oLaBtn type="xs">小按钮</oLaBtn>
```

### 按钮反转
inverse
```javascript
<oLaBtn type="primary" inverse>标准按钮</oLaBtn>
<oLaBtn type="warn" inverse>警告按钮</oLaBtn>
<oLaBtn type="danger" inverse>错误按钮</oLaBtn>
```
### 按钮并列
fit
```javascript
<oLaBtn type="primary" fit>按钮并列一行</oLaBtn>
<oLaBtn type="warn" fit>按钮并列一行</oLaBtn>
<oLaBtn type="danger" fit>按钮并列一行</oLaBtn>
```

### 按钮禁用
disabled
```javascript
<oLaBtn disabled>标准按钮</oLaBtn>
```

### 按钮加载
loading
```javascript
<oLaBtn loading>加载中</oLaBtn>
```

### 按钮isLast
按钮isLast
```javascript
<oLaBtn isLast>单个按钮不加下边距</oLaBtn>
```

### 按钮自定义样式
classStyle
```javascript
<oLaBtn classStyle="width:200rpx;">按钮自定义</oLaBtn>
```
