import React, {Component} from "react";
import EightteenChildFour from "./EightteenChildFour";
export default class Eighteen extends Component{

  eightteenChildFourRef = (ref) => {
    console.log('eightteenChildFour的Ref值为')
    console.log(ref)

    ref.click()
  }
  render(){
    return (
      <div>
        <EightteenChildFour onRef={this.eightteenChildFourRef}/>
      </div>
    );
  }
}