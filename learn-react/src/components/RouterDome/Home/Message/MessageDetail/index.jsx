import React, { Component } from 'react'
// import qs from 'querystring'

export default class index extends Component {
  render() {
    // 接收params参数
    // const obj = this.props.match.params

    // 接收search参数
    // const {search} = this.props.location
    // const obj = qs.parse(search.slice(1))

    // 接收state参数
    const {state} = this.props.location
    console.log(state, this.props,2222222)

    return (
      <div>
        <ul>
          <li>ID: {state.obj.id}</li>
          <li>Title:{state.obj.title}</li>
          <li>Content:{state.obj.content}</li>
        </ul>
      </div>
    )
  }
}
