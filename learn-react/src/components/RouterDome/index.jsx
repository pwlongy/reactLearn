import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter} from 'react-router-dom'

import MyNavLink from './MyNavLink'


import Home from './Home'
import About from './About'

/*
  browserRouter与hashRouter的区别
    1. 底层实现原理不一样
      BrowserRouter使用的是H5的history API，不兼容IE9以及一下的版本。
      HashRouter使用的是URL的哈希值
    2. url表现形式不一样
      BrowserRouter的路径中没有#
      HashRouter的路径中包含#
    3. 刷新后对路由的state参数的影响
      BrowserRouter不会有任何影响，因为state保存在history中
      HashRouter刷新后会导致路由state参数丢失问题
*/ 

class RouterDemo extends Component {

  /*
    路由组件与一般组件的区别
      1. 写法不同
        一般组件: <Home/>
        路由组件：<route to="/home" component={Home}></route>
      2.存放位置不同
        一般组件： compoent
        路由组件：pages
      3. 接收到的props不同
        一般组件：写组件标签的时候传递什么，就能收到什么
        路由组件： 接收到三个固定的对象
          history
          local

  */ 
 state = {
  navLinkList : [
    {
      path: '/home',
      text: 'home'
    },{
      path: '/about',
      text: 'about'
    }
  ]
 }
  render() {
    const {navLinkList} = this.state
    return (
      <div className='routeBox'>
        <h1>React Router Demo</h1>
        <div className='contentBox' style={{display: 'flex'}}>
          <div className='left' style={{width: '300px', display: 'felx', flexDirection: 'column'}}>
            {/* <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link> */}

             {/*
              navLink 可以实现路由链接的高亮，通过activeClassName指定样式类名
              标签体内容是一个特殊的标签属性
              通过this.props.chrilder可以获取标签体内容
             */}
            {/* <NavLink activeClassName='active' to='/home'>Home</NavLink>
            <NavLink activeClassName='active' to='/about'>About</NavLink> */}

            <MyNavLink navLinkList={navLinkList}>彭伟</MyNavLink>
          </div>
          <div className='content' style={{flex: 1}}>
            {/* 
              switch
                通常情况下，path和component是一一对应的关系
                switch可以提高路由匹配效率
                switch匹配到需要的路由时就不会继续往下匹配了
            */}
            <Switch>
              {/* 
                路由的严格匹配与模糊匹配
                  1. 默认使用的是模糊匹配（输入的路径必须包含需要的【匹配路径】，且顺序要一致）
                  2. 开启严格匹配<Route  exact={true} path='/about' component={About}/>
                  3. 严格匹配不要随意开启，需要的时候在进行开启，有时候开启会导致无法继续匹配二级路由

              */}
              {/*  exact={true} 开启精准匹配路由 */}
              <Route  path='/about' component={About}/>
              <Route  path='/Home' component={Home}/>
              <Redirect to='/about'></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

// withRouter用于解决一般组件路由跳转问题因为路由跳转的功能只能在路由组件中使用，不可以在一般组件中使用，可以通过withRouter解决一般组件不能使用路由跳转的功能
// withRouter返回的是一个新组件
export default withRouter(RouterDemo)
