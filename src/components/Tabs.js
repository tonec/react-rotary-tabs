import React, { Component, PropTypes } from 'react'
import { TabsMenu, Tab } from './'

class Tabs extends Component {

  constructor (props) {
    super(props)
    const { data, activeTab } = this.props

    this.state = {
        menuItems: data.map(tab => tab.title),
        contentItems: data.map(tab => tab.content),
        activeTab: activeTab
    }
  }

  render () {
    return (
      <div>
        <TabsMenu
          menuItems={this.state.menuItems}
        />
        <Tab
          contentItems={this.state.contentItems}
        />
      </div>
    )
  }
}

Tabs.propTypes = {
  data: PropTypes.array,
  activeTab: PropTypes.number
}

Tabs.defaultProps = {
  activeTab: 0
}

export { Tabs }
