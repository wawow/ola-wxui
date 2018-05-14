# oLa Stepper 步进器

## 使用方法
在对应的页面json文件中引用Stepper组件
```javascript
"usingComponents": {
    "oLaStepper": "/components/stepper/stepper"
}
```

## 代码示例
```javascript
<oLaStepper stepper="{{ stepper1.stepper }}" min="{{ stepper1.min }}" max="{{ stepper1.max }}" data-component-id="stepper1" bind:change="stepperChange"></oLaStepper>
```

### 参数 stepper
类型: Object
```javascript
stepper1: {
    stepper: 1,
    min: 1,
    max: 20
},
stepper2: {
    stepper: 10,
    min: 1,
    max: 20
},
stepper3: {
    stepper: 10,
    min: 1,
    max: 20,
    step: 2
}
```

### 参数 stepper
类型: Number

### 参数 min
类型: Number

### 参数 max
类型: Number

### 参数 step
类型: Number

### 参数 data-component-id
类型: String

### 事件名称 stepperChange
类型：回调事件


### 属性
| 名称     | 类型    | 是否必须  | 默认  | 描述   |
|---------|---------|----------|------|-------|
| stepper    | `Object`  | 是       | 空 | 步进器显示数据内容|
| stepper.stepper    | `Number`  | 是       | 空| 当前显示数字 |
| stepper.min   | `Number` | 是       | 空 | 最小数字 |
| stepper.max   | `Number` | 是       | 空 | 最大数字 |
| stepper.step   | `Number` | 是       | 空 | 数字跨度 |
| data-component-id   | `String` | 是       | 空 | 多个步进器使用对应ID |
| stepperChange  | `回调函数` | 是       | 空 | 操作数据时的事件回调 |
