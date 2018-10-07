import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST } from './actionType'
import { initListData } from './actionCreators';

/**
 * saga里的generator函数去发送请求，获得数据后通过向actionCreator的方法中传入返回的数据创建一个action，
 * 然后这个action被put方法发送到store。
 */
function* getInitList() {
  try{
    const res = yield axios.get('./api/list.json');
    const action = initListData(res.data);
    yield put(action);  //put就等于store.dispatch
  } catch (e) {
    alert('todolist返回请求失败');
  }
}

function* todoSaga() {
  //当接受到GET_INIT_LIST这个action的时候，去执行getInitList方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSaga;