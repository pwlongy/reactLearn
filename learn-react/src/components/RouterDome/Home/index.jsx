import React, { Component } from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'

import Message from './Message'
import News from './News'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        我是Home内容
        
        <div className='tags'>
          <NavLink to='/home/news'>NewS</NavLink>
          <NavLink to='/home/message'>Message</NavLink>
        </div>

        <div className='content'>
          <Switch>
            <Route path='/home/news' component={News}></Route>
            <Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/news'></Redirect>
          </Switch>
        </div>

      </div>
    )
  }
}
