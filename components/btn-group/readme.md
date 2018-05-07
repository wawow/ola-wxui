# oLa button-group按钮组

## 使用方法
在对应的页面json文件中引用多button组件
```
"usingComponents": {
    "oLaBtn": "/components/btn/btn",
    "oLaBtnGroup": "/components/btn-group/btn-group",
}
```

## 代码示例
<oLaBtnGroup>
    <oLaBtn type="primary">标准按钮</oLaBtn>
    <oLaBtn type="primary" inverse>标准按钮</oLaBtn>
    <oLaBtn type="warn">警告按钮</oLaBtn>
    <oLaBtn type="warn" inverse>警告按钮</oLaBtn>
    <oLaBtn type="danger">错误按钮</oLaBtn>
    <oLaBtn type="danger" inverse>错误按钮</oLaBtn>
</oLaBtnGroup>
<oLaBtnGroup>
    <oLaBtn disabled>禁用按钮</oLaBtn>
    <oLaBtn loading>加载中</oLaBtn>
</oLaBtnGroup>
```
