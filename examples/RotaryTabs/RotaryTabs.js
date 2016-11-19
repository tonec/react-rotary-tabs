import React, { Component } from 'react'
import { Tabs } from '../../src/components/'

import './RotaryTabs.scss'

class RotaryTabs extends Component {
  render () {
    return (
      <Tabs { ...this.props } />
    )
  }
}

export default RotaryTabs
