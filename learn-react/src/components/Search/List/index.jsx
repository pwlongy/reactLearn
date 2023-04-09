import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {userList, isState} = this.props
    console.log(userList)
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
}
