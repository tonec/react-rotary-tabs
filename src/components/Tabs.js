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
      this.cycleTabs()
    }
  }

  cycleTabs () {
    let count = this.props.rotaryOpts.cycles

    const timer = setInterval(() => {
      let nextActiveTab

      if (this.state.activeTab < this.state.contentItems.length - 1) {
        nextActiveTab = this.state.activeTab + 1
      } else {
        nextActiveTab = 0
        count--
      }

      this.setState({
        activeTab: nextActiveTab
      })

      if (count === 0) {
        clearInterval(timer)
      }

    }, this.props.rotaryOpts.speed)
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
