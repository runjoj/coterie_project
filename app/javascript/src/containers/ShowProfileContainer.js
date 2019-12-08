import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShowProfile from '../components/ShowProfile'
import { showProfile } from '../modules/summaries'

class ShowProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.showProfile()
  }

  render() {
    let displaySummary = this.props.profileSummary.map((summary) => {
      let id = profileSummary.id
      let name = profileSummary.name
      let birthday = profileSummary.birthday
      let address = profileSummary.address

      return (
        <ShowProfile
          key={id}
          name={name}
          birthday={birthday}
          address={address}
        />
      )
    })
    return(
      <div>
        {displaySummary}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileSummary: state.summaries.profileSummary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showProfile: () => dispatch(showProfile())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfileContainer)
