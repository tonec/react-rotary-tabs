import React, { Component } from 'react'
import { Tabs } from '../../src/components/'
import { withRotary } from '../../src/components/withRotary'

import './BasicTabs.scss'

@withRotary
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
