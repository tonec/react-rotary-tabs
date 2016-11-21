import React, { Component } from 'react'
import { Tabs } from '../../src/components/'

class BasicTabs extends Component {
  render () {
    return (
      <Tabs
        className={'basic'}
        { ...this.props }
      />
    )
  }
}

export default BasicTabs
