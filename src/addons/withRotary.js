import React, { Component } from 'react'

const withRotary = (WrapperComponent) => {
  return class extends Component {

    constructor (props) {
      super(props)

      this.state = {
        rotating: true,
        numRotations: null
      }
    }

    componentWillMount () {
      this.rotaryEvents()
    }

    rotaryEvents () {
      this.rotary = {
        next: function () {
          // console.log('rrs: ', this.state)
        }
      }
    }

    render () {
      return (
        <WrapperComponent
          { ...this.props }
          { ...this.state }
          rotary={this.rotary}
        />
      )
    }
  }
}

export { withRotary }
