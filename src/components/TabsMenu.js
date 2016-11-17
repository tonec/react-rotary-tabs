import React from 'react'
import { TabsMenuItem } from './'

const TabsMenu = (props) => {
  return (
    <ul>
      {props.menuItems.map((item) => {
        return (
          <TabsMenuItem
            key={item.index}
            title={item.title}
          />
        )
      })}
    </ul>
  )
}

export { TabsMenu }
