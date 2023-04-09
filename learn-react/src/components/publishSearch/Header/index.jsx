import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Header extends Component {

  render() {
    return (
      <div className='header'>
        <h1>Search GitHub Users</h1>
        <input type='text' ref={c => this.keyWordElement = c}/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }

  // 点击搜索按钮
  search = () => {
    PubSub.publish('getInputText', this.keyWordElement.value)
    // this.props.searchAvartor(this.keyWordElement.value)
    // this.props.changeState({isState: 2})
  }


}
