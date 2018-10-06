import React from 'react'
import { Input, Button, List } from 'antd'

/**
 * UI组件（傻瓜组件）一般可以改写为下面的函数的形式，也就是【无状态组件】
 * 抽出UI组建，让视图与控制分离
 */
const TodolistUI = props => {
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
          <List.Item
            onClick={() => {
              handleItemClick(index)
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodolistUI
