import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { Tabs } from '../'
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

})
