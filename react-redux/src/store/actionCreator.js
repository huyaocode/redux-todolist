import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionType.js'
/**
 * Action Creator 管理action的生成
 * 在组件道理上是不涉及逻辑的，它只是说某一个Button被点击了，
 * 具体到业务上怎么处理组件不负责，
 * 所以，组件是事件的命名为：某个部分发生了怎样的一个事情。
 * 而在Action Creator中，事件就要把他转为一个action派发出去。
 */

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getSubmitClickAction = () => ({
  type: ADD_TODO_ITEM
})

export const getItemClickAction = (index) => ({
  type: DELETE_TODO_ITEM,
  value: index
})