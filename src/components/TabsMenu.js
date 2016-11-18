import React from 'react'
import { TabsMenuItem } from './'

const TabsMenu = (props) => {
  return (
    <ul className='tabs-menu'>
      {props.menuItems.map((item) => {
        return (
          <TabsMenuItem
            key={item.index}
            tabId={item.index}
            title={item.title}
          />
        )
      })}
    </ul>
  )
}

export default TabsMenu
