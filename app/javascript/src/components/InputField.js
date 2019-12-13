import React from 'react'

const InputField = props => {
  return(
    <div>
      <label>{props.label}
        <input
          type={props.type}
          name={props.name}
          value={props.content}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default InputField;
