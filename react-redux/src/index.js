import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todolist from './Todolist';
import store from './store'

/**
 * Provider是一个提供器
 * 在这里，Provider连接了store，那么Provider里面的所有组件都有能力连接这个store了
 */
const App = (
  <Provider store={store}>
    <Todolist />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

