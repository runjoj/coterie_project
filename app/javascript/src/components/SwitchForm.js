import React from 'react'

const SwitchForm = props => {

  return (
    <div>
      <p onClick={props.handleFunction} className="button form-button orange">{props.name}</p>
    </div>
  )
}

export default SwitchForm
