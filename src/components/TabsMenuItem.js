import React from 'react'
import cs from 'classnames'

const TabsMenuItem = (props) => {
  return (
    <li
      className={cs({ active: props.active })}
    >
      <a
        href=''
        onClick={props.handleClick}
        data-menu-item-id={props.tabId}
      >
        {props.title}
      </a>
    </li>
  )
}

export default TabsMenuItem
