import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { Tab } from '../'

describe('<Tab />', () => {

  const currentContent = {
    index: 0,
    content: 'Test content'
  }

  it('should include a div element', () => {
    const wrapper = shallow(<Tab contentData={currentContent} />)
    expect(wrapper.find('div')).to.be.length(1)
  })

  it('should render the correct content', () => {
    const wrapper = shallow(<Tab contentData={currentContent} />)
    expect(wrapper.childAt(0).text()).to.equal(currentContent.content)
  })
})
