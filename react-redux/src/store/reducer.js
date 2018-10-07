import {CHANGE_INPUT_VALUE , ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionType.js'

const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));

  if(action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  }

  if(action.type === ADD_TODO_ITEM) {
    if(newState.inputValue !== ''){
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    }
  }

  if(action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.value, 1);
    return newState;
  }

  return state;
}