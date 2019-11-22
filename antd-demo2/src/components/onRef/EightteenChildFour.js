import React, {Component} from "react";
export default class EightteenChildFour extends Component {
  state = {
    name: '这是组件EightteenChildFour的name值'
  }

  componentDidMount () {
    this.props.onRef(this)
    console.log(this)
  }
  click = () => {
    this.setState({name:'这是组件click 方法改变EightteenChildFour改变的name 值'})
  }
  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.click}>
          点击改变组件EightteenChildFour的name 值
        </button>
      </div>
    )
  }
}