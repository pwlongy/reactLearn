import {ADDPERSON} from '../constant'

const initPerson = [{id: '001', name: '小明', age: 18}]

export default function PersonReducer(perState=initPerson, action){
  const {type, data} = action
  switch(type){
    case ADDPERSON:
      return [data, ...perState]
    default:
      return perState

  }
}