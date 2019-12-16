import React from 'react'
import { Link } from 'react-router-dom'

const ShowProfile = (props) => {
  return (
    <div className="profile-details">
      <div>
        <h3 className="profile-heading">Summary Details</h3>
      </div>
      <div className="summary-details">
        <h4 className="profile-name">{props.name}</h4>
        <p>Date of Birth: {props.birthday}</p>
        <p>Address: {props.address}</p>
        <p>Email: {props.email}</p>
        <p>Salary: {props.salary}</p>
        <p>Selected Coverage: {props.coverage}</p>
      </div>
      <Link to="/profiles">
          <button type="button" className="button orange back-button">BACK</button>
      </Link>
    </div>
  )
}

export default ShowProfile
