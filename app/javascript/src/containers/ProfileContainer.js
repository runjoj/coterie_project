import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProfileFormContainer from './ProfileFormContainer'
import Profile from '../components/Profile'
import { getProfile } from '../modules/profiles'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProfile()
  }

  render() {
    let displayProfiles = this.props.allProfiles.map((profile) => {
      let id = profile.id
      let name = profile.name

      return (
        <Profile
          key={id}
          id={id}
          name={name}
        />
      )
    })
    return (
      <div>
        <ul>
          {displayProfiles}
        </ul>
        <ProfileFormContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allProfiles: state.profiles.allProfiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(getProfile())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
