import React, { Component, PropTypes } from 'react'
import { TabsMenu, Tab } from './'

class Tabs extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeTab: this.props.activeTab,
      contentItems: []
    }
  }

  componentWillMount () {

    if (!this.props.data) return

    const contentItems = this.props.data.map((tab, index) => {
      return {
        index: index,
        content: tab.content
      }
    })

    this.setState({
      contentItems: contentItems
    })
  }

  componentDidMount () {
    if (this.props.rotary) {
      this.props.initRotary(this.props.rotaryOpts)
    }
  }

  componentWillReceiveProps (newProps) {
    if (this.props.rotary && newProps.activeTab !== this.state.activeTab) {
      this.setState({
        activeTab: newProps.activeTab
      })
    }
  }

  handleClick (e) {
    const targetTab = Number.parseInt(e.target.getAttribute('data-menu-item-id'))

    if (isNaN(targetTab)) return

    this.setState({ activeTab: targetTab })
  }

  renderTabsMenu (data, activeTab) {
    return (
      <TabsMenu
        data={data}
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
        {this.renderTabsMenu(this.props.data, this.state.activeTab)}
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
