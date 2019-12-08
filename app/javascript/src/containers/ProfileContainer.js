import React, { Component } from 'react'

import ProfileFormContainer from './ProfileFormContainer'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProfiles()
  }

  render() {
    let profiles = this.props.allProfiles.map((profile) => {
      let name = profile.name

      return (
        <Profile
          key={id}
          name={name}
        />
      )
    })
    return (
      <div>
        <ul>
          {profiles}
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
    allProfiles: () => dispatch(getProfiles())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
