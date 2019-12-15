import React from 'react'

const SelectField = props => {
  return(
    <div>
      <label>{props.label}
        <select value={props.value} onChange={props.handleChange}>
          <option value="5000">5,000</option>
          <option value="10000">10,000</option>
          <option value="15000">15,000</option>
          <option value="20000">20,000</option>
        </select>
      </label>
    </div>
  )
}

export default SelectField;
