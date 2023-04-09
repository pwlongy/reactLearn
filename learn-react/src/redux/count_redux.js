/*
  该文件用于创建一个Count组件服务的reducer，reducer本质上是一个函数
  reducer函数会接收到两个参数，分别是：之前的状态（preState）,对象动作（active）
*/ 
import {INCREMENT, DECERMENT} from './constant'

const initState = 0
export default function countRedux(preState = initState, action){
  // 从action对象中获取： type: date
  const {data, type} = action

  // 根据状态决定如何加工数据
  switch(type){
    case INCREMENT:
      return preState + data
    case DECERMENT:
      return preState - data
    default:
      return preState
  }

}