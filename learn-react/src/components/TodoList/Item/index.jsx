import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {

  // 限制传递数据的类型
  static propTypes = {
    itemObj: PropTypes.object.isRequired,
    updataTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  state = {
    mouse : false
  }
  // 鼠标移入移出事件
  changemouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }
  // 修改选中状态数据
  handleCheck = (id) => {
    return (event) => {
      this.props.updataTodo(id, event.target.checked)
    }
  }

  deleteTodo = (id) => {
    return () => {
      console.log(id)
      if(window.confirm('确认删除吗')){
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const {itemObj} = this.props
    const {mouse} = this.state
    return (
      <div>
        <ul>
          <li style={{textAlign: "left", display: 'flex', justifyContent: 'space-between', background: mouse ? '#ddd' : ''}} 
            onMouseEnter={this.changemouse(true)}
            onMouseLeave={this.changemouse(false)}>
            <div>
              <input type='checkBox' checked={itemObj.isCheck} onChange={this.handleCheck(itemObj.id)}/> {itemObj.name}
            </div>
            <button style={{display: mouse ? 'block' :'none'}} onClick={this.deleteTodo(itemObj.id)}>删除</button>
          </li>
        </ul>
      </div>
    )
  }
}
