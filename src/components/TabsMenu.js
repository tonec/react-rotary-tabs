import React from 'react'
import { TabsMenuItem } from './'

const TabsMenu = (props) => {
  return (
    <ul className='tabs-menu'>
      {props.data.map((item, index) => {
        return (
          <TabsMenuItem
            key={'menu-item-' + index}
            tabId={index}
            title={item.title}
            active={(props.activeTab === index)}
          />
        )
      })}
    </ul>
  )
}

export default TabsMenu
