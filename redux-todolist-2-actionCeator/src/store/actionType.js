/**
 * redux的action事件是用字符串命名的，当我们把aciton的变量名拼写错误的时候就会出现点了但没反应的情况，
 * 但是控制台里得不到任何的报错信息。如果我们使用一个常量来定义action名的话一旦出现拼写错误就会报错，
 * 这样就可以避免因为action名写错而得不到报错信息的情况。
 */

export const ADD_TODO_ITEM = 'add_todo_item';

export const CAHNGE_INPUT_VALUE = 'change_input_value';

export const DELETE_TODO_ITEM = 'delete_todo_item';

export const INIT_LIST_DATA = 'init_list_data';