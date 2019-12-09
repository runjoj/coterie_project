import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div className="profile-tile">
      <Link to={`/profiles/${props.id}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default Profile
