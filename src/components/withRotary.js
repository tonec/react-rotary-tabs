import React, { Component } from 'react'

const withRotary = (WrapperComponent) => {
  return class extends Component {

    render () {
      return <WrapperComponent { ...this.props } />
    }
  }
}

export default withRotary
