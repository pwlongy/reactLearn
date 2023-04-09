// import store from './redux/store'

import './App.css';
import TodoList from './components/TodoList'
import Search from './components/Search'
import PublishSearch from './components/publishSearch'
import RouterDemo from './components/RouterDome';
import AntComponent from './components/antComponent';
import ReduxDemo from './components/reduxDemo';
import ReduxConnect from './containers/count'
import Simplification from './components/reduxDemo/reduxsimplification'

function App() {
  return (
    <div className="App">
      <TodoList/>
      <Search/>
      <PublishSearch/>
      <RouterDemo/>
      <AntComponent/>
      <ReduxDemo/>
      {/* 给容器组件传递store */}
      {/* <ReduxConnect store={store}/> */}

      {/* 使用 provider 后不用每个容器组件都需要去传递store， provider会自动找到容器组件并且传递过去 */}
      <ReduxConnect/> 

      {/* 合并UI容器 */}
      <Simplification/>
    </div>
  );
}

export default App;
