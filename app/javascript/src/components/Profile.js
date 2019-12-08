import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {
  return (
    <div>
      <Link to={`/profiles/${props.id}`}>
        <li>
          {props.name}
        </li>
      </Link>
    </div>
  )
}

export default Profile
