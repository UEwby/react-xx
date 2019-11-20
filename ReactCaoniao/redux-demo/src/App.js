import React, {Component} from 'react'
import './App.css'
import PropTypes from 'prop-types'
import Screen from "./components/screen/Screen"
import ControlPanel from "./components/control/ControlPanel"

class App extends Component {
  static childContextTypes = {
    title: PropTypes.string
  }
  // 提供子组件获取的方法
  getChildContext () {
    return {
      title: 'title'
    }
  }
  render() {
    return (
      <div className="App">
        <Screen/>
        <ControlPanel play='播放' stop='停止'/>
      </div>
    )
  }

}

export default App;
