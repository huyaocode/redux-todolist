import { createStore, applyMiddleware, compose } from 'redux'
//使用redux-thunk中间件，改造store.dispatch，使得store.dispatch可以接受函数作为参数。
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

const store = createStore(reducer, enhancer)

export default store
/**
 * store 相当于一个管理员
 * reducer中存放的才是所有的状态
 */
