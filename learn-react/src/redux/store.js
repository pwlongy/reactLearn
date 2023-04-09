/*
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/ 
import {createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './count_redux'
import personReducer from './reducers/person'
import {composeWithDevTools} from 'redux-devtools-extension'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk' 

const allReducer = combineReducers({
  count: countReducer,
  person: personReducer
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

