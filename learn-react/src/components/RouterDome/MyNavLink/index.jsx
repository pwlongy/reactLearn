import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {

  render() {
    const {navLinkList} = this.props
    return (
      <div>
        {
          navLinkList.map((item,index) => {
            return <NavLink to={item.path} key={index}>{item.text}</NavLink>
          })
        }
      </div>
    )
  }
}
