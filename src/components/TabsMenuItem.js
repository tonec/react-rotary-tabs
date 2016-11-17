import React from 'react'

const TabsMenuItem = (props) => {
  return (
    <li data-menu-item-id={props.tabId}>
      {props.title}
    </li>
  )
}

export { TabsMenuItem }
