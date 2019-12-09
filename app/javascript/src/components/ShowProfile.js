import React from 'react'

const ShowProfile = (props) => {
  return (
    <div className="profile-details">
      <div>
        <h3 className="profile-heading">Your Summary Details</h3>
        <h4 className="profile-name">{props.name}</h4>
      </div>
      <div>
        <p>Date of Birth: {props.birthday}</p>
        <p>Address: {props.address}</p>
        <p>Email: {props.email}</p>
        <p>Salary: {props.salary}</p>
        <p>Selected Coverage: {props.coverage}</p>
      </div>
    </div>
  )
}

export default ShowProfile
