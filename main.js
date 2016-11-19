import React, { Component } from 'react'
import { render } from 'react-dom'
import BasicTabs from './examples/BasicTabs/BasicTabs'
import RotaryTabs from './examples/RotaryTabs/RotaryTabs'

import data from './examples/data'

import './examples/styles/tabs.scss'

class Main extends Component {

  constructor (props) {
    super(props)

    this.tabs = data
  }

  render () {
    return (
      <div>
        <h1>React Rotary Tabs</h1>

        <h2>Basic Tabs</h2>
        <BasicTabs
          data={this.tabs}
        />

        <h2>Rotary Tabs</h2>
        <RotaryTabs
          data={this.tabs}
        />

      </div>
    )
  }
}

render(<Main/>, document.getElementById('app'))
