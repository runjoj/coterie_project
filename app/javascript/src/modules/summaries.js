import { displayAlertMessage } from './alertMessage.js'

const initialState = {
  profileSummary: [],
  summaryId: ''
}

const summaries = (state = initialState, action) => {
  switch(action.type) {
    case POST_PROFILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case POST_PROFILE_REQUEST_SUCCESS:
      console.log(action.profile)
      const newProfile = state.profileSummary.concat([action.profile])
      return Object.assign({}, state, {
        profileSummary: newProfile,
        isFetching: false
      })
    case POST_PROFILE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    case SHOW_PROFILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        summaryId: state.profileSummary.id
      })
    case SHOW_PROFILE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        profileSummary: action.summaries,
        isFetching: false
      })
    case SHOW_PROFILE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

const POST_PROFILE_REQUEST = 'POST_PROFILE_REQUEST'

const postProfileRequest = () => {
  return {
    type: POST_PROFILE_REQUEST
  }
}

const POST_PROFILE_REQUEST_SUCCESS = 'POST_PROFILE_REQUEST_SUCCESS'

const postProfileRequestSuccess = profile => {
  return {
    type: POST_PROFILE_REQUEST_SUCCESS,
    profile
  }
}

const POST_PROFILE_REQUEST_FAILURE = 'POST_PROFILE_REQUEST_FAILURE'

const postProfileRequestFailure = () => {
  return {
    type: POST_PROFILE_REQUEST_FAILURE
  }
}

const SHOW_PROFILE_REQUEST = 'SHOW_PROFILE_REQUEST'

const showProfileRequest = () => {
  return {
    type: SHOW_PROFILE_REQUEST
  }
}

const SHOW_PROFILE_REQUEST_SUCCESS = 'SHOW_PROFILE_REQUEST_SUCCESS'

const showProfileRequestSuccess = summaries => {
  return {
    type: SHOW_PROFILE_REQUEST_SUCCESS,
    summaries
  }
}

const SHOW_PROFILE_REQUEST_FAILURE = 'SHOW_PROFILE_REQUEST_FAILURE'

const showProfileRequestFailure = () => {
  return {
    type: SHOW_PROFILE_REQUEST_FAILURE
  }
}


const showProfile = (summaryKey) => {
  return (dispatch) => {
    dispatch(showProfileRequest())
    return fetch(`/api/v1/profiles/${summaryKey}.json`,
      {
        method: 'GET',
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        dispatch(showProfileRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Something went wrong.' }
      }
    })
    .then(profile => {
      if(!profile.error){
        dispatch(showProfileRequestSuccess(profile))
      }
    })
  }
}

const postProfile = summaryData => {
  return (dispatch) => {
    dispatch(postProfileRequest())

    return fetch(`/api/v1/profiles.json`,
      {
        method: 'POST',
        body: JSON.stringify(summaryData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(postProfileRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Something went wrong.' }
      }
    })
    .then(profile => {
      console.log(profile)
      if(!profile.error){
        dispatch(postProfileRequestSuccess(profile))
      }
    })
  }
}

export {
  summaries,
  postProfile,
  showProfile
}
