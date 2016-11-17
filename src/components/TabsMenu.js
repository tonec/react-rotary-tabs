import React from 'react'
import { TabsMenuItem } from './'

const TabsMenu = (props) => {
  // console.log(props)
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return <TabsMenuItem key={index} title={item} />
      })}
    </ul>
  )
}

export { TabsMenu }
