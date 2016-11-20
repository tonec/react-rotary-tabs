import React, { Component, PropTypes } from 'react'
import { TabsMenu, Tab } from './'

class Tabs extends Component {

  constructor (props) {
    super(props)
    this.state = {
      activeTab: this.props.initialActiveTab
    }
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

  renderTab (data, activeTab) {
    const currentContent = data.filter((item, index) => index === activeTab)[0]
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
        {this.renderTab(this.props.data, this.state.activeTab)}
      </div>
    )
  }
}

Tabs.propTypes = {
  data: PropTypes.array,
  initialActiveTab: PropTypes.number
}

Tabs.defaultProps = {
  initialActiveTab: 0
}

export default Tabs
