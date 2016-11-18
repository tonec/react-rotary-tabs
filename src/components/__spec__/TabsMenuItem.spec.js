import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { TabsMenuItem } from '../'

describe('<TabsMenuItem />', () => {

  it('should inlude a li element', () => {
    const wrapper = shallow(<TabsMenuItem />)
    expect(wrapper.find('li')).to.have.length(1)
  })

  it('should have props for title and tab id', () => {
    const testTitle = 'Test title'
    const testTabId = 'test-tab-id'
    const wrapper = shallow(<TabsMenuItem tabId={testTabId} title={testTitle} />)
    expect(wrapper.props()['data-menu-item-id']).to.equal('test-tab-id')
    expect(wrapper.props().children).to.equal('Test title')
  })
})
