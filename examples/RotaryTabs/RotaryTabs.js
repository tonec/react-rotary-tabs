import React, { Component } from 'react'
import { Tabs } from '../../src/components/'

class RotaryTabs extends Component {
  render () {
    const rotaryOpts = {
      cycles: 2,
      speed: 1000
    }

    return (
      <Tabs
        { ...this.props }
        rotary={true}
        rotaryOpts={rotaryOpts}
      />
    )
  }
}

export default RotaryTabs
