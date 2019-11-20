import React from 'react'
import {Consumer} from './context'

export default class List extends React.Component{

  render() {
    const { list } = this.props
    return (
      <Consumer>
        {
          ({ deleteTask }) => {
            return list.map((item, index) => {
              return (
                <li key={item + index}>
                  { item }
                  <button onClick={()=>{deleteTask(index)}}> delete </button>
                </li>
              )
            })
          }
        }
      </Consumer>
    );
  }
}