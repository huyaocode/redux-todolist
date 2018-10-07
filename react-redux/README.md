# react-redux学习
react-redux是一个第三方模块，它帮助我们在react这更方便的使用redux

### 1. Provider 提供器
在index.js，Provider连接了store，那么Provider里面的所有组件都有能力连接这个store了
```
const App = (
  <Provider store={store}>
    <Todolist />
  </Provider>
)
```

### 2. connect 做连接
connect可以让组件与store进行连接.

组件怎么接受到store的数据呢？
使用mapStateToProps把store里面的数据映射到组件的props上面，在组件中使用数据就可以直接使用props上面的数据了.

组件怎么向store发送action呢？
使用mapDispatchToProps把组件的方法挂载到组件的props上，并把store.dispatch映射给这些组件方法。

注意：第二个括号中的组件是一个UI组件，但使用connect连接了状态与方法后这个被导出的组件就是一个容器组件了
```
export default connect(mapStateToProps, mapDispatchToProps)( 组件 )
```

##### mapStateToProps
把Store里面是数据映射到组件的props上
所以组件中的数据全部使用this.props而不是this.state

 ```
// @param {Obj} state 就是store里的数据
const mapStateToProps = state => {
  return {
    //将store里面的inputValue映射到props里面的inputValue
    inputValue: state.inputValue,
    list: state.list
  }
}
```

##### mapDispatchToProps
把方法挂载的组件的props上，并把store.dispatch映射给组件方法
在这里就使得dispatch可以直接在函数内部使用

```
// @param {func} dispatch 就是store.dispatch方法
const mapDispatchToProps = dispatch => {
  return {
    someFunc1() { ... }
  }
}
```

### 使用react-connect的好处
1. 简写了很多的代码，把dispatch映射到了组件的方法中
2. 很容易就将组件拆分成一个UI组件，也是一个无状态组件，因为方法是在mapDispatchToProps那边写的，而且store中的数据都被映射为props传入组件
3. 一个无状态的UI组件可以有效的提升代码的性能，因为它内部没有任何生命周期函数，它也不会去生成任何组件的实例。