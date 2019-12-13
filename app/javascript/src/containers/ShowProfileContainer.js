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
    this.props.showProfile(summaryKey)
  }

  render() {
    return(
      <div>
        <ShowProfile
          key={this.props.singleSummary.id}
          name={this.props.singleSummary.name}
          birthday={this.props.singleSummary.birthday}
          address={this.props.singleSummary.address}
          email={this.props.singleSummary.email}
          salary={this.props.singleSummary.salary}
          coverage={this.props.singleSummary.coverage}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    singleSummary: state.summaries.singleSummary
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
