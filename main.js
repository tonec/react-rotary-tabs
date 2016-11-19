import React, { Component } from 'react'
import { render } from 'react-dom'
import BasicTabs from './examples/BasicTabs/BasicTabs'

import data from './examples/data'

class Main extends Component {

  constructor (props) {
    super(props)

    this.tabs = data
  }

  render () {
    return (
      <div>
        <h1>Auto-rotatable tabs</h1>

        <BasicTabs
          data={this.tabs}
        />

      </div>
    )
  }
}

render(<Main/>, document.getElementById('app'))
