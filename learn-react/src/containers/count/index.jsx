/*
  react-redux的基本使用
    明确两个概念
      UI组件：不能使用任何redux的api，只负责页面的呈现，交互等
      容器组件：负责与redux通信，将结果交给UI组件
    如何创建一个容器组件------react-redux 和connect函数
      connect(mapStateToProps, mapDispatchTorops)(UI组件)
        mapStateToProps: 映射状态，返回值是一个对象
        mapDispatchToProps：映射的是操作状态的方法，返回值是一个对象
    备注： 容器组件中的store是依靠props传进去的，而不是容器组件直接引入
*/ 



// 引入Count的UI组件
import CountUI from '../../components/reduxDemo/ReduxAll'
import {createIncrementAction, createDecermentAction, createIncrementAsyncAction} from '../../redux/count_action_create'

// 引入connect用于连接UI组件的redux
import {connect} from 'react-redux'

/*
  mapStateToProps函数返回的是一个对象
  返回的对象中的key作为传递给UI组件Props的key，value就作为传递给UI组件props的value--------状态
  mapStateToProps用于传递状态
*/ 
function mapStateToProps(state){
  console.log(state,22222222233333)
  return {count: state.count}
}
/*
  mapDispatchToProps函数返回的是一个对象
  返回的对象中的key作为传递给UI组件Props的key，value就作为传递给UI组件props的value--------操作状态的方法
  mapDispatchToProps用于传递操作状态的方法
*/ 
function mapDispatchToProps(dispatch) {
  return {
    increment: (data) => {
      dispatch(createIncrementAction(data))
    },
    decerment: (data) => {
      dispatch(createDecermentAction(data))
    },
    AsyncIncrement: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time))
    }
  }
  
  // 简写方法
  // return {
  //   increment: createIncrementAction,
  //   decerment: createDecermentAction,
  //   AsyncIncrement: createIncrementAsyncAction
  // }
}

// 使用connect()()创建并暴露count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)