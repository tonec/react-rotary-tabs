import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tabs } from './components/'

import data from './data'

class App extends Component {

  constructor (props) {
    super(props)

    this.tabs = data
  }

  render () {
    return (
      <div>
        <h1>Auto-rotatable tabs</h1>

        <Tabs
          data={this.tabs}
        />

      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
