import { createStore, applyMiddleware, compose } from 'redux'
//使用redux-thunk中间件，改造store.dispatch，使得store.dispatch可以接受函数作为参数。
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import todoSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(reducer, enhancer)
sagaMiddleware.run(todoSagas)

export default store
