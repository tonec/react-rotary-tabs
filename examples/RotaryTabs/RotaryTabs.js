import React, { Component } from 'react'
import { Tabs } from '../../src/components/'

class RotaryTabs extends Component {
  render () {
    return (
      <Tabs { ...this.props } />
    )
  }
}

export default RotaryTabs
