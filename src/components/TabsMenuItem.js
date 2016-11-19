import React from 'react'
import cs from 'classnames'

const TabsMenuItem = (props) => {
  return (
    <li
      className={cs({ active: props.active })}
      data-menu-item-id={props.tabId}
    >
      {props.title}
    </li>
  )
}

export default TabsMenuItem
