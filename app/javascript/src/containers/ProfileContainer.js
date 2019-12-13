import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProfileFormContainer from './ProfileFormContainer'
import Profile from '../components/Profile'
import { getProfiles } from '../modules/summaries'

class ProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProfiles()
  }

  render() {
    let displayProfiles = this.props.allSummaries.map((profile) => {
      return (
        <Profile
          key={profile.id}
          id={profile.id}
          name={profile.name}
        />
      )
    })
    return (
      <div>
        <div className="profiles">
          {displayProfiles}
        </div>
        <ProfileFormContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allSummaries: state.summaries.allSummaries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfiles: () => dispatch(getProfiles())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
