import React, { Component } from 'react'
import store from './store/index.js'
import 'antd/dist/antd.css'

import './App.css'
import TodolistUI from './TodolistUI'
import {
  getHandleInputChange,
  getHandleSubmitClick,
  getHandleItemClick,
  getTodoList
} from './store/actionCreators.js'

/**
 * 容器组件（聪明组件）
 * 它关注的是整个组件的业务逻辑
 */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    const { list, inputValue } = this.state
    return (
      <TodolistUI
        list={list}
        inputValue={inputValue}
        handleInputChange={this.handleInputChange}
        handleSubmitClick={this.handleSubmitClick}
        handleItemClick={this.handleItemClick}
      />
    )
  }

  componentDidMount() {
    /**
     * action 是actionCreate中定义的一个函数，它返回Ajax请求回来的数据
     * 这个action被派发到store里面，因为store使用了redux-thunk这个中间件
     * 改造了store.dispatch，使得store.dispatch可以接受函数作为参数。
     * 当store接受到这个函数就不会报错了，他会执行这个函数，
     * 这个函数还会接受到一个参数即dispath，方便我们在actionCreator中执行这个函数。
     */
    const action = getTodoList();
    store.dispatch(action)
  }
  //input改变
  handleInputChange(e) {
    store.dispatch(getHandleInputChange(e.target.value))
  }
  //点击提交
  handleSubmitClick(e) {
    store.dispatch(getHandleSubmitClick(this.state.inputValue))
  }
  //点击删除
  handleItemClick(index) {
    store.dispatch(getHandleItemClick(index))
  }
  //向组件set新的state
  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default App
