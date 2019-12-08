import React from 'react'

const ShowProfile = (props) => {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.birthday}</li>
      <li>{props.address}</li>
      <li>{props.email}</li>
      <li>{props.salary}</li>
      <li>{props.coverage}</li>
    </ul>
  )
}

export default ShowProfile
