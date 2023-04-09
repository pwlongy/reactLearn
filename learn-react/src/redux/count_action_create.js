/*
  该文件专门为Count组件生成action对象
*/ 
import {INCREMENT, DECERMENT} from './constant'
// import store from './store'

// 同步Action就是指action的值为Object类型的一般对象
export const createIncrementAction = (data) => ({type: INCREMENT, data})
export const createDecermentAction = (data) => ({type: DECERMENT, data})

// 异步Action就是指action的值为函数
export const createIncrementAsyncAction = (data, time) => {
  console.log(data, time, createIncrementAction(data))
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    },time)
  }
}