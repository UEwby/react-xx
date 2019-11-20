import React, { Component } from 'react'
import PropTypes from "prop-types"
import { Button } from "antd"
export default class EightteenChildOne extends Component{
  static propTypes = {
    name: PropTypes.string
  }
  click = () => {
    // 通过触发方法子传父
    this.props.eightteenChildOneToFather("这是 props 改变父元素的值")
  }
  render() {
    return (
      <div>
        <div>这是通过 props 传入的值{this.props.name}</div>
        <Button type='primary' onClick={this.click}>点击改变父元素值</Button>
        <span>
          <br/>{this.props.date}
          <br/>{this.props.unit}
        </span>
      </div>
    );
  }
}