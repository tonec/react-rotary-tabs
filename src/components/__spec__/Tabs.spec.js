import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { Tabs, Tab, TabsMenu } from '../'

describe('<Tabs/>', () => {

  const data = [
    { title: 'Tab 1 title', content: 'Tab 1 content.' },
    { title: 'Tab 2 title', content: 'Tab 2 content.' },
    { title: 'Tab 3 title', content: 'Tab 3 content.' },
    { title: 'Tab 4 title', content: 'Tab 4 content.' }
  ]

  it('should have a sensible default for activeTab which must be a number', () => {
    const wrapper = mount(<Tabs data={data} activeTab={1} />)
    expect(wrapper.state('activeTab')).to.be.a('number')
  })

  it('should accept a property to change the activeTab', () => {
    const wrapper = mount(<Tabs data={data} activeTab={1} />)
    expect(wrapper.prop('activeTab')).to.equal(1)
    expect(wrapper.prop('activeTab')).to.not.equal(0)
  })

  it('should have an initial state equal to the activeTab property', () => {
    const wrapper = mount(<Tabs data={data} activeTab={1} />)
    expect(wrapper.state().activeTab).to.equal(1)
  })

  it('should contain a correctly rendered menu', () => {
    const wrapper = mount(<Tabs data={data} />)
    expect(wrapper.find(TabsMenu)).to.have.length(1)
    expect(wrapper.find(TabsMenu).find('li')).to.have.length(4)
    expect(wrapper.find(TabsMenu).childAt(0).text()).to.equal(data[0].title)
  })

  it('should contain a correctly rendered Tab', () => {
    const wrapper = mount(<Tabs data={data} activeTab={1} />)
    expect(wrapper.find(Tab)).to.have.length(1)
    expect(wrapper.find(Tab).text()).to.equal(data[1].content)
  })

  it('should update the tab when a menu item is clicked', () => {
    const wrapper = mount(<Tabs data={data} />)
    wrapper.find(TabsMenu).childAt(2).simulate('click')
    expect(wrapper.state('activeTab')).to.equal(2)
    expect(wrapper.find(TabsMenu).find('li').at(2).hasClass('active')).to.equal(true)
    expect(wrapper.find(Tab).text()).to.equal(data[2].content)
  })
})
