import React from 'react'

const Tab = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <div>
        {props.content}
      </div>
    </div>
  )
}

export { Tab }
