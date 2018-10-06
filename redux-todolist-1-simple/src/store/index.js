import { createStore } from 'redux';
import reducer from './reducer'
/**
 * store 相当于一个管理员
 * reducer中存放的才是所有的状态
 */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
