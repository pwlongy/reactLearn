import React, { Component } from 'react'
import pubsub from 'pubsub-js'
import axios from 'axios'
import './index.css'

export default class List extends Component {
  state = {
    userList: [],
    isState: 1, // 0 表示请求错误， 1表示还没有发送请求， 2 表示请求正在发送中 3 表示请求已经完成
  }

  // 当组件挂载完毕的时候进行消息订阅
  componentDidMount(){
    this.token = pubsub.subscribe('getInputText', (msg, data) => {
      this.setState({
        isState: 2
      })
      this.searchAvartor(data)
    })
  }

  // 当组件卸载时，取消订阅与发布
  componentWillUnmount(){
    pubsub.unsubscribe(this.token)
  }

  render() {
    const {userList, isState} = this.state
    return (
      <div className='itemList'>
        {
          // 通过使用三元表达式的形式去展示不同状态下显示的页面
          isState === 1 ? <h1>欢迎使用，请输入关键字后进行搜索</h1> :
          isState === 2 ? <h1>loading</h1> :
          isState === 0 ? <h1>接口请求错误</h1> :
          userList.length === 0 ? <h1>暂时无法搜索到你想找到的数据</h1> :
          userList.map(item => {
            return (
              <div className='item' key={item.node_id}>
                <img className='itemImg' alt='useracatar' src={item.avatar_url}/>
                <div>{item.login}</div>
              </div>
            )
          })
        }
        
      </div>
    )
  }

    // 接收input传递过来的数据
    searchAvartor = async (text) => {
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

        fetch(`https://api.github.com/search/users?q=${text}`)
         .then(
          response => {
            // fetch返回的数据表示的是接口有没有走通
            return response.json()
          },
          error => {
            // 中断后续promise
            return new Promise(() => {})
          }
         )
         .then(
          response => {
            console.log(response)
          },
          error => {

          }
         )

         // 优化featch函数
         fetch(`https://api.github.com/search/users?q=${text}`)
         .then(
          response => {
            // fetch返回的数据表示的是接口有没有走通
            return response.json()
          }
         )
         .then(
          response => {
            console.log(response)
          }
         )
         .catch(err => {
          console.log(err)
         })

         // 优化featch函数
         try{
          const response = await fetch(`https://api.github.com/search/users?q=${text}`)
          const data = await response.json()
          console.log(data)
         } catch (err){
          console.log(err)
         }
    }
  
    // 修改数据状态
    changeState = (isState) => {
      this.setState(
        isState
      )
    }
}
