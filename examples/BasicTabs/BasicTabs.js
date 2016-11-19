import React, { Component } from 'react'
import { Tabs } from '../../src/components/'

import './BasicTabs.scss'

class BasicTabs extends Component {
  render () {
    return (
      <Tabs
        data={this.props.data}
      />
    )
  }
}

export default BasicTabs
