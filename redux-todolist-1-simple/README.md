# redux-todolist


### 第一步，定义store
   store是信息的中转站,它接受来自组件的action，并将action和现在的state转发给ruducer；它也接受reducer的返回的新state，并将新的state传递给组件。
   创建stroe文件夹，在文件夹中创建index.js
```javascript
import { createStore } from 'redux'

const stroe = createStore(reducer);

export default stroe;
```

### 第二步，定义reducer
reducer是一个纯函数，它不可以修改store，它需要深拷贝一份stroe进行修改后返回。
reduer接受两个参数，即旧的state状态和action，它识别action中的类型，然后修改新的state中数据
state默认接受的参数即整个store的初始状态写在defaultState中
```
const defaultState = {
  inputValue: '',
  list: []
}

/**action起名字规范：
 * 谓 - 宾 - 补
 * 修改state的动作(动词) - 修改对象 - 对象描述
 */
export default (state = defaultState, action) => {
  return state;
}
```

### 第三步，定义action
创建用户的事件函数，在事件中定义action，
定义action的类型与action的value值，使用store.dispatch(action)将action发送到store。
我总结的action起名字规范：
谓 - 宾 - 补
修改state的动作(动词) - 修改对象 - 对象描述

```
handleInputChange(e) {
  const action = {
    type: 'change_input_value',
    value: e.target.value
  }
  store.dispatch(action)
}
```

### 第四步，在reducer中接收并相应action
```diff
export default (state = defaultState, action) => {
+ if(action.type === 'change_input_value') {
+     const newState = JSON.parse(JSON.stringify(defaultState));
+     newState.inputValue = action.value;
+     return newState;
+   }
  return state;
}
```

### 第五步，订阅store的改变并获取state
在组件的constructor中订阅store的改变，并使用store.getState()获取最新的state
```diff
class App extends Component {
  constructor(...props) {
    super(...props);
+  this.state = store.getState();
+  this.handleStoreChange = this.handleStoreChange.bind(this);
+  //订阅stroe的改变，当stroe发生改变时调用这个函数。
+  //这个函数将调用getState获取stroe中最新的state，并使用setState让组件相应state的变化
+  store.subscribe(this.handleStoreChange) 
  }

+ //添加下面的订阅函数
+ handleStoreChange() {
+   this.setState(() => store.getState())
+ }
```