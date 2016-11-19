import React, { Component } from 'react'
import { Tabs } from '../../src/components/'
import { withRotary } from '../../src/addons/withRotary'

import './BasicTabs.scss'

@withRotary
class BasicTabs extends Component {
  render () {
    return (
      <Tabs { ...this.props }/>
    )
  }
}

export default BasicTabs
