import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
  // 对于接收的props进行： 类型、必要性的限制
  static propTypes = {
    addToDO: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认' style={{width: '100%'}}/>
      </div>
    )
  }

  handleKeyUp = (event) => {
    if(event.keyCode === 13 && event.target.value !== ''){ 
      console.log(event.target.value, event.keyCode)
      this.props.addToDO({
        id: nanoid(),
        name: event.target.value,
        isChaeck: false
      })
      // 清空输入框数据
      event.target.value = ''
    }
  }
}
