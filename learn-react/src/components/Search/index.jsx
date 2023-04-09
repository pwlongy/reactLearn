import React, { Component } from 'react'
import axios from 'axios'

import Header from './Header'
import List from './List'

export default class index extends Component {
  state = {
    userList: [],
    isState: 1, // 0 表示请求错误， 1表示还没有发送请求， 2 表示请求正在发送中 3 表示请求已经完成
  }

  render() {
    const {userList, isState} = this.state
    return (
      <div>
        <Header searchAvartor={this.searchAvartor} changeState={this.changeState}/>
        <List userList={userList} isState={isState}/>
      </div>
    )
  }

  // 接收input传递过来的数据
  searchAvartor = (text) => {
    axios.get(`https://api.github.com/search/users?q=${text}`)
      .then(
        response => {
          console.log('成功',response)
          this.setState({
            userList: response.data.items,
            isState: 3
          })
        },
        error => {
          console.log(error)
          this.setState({
              isState: 0
            })
        }
      )
  }

  // 修改数据状态
  changeState = (isState) => {
    this.setState(
      isState
    )
  }
}
