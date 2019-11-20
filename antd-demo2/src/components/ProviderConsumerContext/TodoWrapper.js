import React, {Component} from "react"
import List from './List'
import {Provider} from "./context";

export default class TodoWrapper extends Component {
  state = {
    list: []
  }
  task = React.createRef()
  handleClick = () => {
    let list = [...this.state.list, this.task.current.value]
    this.setState({
      list: list
    })
    this.task.current.value = ''
  }
  deleteTask = (index) => {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <div>
        <Provider value={{deleteTask: this.deleteTask}}>
          <input type='text' ref={this.task}/>
          <button onClick={this.handleClick}> Add </button>
          <List list={this.state.list}/>
        </Provider>
      </div>
    )
  }
}