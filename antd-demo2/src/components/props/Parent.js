import React, { Component } from 'react'
import EightteenChildOne from "./EightteenChildOne";
export default class Parent extends Component{
  constructor(props) {
    super(props)
    this.state = {
      mode: '',
      date: '2019-11-20',
      unit: 'props',
      name: 'props 传入的 name 值'
    }
  }
  componentDidMount() {
  }

  eightteenChildOneToFather = (mode) => {
    this.setState({mode: mode})
  }
  render() {
    const {mode, date, unit, name} = this.state
    return (
      <div>
        <EightteenChildOne {...{mode, date, unit, name}} eightteenChildOneToFather={(mode)=>this.eightteenChildOneToFather(mode)}></EightteenChildOne>
        <span>{this.state.mode}</span>
      </div>
    );
  }
}