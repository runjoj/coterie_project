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
    let summary = this.props.allSummaries.map(summary => {
      return(
        <div>
          <ShowProfile
            key={summary.id}
            name={summary.name}
            birthday={summary.birthday}
            address={summary.address}
            email={summary.email}
            salary={summary.salary}
            coverage={summary.coverage}
          />
        </div>
      )
    })
    return(
      <div>
        {summary}
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
    showProfile: (profile) => dispatch(showProfile(profile))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProfileContainer)
