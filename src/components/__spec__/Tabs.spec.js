import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { Tabs, Tab, TabsMenu } from '../'
import data from '../../../test/data'

describe('<Tabs/>', () => {

  it('should have a sensible default for activeTab which must be a number', () => {
    const wrapper = mount(<Tabs />)
    expect(wrapper.prop('activeTab')).to.be.a('number')
  })

  it('should accept a property to change the activeTab', () => {
    const wrapper = mount(<Tabs activeTab={1} />)
    expect(wrapper.prop('activeTab')).to.equal(1)
    expect(wrapper.prop('activeTab')).to.not.equal(0)
  })

  it('should have an initial state equal to the activeTab property', () => {
    const wrapper = mount(<Tabs activeTab={1} />)
    expect(wrapper.state().activeTab).to.equal(1)
  })

  it('should contain a TabMenu', () => {
    const wrapper = mount(<Tabs data={data} />)
    expect(wrapper.find(TabsMenu)).to.have.length(1)
  })

  it('should contain a Tab', () => {
    const wrapper = mount(<Tabs data={data} />)
    expect(wrapper.find(Tab)).to.have.length(1)
  })

})
