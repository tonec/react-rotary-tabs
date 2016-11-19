import React, { Component } from 'react'

const withRotary = (WrapperComponent) => {
  return class extends Component {

    constructor (props) {
      super(props)

      this.state = {
        rotating: true
      }
    }

    render () {
      const newProps = { rotatin: true }
      return <WrapperComponent { ...this.props } { ...newProps } />
    }
  }
}

export { withRotary }
