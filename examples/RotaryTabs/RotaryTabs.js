import React, { Component } from 'react'
import { Tabs } from '../../src/components/'
import withRotary from '../../src/addons/withRotary'

@withRotary
class RotaryTabs extends Component {
  render () {
    const rotaryOpts = {
      cycles: 2,
      speed: 5000,
      initialActiveTab: 0
    }

    return (
      <Tabs
        { ...this.props }
        rotary={true}
        rotaryOpts={rotaryOpts}
        className={'rotary'}
      />
    )
  }
}

export default RotaryTabs
