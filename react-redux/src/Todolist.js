import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import {
  getInputChangeAction,
  getSubmitClickAction,
  getItemClickAction
} from './store/actionCreator'

const Todolist = props => {
  const {
    list,
    inputValue,
    handleInputChange,
    handleSubmitClick,
    handleItemClick
  } = props

  return (
    <div style={{ width: '100%', margin: '30px' }}>
      <Input
        style={{ width: '300px', marginRight: '20px' }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="primary" onClick={handleSubmitClick}>
        提交
      </Button>
      <List
        style={{ width: '300px', marginTop: '20px' }}
        bordered
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={handleItemClick.bind(null, index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

/**
 * 与stroe的连接规则。
 * 把Store里面是数据映射到组件的props上
 * 所以组件中全部使用this.props而不是this.state
 * @param {*} state store里的数据
 */
const mapStateToProps = state => {
  return {
    //将store里面的inputValue映射到props里面的inputValue
    inputValue: state.inputValue,
    list: state.list
  }
}
/**
 * 把方法挂载的组件的props上，并把store.dispatch映射给组件方法
 * 在这里就使得dispatch可以直接在函数内部使用
 * @param {*} dispatch 相当于store.dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    //input框输入内容
    handleInputChange(e) {
      dispatch(getInputChangeAction(e.target.value))
    },
    //点击提交
    handleSubmitClick() {
      dispatch(getSubmitClickAction())
    },
    //删除item
    handleItemClick(index) {
      dispatch(getItemClickAction(index))
    }
  }
}

// connect做连接。下面这句话含义是让Todolist组件与store进行连接
// Todolist是一个UI组件，但使用connect连接了状态与方法后这个被导出的组件就是一个容器组件了
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
