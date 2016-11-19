import React, { Component } from 'react'
import { Tabs } from '../../src/components/'

import './BasicTabs.scss'

class BasicTabs extends Component {
  render () {
    return (
      <Tabs { ...this.props } />
    )
  }
}

export default BasicTabs
