import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store/index.js'
import 'antd/dist/antd.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    const {list, inputValue} = this.state
    return (
      <div style={{ width: '100%', margin: '30px' }}>
        <Input 
          style={{ width: '300px', marginRight: '20px' }} 
          value={inputValue} 
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleSubmitClick}>提交</Button>
        <List
          style={{ width: '300px', marginTop: '20px' }}
          bordered
          dataSource={list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }

  handleInputChange (e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleSubmitClick(e) {
    const action = {
      type: 'add_todo_item',
      value: this.state.inputValue
    }
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default App
