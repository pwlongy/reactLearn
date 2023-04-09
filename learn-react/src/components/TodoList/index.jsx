import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import List from './List'

export default class index extends Component {

  state = {
    todoList: [
      {
        id: '001',
        name: '吃饭',
        isCheck: true
      },{
        id: '002',
        name: '睡觉',
        isCheck: true
      },{
        id: '003',
        name: '敲代码',
        isCheck: true
      },
    ]
  }
  // 用于添加一个todo，添加的参数是一个对象
  addToDo = (todoObj) => {
    console.log(todoObj)
    // 获取元对象的数据
    const {todoList} = this.state
    // 追加一个对象
    let newToDoObj = [todoObj ,...todoList] 
    this.setState({
      todoList: newToDoObj
    })
  }

  // 修改todo列表的状态
  updataTodo = (id, isCheck) => {
    console.log(id, isCheck)
    const {todoList} = this.state
    const newTodo = todoList.map(itemObj => {
      if(itemObj.id === id){
        return {...itemObj, isCheck: isCheck}
      }else{
        return itemObj
      }
    })
    console.log(newTodo)
    this.setState({
      todoList: newTodo
    })
  }

  // 删除todo列表的中的某一项
  deleteTodo = (id) => {
    const {todoList} = this.state
    let newTodo = todoList.filter(itemobj => {
      return itemobj.id !== id
    })
    this.setState({
      todoList: newTodo
    })
  }

  // 修改全部选中状态
  changeAllIsCheck = (isCheck) => {
    const {todoList} = this.state
    const newTodo = todoList.map(itemObj => {
      return {...itemObj, isCheck : isCheck}
    })
    this.setState({
      todoList: newTodo
    })
  }

  // 清除已完成任务
  deteleisCheck = () => {
    const {todoList} = this.state
    const newTodo = todoList.filter(itemObj => {
      return !itemObj.isCheck
    })
    this.setState({
      todoList: newTodo
    })
  }


  render() {
    const {todoList} = this.state
    return (
      <div className='TodoList' style={{border: '1px solid #eee', padding: '10px', width: '800PX', margin: '40px auto'}}>
        <Header addToDO={this.addToDo}/>
        <List todoList={todoList} updataTodo={this.updataTodo} deleteTodo={this.deleteTodo}/>
        <Footer todoList={todoList} changeAllIsCheck={this.changeAllIsCheck} deteleisCheck={this.deteleisCheck}/>
      </div>
    )
  }
}

