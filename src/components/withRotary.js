import React, { Component } from 'react'

const withRotary = (WrapperComponent) => {
  return class extends Component {

    render () {
      const newProps = { rotatin: true }
      return <WrapperComponent { ...this.props } { ...newProps } />
    }
  }
}

export { withRotary }
