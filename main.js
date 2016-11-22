import React, { Component } from 'react'
import { render } from 'react-dom'
import BasicTabs from './examples/BasicTabs/BasicTabs'
import RotaryTabs from './examples/RotaryTabs/RotaryTabs'
import axios from 'axios'

import './examples/styles/tabs.scss'

class Main extends Component {

  constructor (props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentWillMount () {

    axios.get('./examples/tabData.json')
      .then(response => {
        this.setState({
          data: response.data.tabs
        })
      })
      .catch(error => console.log(error))
  }

  render () {

    if (!this.state.data) {
      return <p>Loading</p>
    }

    return (
      <div>
        <h1>React Rotary Tabs</h1>

        <h2>Basic Tabs</h2>
        <BasicTabs
          data={this.state.data}
        />

        <h2>Rotary Tabs</h2>
        <RotaryTabs
          data={this.state.data}
        />

      </div>
    )
  }
}

render(<Main/>, document.getElementById('app'))
