const defaultStore = {
  inputValue: '',
  list: []
}
// reducer可以接受store，但不可以修改store。所以需要先剩拷贝一份store再在这个拷贝的store上进行修改
export default (store = defaultStore, action) => {

  if(action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(store));
    newState.inputValue = action.value;
    return newState
  }
  
  if(action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(store));
    newState.list.push(action.value);
    newState.inputValue = '';
    return newState
  }

  return store;
}
