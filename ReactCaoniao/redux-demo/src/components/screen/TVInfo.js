import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class TVInfo extends Component{
  static contextTypes: {
    title: PropTypes.string
  }
  render() {
    const {title} = this.context
    return (
      <div className='tv-info'>
        {title}
      </div>
    );
  }
}