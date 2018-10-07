import React, { Component } from 'react'
import store from './store/index.js'
import 'antd/dist/antd.css'
import TodolistUI from './TodolistUI'
import {
  getHandleInputChange,
  getHandleSubmitClick,
  getHandleItemClick,
  getInitList
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
    const action = getInitList();
    store.dispatch(action);
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
