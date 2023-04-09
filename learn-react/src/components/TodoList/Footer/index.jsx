import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  // 约束传递过来的数据
  static propTypes = {
    todoList: PropTypes.array.isRequired
  }

  // 计算有多少个选中的状态
  // getTodoListNum = () => {
  //   const {todoList} = this.props
  //   let isCheckNum = 0
  //   todoList.forEach(itemObj => {
  //     if(itemObj.isCheck){
  //       isCheckNum++
  //     }
  //   })
  //   return isCheckNum
  // }

  // 修改全部选中状态
  changeAllIsCheck = (event) => {
    this.props.changeAllIsCheck(event.target.checked)
  }

  // 清除已完成选项
  deteleisCheck =() => {
    this.props.deteleisCheck()
  }

  render() {
    const {todoList} = this.props

    // 计算有多少个已选中状态
    const isCheckNum = todoList.reduce((pre, todoItem) => pre + (todoItem.isCheck ? 1 : 0), 0)
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <input onChange={this.changeAllIsCheck} type='checkBox' checked={isCheckNum === todoList.length && todoList.length ? true : false}/>已完成{isCheckNum}/全部{todoList.length}
        </div>
        <button onClick={this.deteleisCheck}>清除已完成任务</button>
      </div>
    )
  }
}
