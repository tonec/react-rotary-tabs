import React, { Component, PropTypes } from 'react'
import { TabsMenu, Tab } from './'

class Tabs extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeTab: this.props.activeTab,
      menuItems: [],
      contentItems: []
    }
  }

  componentWillMount () {

    if (!this.props.data) return

    const menuItems = this.props.data.map((tab, index) => {
        return {
          index: index,
          title: tab.title
        }
    })

    const contentItems = this.props.data.map((tab, index) => {
      return {
        index: index,
        content: tab.content
      }
    })

    this.setState({
      menuItems: menuItems,
      contentItems: contentItems
    })
  }

  handleClick (e) {
    const targetTab = Number.parseInt(e.target.getAttribute('data-menu-item-id'))

    if (isNaN(targetTab)) return

    this.setState({ activeTab: targetTab })
  }

  renderTabsMenu (menuItems, activeTab) {
    return (
      <TabsMenu
        menuItems={menuItems}
        activeTab={activeTab}
      />
    )
  }

  renderTab (contentItems, activeTab) {
    const currentContent = contentItems.filter((item) => item.index === activeTab)[0]
    return (
      <Tab
        contentData={currentContent}
      />
    )
  }

  render () {
    return (
      <div className='tabs' onClick={this.handleClick.bind(this)}>
        {this.renderTabsMenu(this.state.menuItems, this.state.activeTab)}
        {this.renderTab(this.state.contentItems, this.state.activeTab)}
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

export default Tabs
