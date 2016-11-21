import React, { Component } from 'react'

const withRotary = (WrapperComponent) => {
  return class extends Component {

    constructor (props) {
      super(props)
      this.state = {
        activeTab: null
      }
    }

    initRotary (rotaryOpts) {
      this.setState({
        activeTab: rotaryOpts.initialActiveTab || 0
      })

      this.cycle(rotaryOpts)
    }

    cycle (rotaryOpts) {
      let count = rotaryOpts.cycles

      const timer = setInterval(() => {
        let nextActiveTab

        if (this.state.activeTab < this.props.data.length - 1) {
          nextActiveTab = this.state.activeTab + 1
        } else {
          nextActiveTab = 0
          count--
        }

        this.setState({
          activeTab: nextActiveTab
        })

        if (count === 0) {
          clearInterval(timer)
        }

      }, rotaryOpts.speed)
    }

    render () {
      return (
        <WrapperComponent
          { ...this.props }
          { ...this.state }
          initRotary={this.initRotary.bind(this)}
        />
      )
    }
  }
}

export default withRotary
