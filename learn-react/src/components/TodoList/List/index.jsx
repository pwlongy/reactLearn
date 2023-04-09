import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

import './index.css'
export default class List extends Component {
static propTypes = {
  todoList: PropTypes.array.isRequired,
  updataTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
  render() {
    // 获取父组件传递过来的数据
    const {todoList, updataTodo, deleteTodo} = this.props
    return (
      <div>
        {
           todoList.map(itemObj =>{
            return <Item key={itemObj.id} itemObj={itemObj} updataTodo={updataTodo} deleteTodo={deleteTodo}/>
           })
        }
       
      </div>
    )
  }
}
