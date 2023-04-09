import React, { Component } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import MessageDetail from './MessageDetail'

export default class Message extends Component {
state = {
  messageArr: [
    {
      id: 1,
      title: 'message1',
      content: '去年今日此门中，人面挑花相映红。人面不知何处去，桃花依旧笑春风。'
    },{
      id: 2,
      title: 'message2',
      content: '去年今日此门中，人面挑花相映红。人面不知何处去，桃花依旧笑春风。'
    },{
      id: 3,
      title: 'message3',
      content: '去年今日此门中，人面挑花相映红。人面不知何处去，桃花依旧笑春风。'
    },
  ]
}

  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(item => {
              // 向路由组件传递派人parmes参数
              // return <li key={item.id}><Link to={`/home/message/messageDetail/${item}`}>{item.title}</Link></li>

              // 向路由组件传递search参数
              // return <li key={item.id}><Link to={`/home/message/messageDetail?obj=${item}`}>{item.title}</Link></li>

              // 向组件传递state参数
               return <li key={item.id}><Link to={{pathname: '/home/message/messageDetail', state: {obj: item}}}>{item.title}</Link></li>
            })
          }
        </ul>

        <div>
          <Switch>
            {/* 向路由组件传递派人parmes参数
              声明接收params参数
            */}
            {/* <Route path='/home/message/messageDetail/:obj' component={MessageDetail}></Route> */}

            {/* 
              声明接收search参数
              search无需声明接收，正常注册路由即可
            */}
            {/* <Route path='/home/message/messageDetail' component={MessageDetail}></Route> */}

            {/* 
              向路由组件传递state参数
              state无需声明接收，正常注册路由即可

              在路由中添加replace可以实现替换功能，使得不会记录在路由历史中
              <Route replace path='/home/message/messageDetail' component={MessageDetail}></Route>
            */}
            <Route path='/home/message/messageDetail' component={MessageDetail}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
