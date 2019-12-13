import { displayAlertMessage } from './alertMessage.js'

const initialState = {
  allSummaries: [],
  summaryId: '',
  isFetching: false
}

const summaries = (state = initialState, action) => {
  switch(action.type) {
    case POST_PROFILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case POST_PROFILE_REQUEST_SUCCESS:
      const newProfile = state.allSummaries.concat([action.profile])
      return Object.assign({}, state, {
        allSummaries: newProfile,
        isFetching: false
      })
    case POST_PROFILE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    case SHOW_PROFILE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        summaryId: state.allSummaries.id
      })
    case SHOW_PROFILE_REQUEST_SUCCESS:
    const newSummary = state.allSummaries.concat([action.summary])
      return Object.assign({}, state, {
        allSummaries: newSummary,
        isFetching: false
      })
    case SHOW_PROFILE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    case GET_PROFILES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case GET_PROFILES_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        allSummaries: action.summaries,
        isFetching: false
      })
    case GET_PROFILES_REQUEST_FAILURE:
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

const showProfileRequestSuccess = summary => {
  return {
    type: SHOW_PROFILE_REQUEST_SUCCESS,
    summary
  }
}

const SHOW_PROFILE_REQUEST_FAILURE = 'SHOW_PROFILE_REQUEST_FAILURE'

const showProfileRequestFailure = () => {
  return {
    type: SHOW_PROFILE_REQUEST_FAILURE
  }
}

const GET_PROFILES_REQUEST = 'GET_PROFILES_REQUEST'

const getProfilesRequest = () => {
  return {
    type: GET_PROFILES_REQUEST
  }
}

const GET_PROFILES_REQUEST_SUCCESS = 'GET_PROFILES_REQUEST_SUCCESS'

const getProfilesRequestSuccess = profiles => {
  return {
    type: GET_PROFILES_REQUEST_SUCCESS,
    profiles
  }
}

const GET_PROFILES_REQUEST_FAILURE = 'GET_PROFILES_REQUEST_FAILURE'

const getProfilesRequestFailure = () => {
  return {
    type: GET_PROFILES_REQUEST_FAILURE
  }
}

const getProfiles = () => {
  return (dispatch) => {
    dispatch(getProfilesRequest())

    return fetch('/api/v1/profiles.json')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        dispatch(getProfilesRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Something went wrong.' }
      }
    })
    .then(profiles => {
      if(!profiles.error){
        dispatch(getProfilesRequestSuccess(profiles))
      }
    })
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
    .then(summary => {
      if(!summary.error){
        dispatch(showProfileRequestSuccess(summary))
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
      if(!profile.error){
        dispatch(postProfileRequestSuccess(profile))
      }
    })
  }
}

export {
  summaries,
  postProfile,
  showProfile,
  getProfiles
}
