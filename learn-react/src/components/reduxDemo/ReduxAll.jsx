import React, { Component } from 'react'
export default class ReduxDemo extends Component {
  render() {
    const {count} = this.props
    return (
      <div>
        <h1>当前总计数为： {count}</h1>
        <select ref={c => this.selectValue = c}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.incrementIfOdd}>基数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }

  componentDidMount() {
    // 检测redux中状态的变化，只要变化，就调用render
    // store.subscribe(() => {
    //   console.log(111111)
    //   this.setState({})
    // }) 
  }

  decrement = () => {
    console.log(this.props)
    // 获取选中的数据
    const {value} = this.selectValue
    // 通知store更改数据
    this.props.decerment(value*1)
  }

  increment = () => {
    // 获取选中的数据
    const {value} = this.selectValue
    // 通知store更改数据
    this.props.increment(value*1)
  }

  //基数加
  incrementIfOdd = () => {
    const {value} = this.selectValue
    const {count} = this.props
    if(count % 2 !== 0){
      this.props.increment(value*1)
    }

  }

  // 异步添加
  incrementAsync = () => {
    const {value} = this.selectValue
    this.props.AsyncIncrement(value*1, 500)
      
  }
}
