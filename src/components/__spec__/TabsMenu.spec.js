import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import { TabsMenu } from '../'

describe('<TabsMenu />', () => {

  const menuItemArray = [
    { index: 0, title: 'Title 1' },
    { index: 1, title: 'Title 2' }
  ]

  it('should include a ul element', () => {
    const wrapper = shallow(<TabsMenu menuItems={menuItemArray} />)
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it('should render the correct menu items', () => {
    const wrapper = mount(<TabsMenu menuItems={menuItemArray} />)
    expect(wrapper.find('li')).to.have.length(2)
    expect(wrapper.childAt(0).text()).to.equal(menuItemArray[0].title)
    expect(wrapper.childAt(1).text()).to.equal(menuItemArray[1].title)
  })
})
