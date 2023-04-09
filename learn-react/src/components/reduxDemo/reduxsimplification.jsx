import React, { Component } from 'react'
// 引入store
import {createIncrementAction, createDecermentAction, createIncrementAsyncAction} from '../../redux/count_action_create'
import {connect} from 'react-redux'


class ReduxSimplification extends Component {
  render() {
    return (
      <div>
        <h1>当前总计数为： {this.props.count}</h1>
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
    // 获取选中的数据
    const {value} = this.selectValue
    // 通知store更改数据
    // store.dispatch({
    //   type: 'decrement',
    //   data: value
    // })
    // store.dispatch(createDecermentAction(value))
    this.props.decrement(value*1)
  }

  increment = () => {
    // 获取选中的数据
    const {value} = this.selectValue
    // 通知store更改数据
    // store.dispatch({
    //   type: 'increment',
    //   data: value*1
    // })
    // store.dispatch(createIncrementAction(value*1))
    this.props.increment(value*1)
  }

  //基数加
  incrementIfOdd = () => {
    const {value} = this.selectValue
    const {count} = this.props

    if(count % 2 !== 0){
      // store.dispatch({
      //   type: 'increment',
      //   data: value*1
      // })
      
      // store.dispatch(createIncrementAction(value*1))
      this.props.increment(value*1)
    }
  }

  // 异步添加
  incrementAsync = () => {
    const {value} = this.selectValue
    // store.dispatch(createIncrementAsyncAction(value*1, 500))
    this.props.AsyncIncrement(value*1, 500)
    // setTimeout(() => {
    //   // store.dispatch({
    //   //   type: 'increment',
    //   //   data: value*1
    //   // })
      
    //   store.dispatch(createIncrementAction(value*1))
    // }, 1000)
      
  }
}

export default connect(
  state => ({count: state.count}),
  {
    increment: createIncrementAction,
    decrement: createDecermentAction,
    AsyncIncrement: createIncrementAsyncAction
  }
)(ReduxSimplification)