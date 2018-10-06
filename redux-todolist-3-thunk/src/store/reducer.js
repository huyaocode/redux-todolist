import {
  ADD_TODO_ITEM,
  CAHNGE_INPUT_VALUE,
  DELETE_TODO_ITEM,
  INIT_LIST_DATA
} from './actionType'

const defaultStore = {
  inputValue: '',
  list: []
}

// reducer可以接受store，但不可以修改store。所以需要先剩拷贝一份store再在这个拷贝的store上进行修改
export default (store = defaultStore, action) => {
  //初始化列表
  if (action.type === INIT_LIST_DATA) {
    const newState = JSON.parse(JSON.stringify(store))
    newState.list = action.value
    return newState
  }
  //改input数据
  if (action.type === CAHNGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(store))
    newState.inputValue = action.value
    return newState
  }
  //增todo_item
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(store))
    newState.list.push(action.value)
    newState.inputValue = ''
    return newState
  }
  //删todo_item
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(store))
    newState.list.splice(action.value, 1)
    return newState
  }

  return store
}
