import React, { Component } from 'react'

class Tab extends Component {
  render () {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <div>
          {this.props.content}
        </div>
      </div>
    )
  }
}

export { Tab }
