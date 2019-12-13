import React, { Component } from 'react'
import { connect } from 'react-redux'

import ShowProfile from '../components/ShowProfile'
import { showProfile } from '../modules/summaries'

class ShowProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const summaryKey = this.props.match.params.id
    this.props.allSummaries(summaryKey)
  }

  render() {
    return(
      <div>
        <ShowProfile
          key={this.props.id}
          name={this.props.name}
          birthday={this.props.birthday}
          address={this.props.address}
          email={this.props.email}
          salary={this.props.salary}
          coverage={this.props.coverage}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.summaries.allSummaries.id,
    name: state.summaries.allSummaries.name,
    birthday: state.summaries.profileSummary.birthday,
    address: state.summaries.profileSummary.address,
    email: state.summaries.profileSummary.email,
    salary: state.summaries.profileSummary.salary,
    coverage: state.summaries.profileSummary.coverage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showProfile: (profile) => dispatch(showProfile(profile))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfileContainer)
