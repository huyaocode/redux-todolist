/**
 * action creators 统一创建action
 * 使用actionCreator来用以管理页面上的action, 因为在组件那边太多的action会让页面变得复杂、难以管理。
 * 所有的action都放在这里，会让逻辑更清晰
 */
import axios from 'axios'
import { ADD_TODO_ITEM, CAHNGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_DATA} from './actionType'

export const getHandleInputChange = (value) => ({
  type: CAHNGE_INPUT_VALUE,
  value
})

export const getHandleSubmitClick = (value) => ({
  type: ADD_TODO_ITEM,
  value
})

export const getHandleItemClick = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})

export const getInitListData = (value) => ({
  type: INIT_LIST_DATA,
  value
})

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get('/api/list.json')
      .then((res) => {
        const list = res.data;
        const action = getInitListData(list);
        dispatch(action);
      })
  }
}